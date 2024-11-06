const DEFAULT_PORT = {
  user: 15001,
  task: 15002,
  gateway: 3333,
};

// Gateway
export const gatewayConfig = {
  host: process.env['GATEWAY_HOST'] ?? undefined,
  port: process.env['GATEWAY_PORT'] ?? DEFAULT_PORT.gateway,
};

// Graphql
export const userSubGraph = {
  host: process.env['USER_HOST'] ?? undefined,
  port: process.env['USER_PORT'] ?? DEFAULT_PORT.user,
};

export const taskSubGraph = {
  host: process.env['TASK_HOST'] ?? undefined,
  port: process.env['TASK_PORT'] ?? DEFAULT_PORT.task,
};