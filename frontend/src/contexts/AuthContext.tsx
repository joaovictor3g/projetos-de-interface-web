import { api } from "@/services/api";
import { getToken } from "@/utils/localStorage";
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
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getToken();

    if (token) {
      api
        .get("/user-by-id")
        .then((response) => setUser(response.data))
        .catch((err: unknown) => {
          // console.log(err);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
