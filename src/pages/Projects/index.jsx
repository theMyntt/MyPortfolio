import React from "react";
import "./index.scss";

export default function Projects() {
  return (
    <div className="container">
      <div className="brand-container">
        <h2>Meu principais/futuros projetos</h2>
        <table>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Repositório</th>
            <th>Deploy/Release</th>
          </tr>
          <tr>
            <td>1</td>
            <td>MyPortfolio</td>
            <td><a href="https://github.com/theMyntt/MyPortfolio">Link para o repositório</a></td>
            <td><a href="https://portfolio-themyntt.netlify.app">Link para deploy</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>basicT</td>
            <td><a href="https://github.com/theMyntt/basicT">Link para o repositório</a></td>
            <td><a href="https://github.com/theMyntt/basicT/releases/">Link para a release</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Manage++</td>
            <td><a href="https://github.com/theMyntt/ManagePP">Link para o repositório</a></td>
            <td>N/D</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Financee</td>
            <td><a href="https://github.com/theMyntt/Financee">Link para o repositório</a></td>
            <td>N/D</td>
          </tr>
          <tr>
            <td>5</td>
            <td>HarmonyWave</td>
            <td>N/D</td>
            <td>N/D</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Luxure</td>
            <td><a href="https://github.com/theMyntt/Luxure">Link para o repositório</a></td>
            <td>N/D</td>
          </tr>
        </table>
        <button
          className="btn-proj"
          onClick={() =>
            (window.location.href =
              "https://github.com/theMyntt?tab=repositories")
          }
        >
          Confira todos e muito mais no Github
        </button>
      </div>{" "}
      <br />
      <div id="alem">
        <div id="text-alem">
          <h2>Manage++</h2> <br />
          <p>
            Antigo SearchPlus, o Manage++ é um sistema de gerenciamentode
            empresa com um design totalmente renovado e muitas novas funções.
            Ele também foi desenvolvido com PHP, porém, no Banco de Dados,
            decidi utilizar MySQL. <br />
            <br />
          </p>
          <p>
            Com ele será possível cadastrar,remover, gerenciar pagamento,
            beneficios de funcionários entre outras funções.
          </p>
          <button
            className="btn-proj"
            onClick={() =>
              (window.location.href = "https://github.com/theMyntt/ManagePP")
            }
          >
            Ver mais no Github
          </button>
        </div>
      </div>{" "}
      <br />
      <div className="brand" style={{ color: "#fff" }}>
        {/* <div id="brand-text"> */}
        <h2>basicT</h2> <br />
        <p>
          O basicT é um sistema PDV (Ponto de Venda) que foi desenvolvido com
          PHP e SQLite3. No momento, ele ainda está em suas versões inicias,
          existem muitas coisas para ser adicionadas nele. <br /> <br />O que é
          um sistema PDV? são um programa para os operadores de caixa do
          mercado. A vantagem do basicT é que ele é leve e simples de usar.
        </p>
        {/* </div> */}
        <button
          className="btn-proj"
          onClick={() =>
            (window.location.href = "https://github.com/theMyntt/basicT")
          }
        >
          Ver mais no Github
        </button>
      </div>
    </div>
  );
}
