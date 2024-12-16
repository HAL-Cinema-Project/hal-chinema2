export type ScheduleMock = {
  id?: string;
  movieId?: string;
  movieName?: string;
  theater?: string;
  startTime?: string;
  endTime?: string;
  isAvailable?: string;
};

export type CreateSchedule = Partial<ScheduleMock>;
export type UpdateSchedule = Partial<Omit<ScheduleMock, "id">>;
