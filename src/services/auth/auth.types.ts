export interface RegisterPayload {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface ForgotPasswordPayload {
    email: string;
}

export interface ResetPasswordPayload {
    token: string;
    password: string;
}

export interface UserProfile {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    bio: string | null;
    profilePicture: string | null;
    phoneNumber: string | null;
    timezone: string | null;
    availability: string | null;
    rating: number;
    totalReviews: number;
    createdAt: number;
    updatedAt: number;
}

export interface User {
    id: string;
    email: string;
    role: string;
    profile: UserProfile;
}

export interface AuthResponse {
    token: string;
    user: User;
}
