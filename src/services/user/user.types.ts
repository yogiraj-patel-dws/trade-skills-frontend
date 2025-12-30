export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface CreateUserRequest {
  name: string;
  email: string;
}
