export interface UserMock {
  id?: number;
  firstName?: string;
  lastName?: string;
  firstNameReading?: string;
  lastNameReading?: string;
  gender?: number;
}
export type CreateUser =Partial<UserMock>