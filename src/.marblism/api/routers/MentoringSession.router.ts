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

        createMany: procedure.input($Schema.MentoringSessionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentoringSession.createMany(input as any))),

        create: procedure.input($Schema.MentoringSessionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentoringSession.create(input as any))),

        deleteMany: procedure.input($Schema.MentoringSessionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentoringSession.deleteMany(input as any))),

        delete: procedure.input($Schema.MentoringSessionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentoringSession.delete(input as any))),

        findFirst: procedure.input($Schema.MentoringSessionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).mentoringSession.findFirst(input as any))),

        findMany: procedure.input($Schema.MentoringSessionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).mentoringSession.findMany(input as any))),

        findUnique: procedure.input($Schema.MentoringSessionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).mentoringSession.findUnique(input as any))),

        updateMany: procedure.input($Schema.MentoringSessionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentoringSession.updateMany(input as any))),

        update: procedure.input($Schema.MentoringSessionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentoringSession.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MentoringSessionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentoringSessionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentoringSessionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentoringSessionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MentoringSessionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentoringSessionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MentoringSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MentoringSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentoringSessionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentoringSessionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MentoringSessionGetPayload<T>, Context>) => Promise<Prisma.MentoringSessionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MentoringSessionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentoringSessionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentoringSessionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentoringSessionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MentoringSessionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentoringSessionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MentoringSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MentoringSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentoringSessionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentoringSessionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MentoringSessionGetPayload<T>, Context>) => Promise<Prisma.MentoringSessionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MentoringSessionFindFirstArgs, TData = Prisma.MentoringSessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MentoringSessionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MentoringSessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MentoringSessionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MentoringSessionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MentoringSessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MentoringSessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MentoringSessionFindManyArgs, TData = Array<Prisma.MentoringSessionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MentoringSessionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MentoringSessionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MentoringSessionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MentoringSessionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MentoringSessionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MentoringSessionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MentoringSessionFindUniqueArgs, TData = Prisma.MentoringSessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MentoringSessionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MentoringSessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MentoringSessionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MentoringSessionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MentoringSessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MentoringSessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MentoringSessionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentoringSessionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentoringSessionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentoringSessionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MentoringSessionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentoringSessionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MentoringSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MentoringSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentoringSessionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentoringSessionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MentoringSessionGetPayload<T>, Context>) => Promise<Prisma.MentoringSessionGetPayload<T>>
            };

    };
}
