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

        createMany: procedure.input($Schema.MentorInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentor.createMany(input as any))),

        create: procedure.input($Schema.MentorInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentor.create(input as any))),

        deleteMany: procedure.input($Schema.MentorInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentor.deleteMany(input as any))),

        delete: procedure.input($Schema.MentorInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentor.delete(input as any))),

        findFirst: procedure.input($Schema.MentorInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).mentor.findFirst(input as any))),

        findMany: procedure.input($Schema.MentorInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).mentor.findMany(input as any))),

        findUnique: procedure.input($Schema.MentorInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).mentor.findUnique(input as any))),

        updateMany: procedure.input($Schema.MentorInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentor.updateMany(input as any))),

        update: procedure.input($Schema.MentorInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).mentor.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MentorCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentorCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentorCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentorCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MentorCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentorCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MentorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MentorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentorCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentorCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MentorGetPayload<T>, Context>) => Promise<Prisma.MentorGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MentorDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentorDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentorDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentorDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MentorDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentorDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MentorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MentorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentorDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentorDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MentorGetPayload<T>, Context>) => Promise<Prisma.MentorGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MentorFindFirstArgs, TData = Prisma.MentorGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MentorFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MentorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MentorFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MentorFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MentorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MentorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MentorFindManyArgs, TData = Array<Prisma.MentorGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MentorFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MentorGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MentorFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MentorFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MentorGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MentorGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MentorFindUniqueArgs, TData = Prisma.MentorGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MentorFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MentorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MentorFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MentorFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MentorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MentorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MentorUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentorUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentorUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentorUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MentorUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MentorUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MentorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MentorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MentorUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MentorUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MentorGetPayload<T>, Context>) => Promise<Prisma.MentorGetPayload<T>>
            };

    };
}
