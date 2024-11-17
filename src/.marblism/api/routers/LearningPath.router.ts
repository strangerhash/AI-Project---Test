/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.LearningPathInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPath.createMany(input as any))),

        create: procedure.input($Schema.LearningPathInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPath.create(input as any))),

        deleteMany: procedure.input($Schema.LearningPathInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPath.deleteMany(input as any))),

        delete: procedure.input($Schema.LearningPathInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPath.delete(input as any))),

        findFirst: procedure.input($Schema.LearningPathInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).learningPath.findFirst(input as any))),

        findMany: procedure.input($Schema.LearningPathInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).learningPath.findMany(input as any))),

        findUnique: procedure.input($Schema.LearningPathInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).learningPath.findUnique(input as any))),

        updateMany: procedure.input($Schema.LearningPathInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPath.updateMany(input as any))),

        update: procedure.input($Schema.LearningPathInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).learningPath.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.LearningPathCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPathCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPathCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPathCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.LearningPathCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPathCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LearningPathGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LearningPathGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPathCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPathCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LearningPathGetPayload<T>, Context>) => Promise<Prisma.LearningPathGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.LearningPathDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPathDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPathDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPathDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LearningPathDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPathDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LearningPathGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LearningPathGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPathDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPathDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LearningPathGetPayload<T>, Context>) => Promise<Prisma.LearningPathGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LearningPathFindFirstArgs, TData = Prisma.LearningPathGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LearningPathFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LearningPathGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LearningPathFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LearningPathFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LearningPathGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LearningPathGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LearningPathFindManyArgs, TData = Array<Prisma.LearningPathGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.LearningPathFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LearningPathGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LearningPathFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LearningPathFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LearningPathGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LearningPathGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LearningPathFindUniqueArgs, TData = Prisma.LearningPathGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LearningPathFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LearningPathGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LearningPathFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LearningPathFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LearningPathGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LearningPathGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.LearningPathUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPathUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPathUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPathUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.LearningPathUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LearningPathUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LearningPathGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LearningPathGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LearningPathUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LearningPathUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LearningPathGetPayload<T>, Context>) => Promise<Prisma.LearningPathGetPayload<T>>
            };

    };
}
