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

        createMany: procedure.input($Schema.UserJobInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userJob.createMany(input as any))),

        create: procedure.input($Schema.UserJobInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userJob.create(input as any))),

        deleteMany: procedure.input($Schema.UserJobInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userJob.deleteMany(input as any))),

        delete: procedure.input($Schema.UserJobInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userJob.delete(input as any))),

        findFirst: procedure.input($Schema.UserJobInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).userJob.findFirst(input as any))),

        findMany: procedure.input($Schema.UserJobInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).userJob.findMany(input as any))),

        findUnique: procedure.input($Schema.UserJobInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).userJob.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserJobInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userJob.updateMany(input as any))),

        update: procedure.input($Schema.UserJobInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userJob.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserJobCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserJobCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserJobCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserJobCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserJobCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserJobCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserJobGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserJobGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserJobCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserJobCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserJobGetPayload<T>, Context>) => Promise<Prisma.UserJobGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserJobDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserJobDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserJobDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserJobDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserJobDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserJobDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserJobGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserJobGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserJobDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserJobDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserJobGetPayload<T>, Context>) => Promise<Prisma.UserJobGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserJobFindFirstArgs, TData = Prisma.UserJobGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserJobFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserJobGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserJobFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserJobFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserJobGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserJobGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserJobFindManyArgs, TData = Array<Prisma.UserJobGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserJobFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserJobGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserJobFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserJobFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserJobGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserJobGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserJobFindUniqueArgs, TData = Prisma.UserJobGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserJobFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserJobGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserJobFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserJobFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserJobGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserJobGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserJobUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserJobUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserJobUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserJobUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserJobUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserJobUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserJobGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserJobGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserJobUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserJobUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserJobGetPayload<T>, Context>) => Promise<Prisma.UserJobGetPayload<T>>
            };

    };
}
