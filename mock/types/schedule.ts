export type ScheduleMock = {
  id?: number;
  movieId?: number;
  movieName?: string;
  theater?: string;
  startTime?: string;
  endTime?: string;
  isAvailable?: boolean;
};

export type CreateSchedule = Partial<ScheduleMock>;
export type UpdateSchedule = Partial<Omit<ScheduleMock, "id">>;
