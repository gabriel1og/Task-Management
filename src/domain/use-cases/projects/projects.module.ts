import { Module } from '@nestjs/common';
import { GetAllProjects–flatService } from './get-all-projects–flat/get-all-projects–flat.service';
import { GetProjectById–flatService } from './get-project-by-id–flat/get-project-by-id–flat.service';
import { CreateProject–flatService } from './create-project–flat/create-project–flat.service';

@Module({
  providers: [GetAllProjects–flatService, GetProjectById–flatService, CreateProject–flatService]
})
export class ProjectsModule {}
