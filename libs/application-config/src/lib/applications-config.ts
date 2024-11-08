interface ApplicationConfig {
  host: string;
  port: string;
  name: string;
}

const DEFAULT_HOST = 'http://localhost';

const DEFAULT_PORT = {
  user: '15001',
  task: '15002',
  gateway: '3333',
};

// Gateway
export const gatewayConfig: ApplicationConfig = {
  host: process.env['GATEWAY_HOST'] ?? DEFAULT_HOST,
  port: process.env['GATEWAY_PORT'] ?? DEFAULT_PORT.gateway,
  name: 'gateway',
};

// Graphql
export const userSubGraph: ApplicationConfig = {
  host: process.env['USER_HOST'] ?? DEFAULT_HOST,
  port: process.env['USER_PORT'] ?? DEFAULT_PORT.user,
  name: 'user',
};

export const taskSubGraph: ApplicationConfig = {
  host: process.env['TASK_HOST'] ?? DEFAULT_HOST,
  port: process.env['TASK_PORT'] ?? DEFAULT_PORT.task,
  name: 'task',
};
