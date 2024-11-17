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

        createMany: procedure.input($Schema.SkillInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).skill.createMany(input as any))),

        create: procedure.input($Schema.SkillInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).skill.create(input as any))),

        deleteMany: procedure.input($Schema.SkillInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).skill.deleteMany(input as any))),

        delete: procedure.input($Schema.SkillInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).skill.delete(input as any))),

        findFirst: procedure.input($Schema.SkillInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).skill.findFirst(input as any))),

        findMany: procedure.input($Schema.SkillInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).skill.findMany(input as any))),

        findUnique: procedure.input($Schema.SkillInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).skill.findUnique(input as any))),

        updateMany: procedure.input($Schema.SkillInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).skill.updateMany(input as any))),

        update: procedure.input($Schema.SkillInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).skill.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SkillCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SkillCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SkillCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SkillCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SkillCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SkillCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SkillGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SkillGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SkillCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SkillCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SkillGetPayload<T>, Context>) => Promise<Prisma.SkillGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SkillDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SkillDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SkillDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SkillDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SkillDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SkillDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SkillGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SkillGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SkillDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SkillDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SkillGetPayload<T>, Context>) => Promise<Prisma.SkillGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SkillFindFirstArgs, TData = Prisma.SkillGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SkillFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SkillGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SkillFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SkillFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SkillGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SkillGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SkillFindManyArgs, TData = Array<Prisma.SkillGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SkillFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SkillGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SkillFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SkillFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SkillGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SkillGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SkillFindUniqueArgs, TData = Prisma.SkillGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SkillFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SkillGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SkillFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SkillFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SkillGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SkillGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SkillUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SkillUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SkillUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SkillUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SkillUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SkillUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SkillGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SkillGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SkillUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SkillUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SkillGetPayload<T>, Context>) => Promise<Prisma.SkillGetPayload<T>>
            };

    };
}
