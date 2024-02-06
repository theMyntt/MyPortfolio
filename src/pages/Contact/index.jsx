import React from "react";
import "./index.scss";

function toWhatsapp() {
  const nome = document.getElementById("name").value;
  window.open(`https://api.whatsapp.com/send?phone=5511992046942&text=Olá, eu sou ${nome} e vim pelo seu portfólio.`, "_blank");
}

export default function Contact() {
  return (
    <div className="container">
      <div className="brand-card">
        <h2>Que tal falar comigo?</h2>
        <article>
          <p>Achou meu perfil interessante? Aqui abaixo deixarei minhas principais formas de contato!</p> <br />
          <ul>
            <li>Email: <br/> <a href="mailto:gabriel.araujo2902@outlook.com">gabriel.araujo2902@outlook.com</a></li>
            <li>Telefone: <br /> <a href="tel:+5511992046942">+55 (11) 99204-6942</a></li>
          </ul>
        </article> <br />
        <div>
          <h2>Me mande uma mensagem no WhatsApp</h2>
          <form onSubmit={toWhatsapp}>
            <label>Insira seu nome:<input type="text" id="name" placeholder="Digite seu nome aqui!" required/></label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
