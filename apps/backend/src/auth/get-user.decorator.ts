
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext): {username: string} => {
    const req = GqlExecutionContext.create(context).getContext().req
    return req.user;
  },
);
