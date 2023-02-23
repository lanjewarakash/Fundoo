export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IUserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  service: string;
}
export interface IUserResetPassword {
  password: string;
  confirmPassword: string;
}
export interface IUserForgotPassword {
  email: string;
}

export interface CreateNote {
  title: string;
  note: string;
}
