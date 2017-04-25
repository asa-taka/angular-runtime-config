import { Injectable } from '@angular/core';

interface RuntimeConfig {
  apiRoot: string;
  message: string;
}

declare const appRuntimeConfig: Partial<RuntimeConfig>;

@Injectable()
export class ConfigService {

  runtime: RuntimeConfig = {
    apiRoot: 'http://localhost:8080',
    message: 'will be overwritten',
  };

  constructor() {
    if (typeof appRuntimeConfig !== 'undefined') {
      Object.assign(this.runtime, appRuntimeConfig);
    }
  }
}
