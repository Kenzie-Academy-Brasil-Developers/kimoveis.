import { z } from "zod";
import { createscheduleSchema } from "../schemas/schedule.schema";
import { Repository } from "typeorm";
import Schedule from "../entities/Schedule.entity";

export type CreateSchedule = z.infer<typeof createscheduleSchema>

export type ScheduleRepo = Repository<Schedule>