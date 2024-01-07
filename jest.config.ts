import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  rootDir:"./src/test",
  transform: { "^.+\\.tsx?$": ["ts-jest", {"rootDir": "."}] },
  globals: {
    "ts-jest": {
      tsconfig: {
        rootDir: '.'
      }
    }
  }
};
export default config;