
import dotenv from 'dotenv';
dotenv.config();

type Config = {
  viewCache: boolean;
}

function parseBoolean(value?: string | number | boolean | null): boolean {
  value = value?.toString().toLowerCase();
  return value === 'true' || value === '1';
}

export default {
  viewCache: parseBoolean(process.env.VIEW_CACHE),
} as Config;