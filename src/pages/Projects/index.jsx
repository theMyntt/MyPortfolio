import React from "react";
import "./index.scss";

function toGit() {
  return (window.location.href = "https://github.com/theMyntt/");
}

export default function Projects() {
  return (
    <div className="container">
      <div className="brand-container">
        <h2>Algum dos meu projetos mais recentes</h2>
        <ul>
          <li>
            <a href="https://github.com/theMyntt/basicT" className="white"><b>basicT: </b>Programa de Ponto de Vendas. Inclui sistemas de
            venda, login, cadastro de usuários, deletar usuários, histórico de
            vendas e histórico de login.</a>
          </li>
          <li>
            <a href="https://github.com/theMyntt/TS_Calculator" className="white"><b>TS_Calculator: </b>Uma calculadora convencional desenvolvida com
            TypeScript</a>
          </li>
          <li>
            <a href="https://github.com/theMyntt/SearchPlus" className="white"><b>Manage++ (Antigo SeachPlus): </b>Sistema controle de
            funcionarios, cliente, voluntários.</a>
          </li>
        </ul>
        <button className="btn-proj" onClick={toGit}>
          Veja mais no meu GitHub
        </button>
      </div>
    </div>
  );
}
