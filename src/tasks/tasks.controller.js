const { Controller, Get, Post, Body, Req, UseGuards } = require('@nestjs/common');
const { TasksService } = require('./tasks.service');
const { AuthGuard } = require('@nestjs/passport');

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
class TasksController {
  constructor(tasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  async getTasks(@Req() req) {
    return this.tasksService.getTasks(req.user.userId);
  }

  @Post()
  async addTask(
    @Req() req,
    @Body('title') title,
    @Body('description') description,
  ) {
    return this.tasksService.addTask(req.user.userId, title, description);
  }
}

module.exports = { TasksController };
