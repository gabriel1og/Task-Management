import { DeepPartial } from 'typeorm';
import { ITask } from 'src/domain/interfaces/task.interface';

export interface ITasksRepository {
  findAll(userId: number): Promise<ITask[]>;
  findById(id: number): Promise<ITask>;
  add(payload: DeepPartial<ITask>): Promise<ITask>;
  updateById(payload: DeepPartial<ITask>);
}
