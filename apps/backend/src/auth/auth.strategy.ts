import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'oauth-bearer'
) {
  constructor() {
    super({
      identityMetadata: `https://mediusapp.b2clogin.com/mediusapp.onmicrosoft.com/B2C_1_signupsignin1/v2.0/.well-known/openid-configuration`,
      clientID: '9a38dd74-f8d7-4aaa-9faa-9d876f5dea2e',
      audience: '9a38dd74-f8d7-4aaa-9faa-9d876f5dea2e',
      isB2C: true,
      validateIssuer: false,
      loggingLevel: 'info',
      passReqToCallback: false,
      policyName: 'B2C_1_signupsignin1',
    });
  }

  async validate(response: any) {
    console.log(response);
    const { unique_name }: { unique_name: string } = response;
    if (unique_name) return unique_name;
    else return null;
  }
}
