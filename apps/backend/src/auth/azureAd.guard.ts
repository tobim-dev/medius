import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AzureADGuard extends AuthGuard('azure-ad') {
  getRequest(context: ExecutionContext) {
    const gql = GqlExecutionContext.create(context);
    return gql.getContext().req;
  }
}
