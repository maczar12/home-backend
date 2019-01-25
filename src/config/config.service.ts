import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this.envConfig = dotenv.parse(fs.readFileSync('development.env'));
    } else {
      this.envConfig = process.env;
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getMongoDbUri() {
    return this.get('DATABASE_SERVICE_NAME') + '://' +
      this.get('MONGODB_USER') + ':' +
      this.get('MONGODB_PASSWORD') + '@' +
      this.get('MONGODB_SERVICE_HOST') + ':' +
      this.get('MONGODB_SERVICE_PORT') + '/' +
      this.get('MONGODB_DATABASE');
  }
}
