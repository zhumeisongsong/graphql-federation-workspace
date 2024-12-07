import { gatewayConfig, userAppConfig } from './applications.config';

describe('Config Tests', () => {
  describe('gatewayConfig', () => {
    it('should return default gateway config when no environment variables are set', () => {
      const config = gatewayConfig();
      expect(config).toEqual({
        protocol: 'http',
        host: 'localhost',
        port: 3333,
      });
    });

    it('should return gateway config with environment variables', () => {
      process.env['PROTOCOL'] = 'https';
      process.env['GATEWAY_HOST'] = 'gateway.example.com';
      process.env['GATEWAY_PORT'] = '4444';

      const config = gatewayConfig();
      expect(config).toEqual({
        protocol: 'https',
        host: 'gateway.example.com',
        port: 4444,
      });

      delete process.env['PROTOCOL'];
      delete process.env['GATEWAY_HOST'];
      delete process.env['GATEWAY_PORT'];
    });
  });

  describe('userAppConfig', () => {
    it('should return default user app config when no environment variables are set', () => {
      const config = userAppConfig();
      expect(config).toEqual({
        protocol: 'http',
        host: 'localhost',
        port: 15001,
        name: 'user',
      });
    });

    it('should return user app config with environment variables', () => {
      process.env['PROTOCOL'] = 'https';
      process.env['USER_HOST'] = 'user.example.com';
      process.env['USER_PORT'] = '5555';

      const config = userAppConfig();
      expect(config).toEqual({
        protocol: 'https',
        host: 'user.example.com',
        port: 5555,
        name: 'user',
      });

      delete process.env['PROTOCOL'];
      delete process.env['USER_HOST'];
      delete process.env['USER_PORT'];
    });
  });
});