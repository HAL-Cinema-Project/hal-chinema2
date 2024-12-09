export interface UserMock {
  id?: string;
  firstName?: string;
  lastName?: string;
  firstNameReading?: string;
  lastNameReading?: string;
  gender?: number;
}
export type CreateUser = Partial<UserMock>;
