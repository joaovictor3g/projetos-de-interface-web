import { api } from "@/services/api";
import { createContext, ReactNode, useEffect, useState } from "react";

export type User = {
  name: string;
  email: string;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  user: User | null;
  me(): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function me() {
    try {
      const response = await api.get("/me");
      setUser(response.data);
    } catch (err: unknown) {
      console.log(err);
    }
  }

  useEffect(() => {
    me();
  }, []);

  return (
    <AuthContext.Provider value={{ user, me }}>{children}</AuthContext.Provider>
  );
}
