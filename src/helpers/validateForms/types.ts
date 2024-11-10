export interface IUserRegister {
    name: string;
    email: string;
    idNumber: string;
    password: string;
    repeatPassword: string;
};

export interface IUserLogin {
    email: string;
    password: string;
};

export interface IError {
    name?: string;
    email?: string;
    idNumber?: string;
    password?: string;
    repeatPassword?: string;
};