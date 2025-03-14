import { BadRequestException, Injectable } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GetAllUserTasksUseCase,
  CreateSomeUserTasksUseCase,
  UpdateSomeUserTasksUseCase,
} from '@tasks/application';

import { CreateUserTaskDto } from '../dto/create-user-task.dto';
import { UpdateUserTaskDto } from '../dto/update-user-task.dto';
import { UserTaskDto } from '../dto/user-task.dto';

@Injectable()
@Resolver(() => [UserTaskDto])
export class UserTasksResolver {
  constructor(
    private readonly getUserTasksUseCase: GetAllUserTasksUseCase,
    private readonly createSomeUserTasksUseCase: CreateSomeUserTasksUseCase,
    private readonly updateSomeUserTasksUseCase: UpdateSomeUserTasksUseCase,
  ) {}

  @Query(() => [UserTaskDto])
  async getUserTasks(
    @Args('userId', {
      description: 'The ID of the user to find tasks for',
    })
    userId: string,
  ): Promise<UserTaskDto[]> {
    if (!userId?.trim()) {
      throw new BadRequestException('Invalid userId'); // TODO: using error codes
    }
    const userTasks = await this.getUserTasksUseCase.execute(userId);

    return userTasks.map(
      (userTask) =>
        new UserTaskDto(
          userTask.id,
          userTask.createdAt,
          userTask.updatedAt,
          userTask.taskId,
          userTask.userId,
        ),
    );
  }

  @Mutation(() => String)
  async createUserTasks(
    @Args('userId') userId: string,
    @Args('tasks', { type: () => [CreateUserTaskDto] })
    tasks: CreateUserTaskDto[],
  ): Promise<string> {
    return this.createSomeUserTasksUseCase.execute(userId, tasks);
  }

  @Mutation(() => String)
  async updateUserTasks(
    @Args('userId') userId: string,
    @Args('userTasks', { type: () => [UpdateUserTaskDto] })
    userTasks: UpdateUserTaskDto[],
  ): Promise<string> {
    return this.updateSomeUserTasksUseCase.execute(userId, userTasks);
  }
}
