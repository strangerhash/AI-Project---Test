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

        createMany: procedure.input($Schema.UserSkillInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSkill.createMany(input as any))),

        create: procedure.input($Schema.UserSkillInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSkill.create(input as any))),

        deleteMany: procedure.input($Schema.UserSkillInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSkill.deleteMany(input as any))),

        delete: procedure.input($Schema.UserSkillInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSkill.delete(input as any))),

        findFirst: procedure.input($Schema.UserSkillInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).userSkill.findFirst(input as any))),

        findMany: procedure.input($Schema.UserSkillInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).userSkill.findMany(input as any))),

        findUnique: procedure.input($Schema.UserSkillInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).userSkill.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserSkillInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSkill.updateMany(input as any))),

        update: procedure.input($Schema.UserSkillInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userSkill.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserSkillCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSkillCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSkillCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSkillCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserSkillCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSkillCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserSkillGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserSkillGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSkillCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSkillCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserSkillGetPayload<T>, Context>) => Promise<Prisma.UserSkillGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserSkillDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSkillDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSkillDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSkillDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserSkillDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSkillDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserSkillGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserSkillGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSkillDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSkillDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserSkillGetPayload<T>, Context>) => Promise<Prisma.UserSkillGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserSkillFindFirstArgs, TData = Prisma.UserSkillGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserSkillFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserSkillGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserSkillFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserSkillFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserSkillGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserSkillGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserSkillFindManyArgs, TData = Array<Prisma.UserSkillGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserSkillFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserSkillGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserSkillFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserSkillFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserSkillGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserSkillGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserSkillFindUniqueArgs, TData = Prisma.UserSkillGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserSkillFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserSkillGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserSkillFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserSkillFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserSkillGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserSkillGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserSkillUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSkillUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSkillUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSkillUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserSkillUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserSkillUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserSkillGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserSkillGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserSkillUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserSkillUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserSkillGetPayload<T>, Context>) => Promise<Prisma.UserSkillGetPayload<T>>
            };

    };
}
