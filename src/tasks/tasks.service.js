const { Injectable } = require('@nestjs/common');
const { InjectModel } = require('@nestjs/mongoose');

@Injectable()
class TasksService {
  constructor(@InjectModel('Task') taskModel) {
    this.taskModel = taskModel;
  }

  async getTasks(userId) {
    return this.taskModel.find({ userId }).exec();
  }

  async addTask(userId, title, description) {
    const task = new this.taskModel({ userId, title, description });
    return task.save();
  }
}

module.exports = { TasksService };
