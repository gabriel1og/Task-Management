import { Module } from '@nestjs/common';
import { GetAllTasks–flatService } from './get-all-tasks–flat/get-all-tasks–flat.service';
import { GetTaskById–flatService } from './get-task-by-id–flat/get-task-by-id–flat.service';
import { CreateTask–flatService } from './create-task–flat/create-task–flat.service';
import { UpdateTask–flatService } from './update-task–flat/update-task–flat.service';

@Module({
  providers: [GetAllTasks–flatService, GetTaskById–flatService, CreateTask–flatService, UpdateTask–flatService]
})
export class TasksModule {}
