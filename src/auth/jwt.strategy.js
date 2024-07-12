const { Strategy } = require('passport-jwt');
const { PassportStrategy } = require('@nestjs/passport');
const { Injectable } = require('@nestjs/common');
const { ExtractJwt } = require('passport-jwt');

@Injectable()
class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    return { userId: payload.userId };
  }
}

module.exports = { JwtStrategy };
