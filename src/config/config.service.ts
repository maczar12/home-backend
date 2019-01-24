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
}
