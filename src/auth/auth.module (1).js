const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const { JwtModule } = require('@nestjs/jwt');
const { PassportModule } = require('@nestjs/passport');
const { AuthService } = require('./auth.service');
const { AuthController } = require('./auth.controller');
const { UserSchema } = require('./schemas/user.schema');
const { JwtStrategy } = require('./jwt.strategy');

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '1h' } }),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
class AuthModule {}

module.exports = { AuthModule };
