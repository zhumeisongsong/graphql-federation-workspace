import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '@users/interface-adapters';
import { IsDate, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

import { TaskDto } from './task.dto';

@ObjectType()
export class UserTaskDto {
  @Field(() => ID)
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Field(() => Date)
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  updatedAt: Date | null;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  taskId: string;

  @Field(() => TaskDto, { nullable: true })
  @IsOptional()
  task: TaskDto | null;

  @Field(() => String)
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @Field(() => UserDto, { nullable: true })
  @IsOptional()
  user: UserDto | null;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date | null,
    taskId: string,
    task: TaskDto | null,
    userId: string,
    user: UserDto | null,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.taskId = taskId;
    this.task = task;
    this.userId = userId;
    this.user = user;
  }
}
