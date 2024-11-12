export interface ITokenContextProps {
  token: string | null;
  setToken: (token: string) => void;
  handleLogout: () => void;
}
