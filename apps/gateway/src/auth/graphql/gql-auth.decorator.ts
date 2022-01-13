import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    console.log(
      '🚀 ~ file: gql-auth.decorator.ts ~ line 7 ~ ctx',
      ctx.getContext().req.user,
    );
    return ctx.getContext().req.user;
  },
);
