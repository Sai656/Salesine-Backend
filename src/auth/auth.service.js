const { Injectable } = require('@nestjs/common');
const { InjectModel } = require('@nestjs/mongoose');
const bcrypt = require('bcryptjs');
const { JwtService } = require('@nestjs/jwt');

@Injectable()
class AuthService {
  constructor(@InjectModel('User') userModel, jwtService) {
    this.userModel = userModel;
    this.jwtService = jwtService;
  }

  async signup(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ email, password: hashedPassword });
    return user.save();
  }

  async login(email, password) {
    const user = await this.userModel.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    return this.jwtService.sign({ userId: user._id });
  }
}

module.exports = { AuthService };
