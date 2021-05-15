import { Module } from '@nestjs/common';
import { AzureADStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport';
import { AzureADGuard } from './azureAd.guard';


@Module({
  imports: [PassportModule],
  providers: [AzureADStrategy, AzureADGuard],
})
export class AuthModule {}
