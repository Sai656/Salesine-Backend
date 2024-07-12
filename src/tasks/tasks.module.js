const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const { TasksService } = require('./tasks.service');
const { TasksController } = require('./tasks.controller');
const { TaskSchema } = require('./schemas/task.schema');

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
class TasksModule {}

module.exports = { TasksModule };
