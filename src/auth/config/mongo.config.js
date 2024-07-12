const { MongooseModule } = require('@nestjs/mongoose');

const MongoConfig = MongooseModule.forRoot(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { MongoConfig };
