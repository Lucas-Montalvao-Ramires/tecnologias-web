import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
  const { usuarios } = useContext(UserContext);

  return (
    <div>
      <h1>Lista de Usuários</h1>

      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado ainda.</p>
      ) : (
        <ul>
          {usuarios.map((user, index) => (
            <li key={index}>
              <strong>Nome:</strong> {user.nome} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
