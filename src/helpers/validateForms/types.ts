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

export interface IUserUpdate {
    name: string;
    email: string;
    idNumber: string;
};

export interface IChangePassword {
    password: string;
    newPassword: string;
};

export interface IError {
    name?: string;
    email?: string;
    idNumber?: string;
    password?: string;
    repeatPassword?: string;
    newPassword?: string;
};