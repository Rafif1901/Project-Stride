DROP TABLE IF EXISTS transaction_items CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS scores CASCADE;
DROP TABLE IF EXISTS marketplace CASCADE;
DROP TABLE IF EXISTS tracks CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    role VARCHAR(20) CHECK (role IN ('user', 'admin')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tracks (
    track_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_name VARCHAR(100) NOT NULL,
    start_place VARCHAR(100) NOT NULL,
    finish_place VARCHAR(100) NOT NULL,
    event_date TIMESTAMP NOT NULL,
    distance_km DECIMAL(5,2) NOT NULL,
    created_by UUID REFERENCES users(user_id) ON DELETE SET NULL
);

CREATE TABLE marketplace (
    item_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    sizes TEXT[] NOT NULL,
    stock INT NOT NULL,
    created_by UUID REFERENCES users(user_id) ON DELETE SET NULL
);

CREATE TABLE scores (
    score_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    track_id UUID REFERENCES tracks(track_id) ON DELETE CASCADE,
    time_finished TIME NOT NULL,
    pace VARCHAR(10) NOT NULL,
    sub VARCHAR(20),
    elevation INT,
    UNIQUE(user_id, track_id)
);

CREATE TABLE transactions (
    transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    total_price DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pending', 'success', 'failed')) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transaction_items (
    transaction_item_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_id UUID REFERENCES transactions(transaction_id) ON DELETE CASCADE,
    item_id UUID REFERENCES marketplace(item_id) ON DELETE RESTRICT,
    size VARCHAR(10) NOT NULL,
    quantity INT NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL
);


INSERT INTO users (first_name, last_name, username, email, phone_number, password, birth_date, role)
VALUES 
('Muhammad', 'Rafif', 'mrafif19', 'mrafif19@gmail.com', '+6281234567890', '$2b$10$i6AATZttKqlNK9dGhPrCyOL2zmoKQ3EI.0bESdbpoEJs4imJhYixu', '2004-05-17', 'admin'),
('Irgy', 'Rabbani', 'irgy123', 'irgy@gmail.com', '+6281234567891', '$2b$10$XyG0g.oyrX4jQiAJov9zl.0SrHgAI.rE8do/1C81jj8kNABuI09zW', '2004-01-01', 'admin'),
('Radya', 'Gardian', 'radya123', 'radya@gmail.com', '+6281234567892', '$2b$10$tk1V5Q5S/wGD7.yhgIzo0OU1cfw1Mo9Ht.mWrGNCZLwoDuiU3bHqG', '2004-01-02', 'admin'),
('Haikal', 'Inzaghi', 'haikal123', 'haikal@gmail.com', '+6281234567893', '$2b$10$/U3MUc4.KReQvSWJrKyYKOmxoNfMcPwq.VvWJ.z2Ar/Pcw0u06nKK', '2004-01-03', 'admin');

INSERT INTO tracks (event_name, start_place, finish_place, event_date, distance_km, created_by)
VALUES 
('Jakarta International Marathon 2026', 'Monas', 'Gelora Bung Karno', '2026-10-25 05:00:00', 42.19, (SELECT user_id FROM users WHERE email = 'mrafif19@gmail.com')),
('Sudirman Run 10K', 'FX Sudirman', 'FX Sudirman', '2026-11-10 06:00:00', 10.00, (SELECT user_id FROM users WHERE email = 'mrafif19@gmail.com')),
('UI Teknik Loop 5K', 'Fakultas Teknik UI', 'Perpustakaan Pusat UI', '2026-12-01 06:30:00', 5.00, (SELECT user_id FROM users WHERE email = 'mrafif19@gmail.com'));

INSERT INTO marketplace (item_name, description, price, sizes, stock, created_by)
VALUES 
('Stride Aero Jersey V2', 'Jersey lari kalcer bahan dryfit premium, anti-gerah.', 250000.00, ARRAY['S', 'M', 'L', 'XL'], 100, (SELECT user_id FROM users WHERE email = 'mrafif19@gmail.com')),
('Kalcer Running Socks', 'Kaos kaki lari anti-blister dengan grip ekstra.', 75000.00, ARRAY['All Size'], 200, (SELECT user_id FROM users WHERE email = 'mrafif19@gmail.com')),
('Finisher Windbreaker', 'Jaket lari super ringan penahan angin untuk cuaca dingin.', 450000.00, ARRAY['M', 'L', 'XL'], 50, (SELECT user_id FROM users WHERE email = 'mrafif19@gmail.com'));

INSERT INTO users (first_name, last_name, username, email, phone_number, password, birth_date, role)
VALUES 
('Budi', 'Pelari', 'budirunner', 'budi@stride.com', '+628999999999', 'dummy_hash_password', '1995-08-17', 'user');

INSERT INTO scores (user_id, track_id, time_finished, pace, sub, elevation)
SELECT 
    (SELECT user_id FROM users WHERE email = 'budi@stride.com'), 
    (SELECT track_id FROM tracks WHERE event_name = 'Sudirman Run 10K' LIMIT 1), 
    '00:55:30', '5:33', 'Sub 1', 45;