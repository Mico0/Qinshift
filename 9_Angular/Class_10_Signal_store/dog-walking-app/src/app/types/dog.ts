export interface Dog {
  id: number;
  name: string;
  breed: string;
  age: number;
  createdAt: Date;
  walkCount: number;
  lastWalked?: Date;
}
