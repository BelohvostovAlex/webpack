export interface IUser {
  id: number;
  name: string;
  email: string;
  checked: boolean;
}

export interface UserPageProps {
  users: IUser[];
  handleDelete: (checked: boolean, id: number) => void;
  toggleChecked: (id: number) => void;
  changeSetIsAuth: (val: boolean) => void;
}
