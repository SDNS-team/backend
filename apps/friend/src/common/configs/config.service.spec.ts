import * as envVar from 'env-var';
import { ConfigService } from './config.service';

interface ProcessEnv {
  [key: string]: string | undefined;
}

function setEnvironment(environment: ProcessEnv): void {
  jest.spyOn(envVar, 'get').mockImplementation((...args) => {
    const originalEnvVar = jest.requireActual('env-var');
    const env = originalEnvVar.from(environment);

    return env.get(...args);
  });
}

describe('ConfigService', () => {
  let configService: ConfigService;

  beforeEach(() => {
    configService = new ConfigService();
  });

  it('should be defined', () => {
    expect(configService).toBeDefined();
  });

  it('is production', () => {
    setEnvironment({
      NODE_ENV: 'production',
    });

    expect(configService.isProduction).toBeTruthy();
  });

  it('is not production', () => {
    setEnvironment({
      NODE_ENV: 'local',
    });

    expect(configService.isProduction).toBeFalsy();
  });
});
