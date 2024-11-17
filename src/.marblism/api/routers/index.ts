/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createSkillRouter from "./Skill.router";
import createLearningPathRouter from "./LearningPath.router";
import createJobRouter from "./Job.router";
import createCourseRouter from "./Course.router";
import createMentorRouter from "./Mentor.router";
import createUserSkillRouter from "./UserSkill.router";
import createUserCourseRouter from "./UserCourse.router";
import createUserJobRouter from "./UserJob.router";
import createMentoringSessionRouter from "./MentoringSession.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as SkillClientType } from "./Skill.router";
import { ClientType as LearningPathClientType } from "./LearningPath.router";
import { ClientType as JobClientType } from "./Job.router";
import { ClientType as CourseClientType } from "./Course.router";
import { ClientType as MentorClientType } from "./Mentor.router";
import { ClientType as UserSkillClientType } from "./UserSkill.router";
import { ClientType as UserCourseClientType } from "./UserCourse.router";
import { ClientType as UserJobClientType } from "./UserJob.router";
import { ClientType as MentoringSessionClientType } from "./MentoringSession.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        skill: createSkillRouter(router, procedure),
        learningPath: createLearningPathRouter(router, procedure),
        job: createJobRouter(router, procedure),
        course: createCourseRouter(router, procedure),
        mentor: createMentorRouter(router, procedure),
        userSkill: createUserSkillRouter(router, procedure),
        userCourse: createUserCourseRouter(router, procedure),
        userJob: createUserJobRouter(router, procedure),
        mentoringSession: createMentoringSessionRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    skill: SkillClientType<AppRouter>;
    learningPath: LearningPathClientType<AppRouter>;
    job: JobClientType<AppRouter>;
    course: CourseClientType<AppRouter>;
    mentor: MentorClientType<AppRouter>;
    userSkill: UserSkillClientType<AppRouter>;
    userCourse: UserCourseClientType<AppRouter>;
    userJob: UserJobClientType<AppRouter>;
    mentoringSession: MentoringSessionClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
