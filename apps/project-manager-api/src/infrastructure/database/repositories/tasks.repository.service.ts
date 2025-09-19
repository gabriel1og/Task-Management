import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TasksEntity } from '../entities/task.entity';
import { ITask } from '@project-manager-api/domain/interfaces/task.interface';
import { ITasksRepository } from './tasks-repository.interface';

@Injectable()
export class TasksRepositoryService
  extends Repository<TasksEntity>
  implements ITasksRepository
{
  constructor(dataSource: DataSource) {
    super(TasksEntity, dataSource.createEntityManager());
  }
  findAll(userId: number): Promise<ITask[]> {
    return this.findBy({ user: { id: userId } });
  }
  findById(id: number): Promise<ITask> {
    return this.findOneBy({ id }) as Promise<ITask>;
  }
  add(payload: DeepPartial<ITask>): Promise<ITask> {
    return this.save(payload) as Promise<ITask>;
  }
  updateById(payload: DeepPartial<ITask>) {
    return this.update(payload.id!, payload);
  }
}
