export interface IUser {
  _id: string;
  name: string;
  email: string;
  address: string;
  avatar: string;
  createdAt: string;
  followers: any;
  following: any;
  gender: string;
  mobile: string;
  password: "";
  publicSaved: boolean;
  publicSocial: boolean;
  role: string;
  saved: any;
  story: string;
  updatedAt: string;
  website: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}
