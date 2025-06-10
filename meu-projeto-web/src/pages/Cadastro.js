import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { adicionarUsuario } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim() || !email.trim()) return;

    adicionarUsuario({ nome, email });

    setNome("");
    setEmail("");
    alert("Usuário cadastrado!");
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
