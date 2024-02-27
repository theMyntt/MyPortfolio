import { useState } from "react";
import "./index.scss";

export default function Contact() {
  const [name, setName] = useState("");

  function handleName(name) {
    setName(name);
  }

  function toWhatsapp(name) {
    window.open(
      `https://api.whatsapp.com/send?phone=5511992046942&text=Olá, eu sou ${name} e vim pelo seu portfólio.`,
      "_blank"
    );
  }

  return (
    <div className="container">
      <div className="brand-card">
        <h2>Que tal falar comigo?</h2>
        <article>
          <p>
            Achou meu perfil interessante? Aqui abaixo deixarei minhas
            principais formas de contato!
          </p>{" "}
          <br />
          <ul>
            <li>
              Email: <br />{" "}
              <a href="mailto:gabriel.araujo2902@outlook.com">
                gabriel.araujo2902@outlook.com
              </a>
            </li>
            <li>
              Telefone: <br />{" "}
              <a href="tel:+5511992046942">+55 (11) 99204-6942</a>
            </li>
          </ul>
        </article>{" "}
        <br />
        <div>
          <h2>Me mande uma mensagem no WhatsApp</h2>
          <form onSubmit={() => toWhatsapp(name)}>
            <label>
              Insira seu nome:
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome aqui!"
                value={name}
                onChange={(e) => {
                  handleName(e.target.value);
                }}
                required
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
