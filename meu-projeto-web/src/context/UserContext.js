import { createContext, useState } from "react";

// Criando o contexto
export const UserContext = createContext();

// Provedor do contexto
export function UserProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuario = (novoUsuario) => {
    setUsuarios((prev) => [...prev, novoUsuario]);
  };

  return (
    <UserContext.Provider value={{ usuarios, adicionarUsuario }}>
      {children}
    </UserContext.Provider>
  );
}
