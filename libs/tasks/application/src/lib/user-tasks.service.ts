import { Injectable } from '@nestjs/common';

@Injectable()
export class UserTasksService {
  async findMany(
    userId: string,
  ): Promise<[]> {
    // TODO: Implement this
    return [];
  }

  async createSome(
    userId: string,
    tasks: { id: string; createdAt: Date }[],
  ): Promise<string> {
    // TODO: Implement this
    return 'success';
  }

  async updateSome(
    userId: string,
    userTasks: { id: string; updatedAt: Date }[],
  ): Promise<string> {
    // TODO: Implement this
    return 'success';
  }
}