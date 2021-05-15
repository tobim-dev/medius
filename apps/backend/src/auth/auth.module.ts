import { Module } from '@nestjs/common';
import { AzureADStrategy } from './auth.strategy';

@Module({
  providers: [AzureADStrategy],
})
export class AuthModule {}
