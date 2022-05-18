export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUserWithCheck extends IUser {
  checked: boolean;
}

export interface UserPageProps {
  users: IUserWithCheck[];
  handleDelete: () => void;
  toggleChecked: (id: number) => void;
}
