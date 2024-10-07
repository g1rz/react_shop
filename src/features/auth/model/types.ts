export type User = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    accessToken: string;
};

export type GetUser = {
    username: string;
    password: string;
};
