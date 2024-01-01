import React, { useState, useEffect } from "react";
import "./index.scss";
import me from "../../img/me.jpeg";

function toProject() {
  return (window.location.href = "./project");
}

function toContact() {
  return (window.location.href = "./contact");
}

function toCurriculum() {
  return window.location.href = "Curriculo.pdf";
}

export default function Home() {
  const frases = ["empresa", "startup", "projeto"];
  const [indice, setIndice] = useState(0);
  const [fraseAtual, setFraseAtual] = useState(frases[indice]);

  useEffect(() => {
    const interval = setInterval(() => {
      const novoIndice = (indice + 1) % frases.length;
      setIndice(novoIndice);
      setFraseAtual(frases[novoIndice]);
    }, 4000);

    return () => clearInterval(interval);
  }, [indice, frases])

  return (
    <div className="container">
      <center className="mobile-only">
        <h2>
          Olá, meu nome é <h1>Gabriel</h1> e é um prazer ter-lo aqui.
        </h2>{" "}
      </center>{" "}
      <br /> <br />
      <div className="brand">
        <h1 id="brand-text">
          Suba o nível de sua <span id="change">{fraseAtual}</span> com um desenvolvedor
          profissional.
        </h1>{" "}
        <br />
        <p>
          Com um desenvolvedor front-end de qualidade, nada pode dar errado.
        </p>
        <button onClick={toProject}>Conheça meus projetos.</button>
      </div>
      <div className="other">
        <div id="aboutMe">
          <div id="firstAboutMe">
            <h2>Meu nome? Gabriel Araújo Lima, prazer.</h2> <br />
            <article>
              <p>
                Olá, eu sou o Gabriel, prazer. Sou desenvolvedor front-end e
                atualmente desenvolvo com ReactJS, PHP e ExpressJS. Faço também
                o gerenciamento dos seguintes Banco de Dados: SQLite, MySQL e
                Microsoft SQL Server. Além disso, estou aprendendo Typescript e
                MongoDB
              </p>{" "}
              <br />
              <p>
                Atualmente, estou cursando Desenvolvimento de Sistemas na{" "}
                <a href="https://etechoracio.com.br">
                  <u>Etec Prof Horácio Augusto da Silveira</u>
                </a>
                , estou no segundo ano de muito aprendizado!
              </p>
            </article>
            <button className="btn" onClick={toCurriculum}>De uma olhada em meu Currículo</button>
            <p>Talvez seja necessario o uso do Adobe Acrobat.</p>
          </div>
          <div>
            <img src={me} alt="Eu" />
          </div>
        </div>{" "}
        <br /> <br />
        <div id="skills">
          <div id="text-skills">
            <h2>Conheça um pouco de minhas habilidades.</h2> <br />
            <article>
              <p>
                Como falado anteriormente, minhas principais habilidades são
                React, PHP, Express e Javascript mas, felizmente tem mais, como
                HTML, CSS, SCSS/SASS, C++ e SQL. Inclusive, este website foi
                feito completamente com Vite + React e SASS
              </p>{" "}
              <br />
              <p>
                Sou uma pessoa extremamente auto ditada, gosto de estudar por si
                só. Me adapto facil a ambiente e sistemas novos. Quando começo
                fazer algo, sempre tento fazer o mais perfeito o possível.
              </p>
            </article>
          </div>
        </div> <br /> <br />
        <div id="interest">
          <h2>Se interessou?</h2>
          <p>Me mande o e-mail, entre em contato comigo!</p>
          <button className="btn" onClick={toContact}>Fale comigo</button>
        </div>
      </div>
    </div>
  );
}
