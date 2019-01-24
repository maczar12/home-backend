import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    if (filePath === 'production') {
      this.envConfig = process.env;
    } else {
      this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    console.log('----111', this.envConfig, filePath);
  }

  get(key: string): string {
    console.log('------', this.envConfig[key]);
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
