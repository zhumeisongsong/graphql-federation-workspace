import { GetUserUsecase } from './get-user.usecase';
import { UserRepository } from '@user/domain';

describe('GetUserUsecase', () => {
  let getUserUsecase: GetUserUsecase;
  let userRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    userRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
    } as unknown as jest.Mocked<UserRepository>;

    getUserUsecase = new GetUserUsecase(userRepository);
  });

  describe('execute', () => {
    it('should return a user when found', async () => {
      const user = { id: '1', name: 'John Doe' };
      userRepository.findById.mockResolvedValue(user);

      const result = await getUserUsecase.execute('1');

      expect(result).toEqual(user);
      expect(userRepository.findById).toHaveBeenCalledWith('1');
    });

    it('should return null when user is not found', async () => {
      userRepository.findById.mockResolvedValue(null);

      const result = await getUserUsecase.execute('1');

      expect(result).toBeNull();
      expect(userRepository.findById).toHaveBeenCalledWith('1');
    });
  });

  describe('executeAll', () => {
    it('should return all users', async () => {
      const users = [{ id: '1', name: 'John Doe' }, { id: '2', name: 'Jane Doe' }];
      userRepository.findAll.mockResolvedValue(users);

      const result = await getUserUsecase.executeAll();

      expect(result).toEqual(users);
      expect(userRepository.findAll).toHaveBeenCalled();
    });
  });
});