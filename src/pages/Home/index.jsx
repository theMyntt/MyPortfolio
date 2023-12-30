import React from "react";
import "./index.scss";
import me from "../../img/me.jpeg";

function toAbout() {
  return (window.location.href = "./project");
}

export default function Home() {
  return (
    <div>
      <div className="brand">
        <h1 id="brand-text">
          Eleve o nível de sua empresa com um desenvolvedor profissional.
        </h1>
        <p>
          Com um desenvolvedor front-end de qualidade, nada pode dar errado.
        </p>
        <button onClick={toAbout}>Conheça meus projetos.</button>
      </div>
      <div className="container">
        <div id="aboutMe">
          <div id="firstAboutMe">
            <h2>Meu nome? Gabriel Araújo Lima, prazer.</h2> <br />
            <article>
              <p>Olá, eu sou o Gabriel, prazer. Sou desenvolvedor front-end e atualmente desenvolvo com ReactJS, PHP e ExpressJS. Faço também o gerenciamento dos seguintes Banco de Dados: SQLite, MySQL e Microsoft SQL Server. Além disso, estou aprendendo Typescript e MongoDB</p> <br />
              <p>Atualmente, estou cursando Desenvolvimento de Sistemas na <a href="https://etechoracio.com.br"><u>Etec Prof Horácio Augusto da Silveira</u></a>, estou no segundo ano de muito aprendizado!</p>
            </article>
          </div>
          <div>
            <img src={me} alt="Eu" />
          </div>
        </div>
      </div>
    </div>
  );
}
