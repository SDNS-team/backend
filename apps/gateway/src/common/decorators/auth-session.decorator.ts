import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserSession } from '../interfaces/user-session.interface';

export const AuthSession = createParamDecorator((_data: unknown, context: ExecutionContext): UserSession => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user as UserSession;
});
