import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  rootDir:"./src",
  transform: { "^.+\\.test\\.tsx?$": ["ts-jest", {
    tsconfig: '<rootDir>/../tsconfig.json'
  }] }
};
export default config;