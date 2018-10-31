export interface User {
  firstName: string;
  secondName: string;
  age?: number;
  email: string;
  phone?: string;
  address?: {
    street: string,
    city: string,
    state: string
  };
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
}
