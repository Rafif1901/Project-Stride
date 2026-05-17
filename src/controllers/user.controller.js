const UserService = require('../services/user.service');

class UserController {
  static async register(req, res, next) {
    try {
      const { first_name, last_name, username, email, phone_number, password, birth_date, role } = req.body;
      const user = await UserService.register({ 
        first_name, last_name, username, email, phone_number, password, birth_date, role 
      });
      
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        payload: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await UserService.login(email, password);
      
      res.status(200).json({
        success: true,
        message: 'Login successful',
        payload: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;