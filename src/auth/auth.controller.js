const { Controller, Post } = require('@nestjs/common');
const { AuthService } = require('./auth.service');

@Controller('auth')
class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  @Post('signup')
  async signup(req, res) {
    const { email, password } = req.body;
    try {
      const result = await this.authService.signup(email, password);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  @Post('login')
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const token = await this.authService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = { AuthController };


