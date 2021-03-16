export interface IUser {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    access_token?: string;
    isDeleting: boolean;
}