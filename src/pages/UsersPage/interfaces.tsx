export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface UserPageProps {
  users: IUser[];
  handleDelete: () => void;
  toggleChecked: (id: number) => void;
}
