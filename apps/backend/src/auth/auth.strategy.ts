import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';
import * as config from './config.json';

export interface User {
  username: string;
}

@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad'
) {
  constructor() {
    super({
      identityMetadata: `https://${config.credentials.tenantName}.b2clogin.com/${config.credentials.tenantName}.onmicrosoft.com/${config.policies.policyName}/${config.metadata.version}/${config.metadata.discovery}`,
      clientID: config.credentials.clientID,
      audience: config.credentials.clientID,
      policyName: config.policies.policyName,
      isB2C: config.settings.isB2C,
      validateIssuer: config.settings.validateIssuer,
      passReqToCallback: config.settings.passReqToCallback
    });
  }

  async validate(payload): Promise<User> {
    return { username: payload.name }
  }
}


