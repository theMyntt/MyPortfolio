import React from "react";
import "./index.scss";

let i = 0;

function toGit() {
  return (window.location.href = "https://github.com/theMyntt/");
}

function seeMore(idElement, idBtn) {
  const id = document.getElementById(idElement);
  const btn = document.getElementById(idBtn);

  if (i % 2 == 0){
    id.classList.add("expand");
    btn.textContent = "Ver menos";
  }else{
    id.classList.remove("expand");
    btn.textContent = "Ver mais";
  }

  i++;
}

export default function Projects() {
  return (
    <div className="container">
      <div className="brand-container">
        <h2>Meu principais projetos</h2>
        <div className="proj-card-control">
          <div className="proj-card card-one" id="card-one">
            <div className="title">
              <h2>basicT</h2> 
              <button className="btn" id="one" onClick={() => seeMore("card-one", "one")}>Ver mais</button>
            </div>
            <div className="card-one info1">
              <article>
                <h4>Descrição do projeto</h4>
                <p>O basicT é um sistema PDV (Ponto de Venda) que foi desenvolvido com PHP e SQLite3. No momento, ele ainda está em suas versões inicias, existem muitas coisas para ser adicionadas nele.</p>
                <p><b>O que é um sistema PDV?</b> são um programa para os operadores de caixa do mercado. A vantagem do basicT é que ele é leve e simples de usar.</p>
                <a href="https://github.com/theMyntt/basicT"><u>Projeto no GitHub</u></a>
              </article>
            </div>
            
          </div>
          <div className="proj-card card-two" id="card-two">
            <div className="title">
              <h2>Manage++</h2>
              <button className="btn" id="two" onClick={() => seeMore("card-two", "two")}>Ver mais</button>
            </div>
            <div className="card-two info1">
              <article>
                <h4>Descrição do projeto</h4>
                <article>
                  <p>Antigo SearchPlus, ele é um sistema de controle de funcionários ou clientes. No atual momento, estou pensando em formas de reconstruir ele do zero. De uma forma mais intuitiva e simples de se usar. Ele também foi desenvolvido com PHP, porém, no Banco de Dados, decidi utilizar MySQL.</p>
                  <a href="https://github.com/theMyntt/SearchPlus"><u>Projeto no GitHub</u></a>
                </article>
              </article>
            </div>
          </div>
        </div>
        <button className="btn-proj" onClick={toGit}>
          Confira no GitHub
        </button>
      </div>
    </div>
  );
}
