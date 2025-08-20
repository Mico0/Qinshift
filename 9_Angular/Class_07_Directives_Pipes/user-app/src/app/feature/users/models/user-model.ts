export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  dateOfBirth: Date;
  hourlyRate: number;
  rating: number;
  address: Address;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
