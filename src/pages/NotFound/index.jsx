import React from "react";
import "./index.scss";

function back() {
  return window.history.back();
}

export default function NotFound() {
  return (
    <div className="ops container">
      <div>
        <h1>Ops... não consegui encontrar essa página! Erro 404</h1>
        <p>
          Estou trabalhando para que sua experiencia seja a melhor possível,
          sinto muito não encontrar o que desejava...
        </p>
        <button onClick={back}>Voltar</button>
      </div>
    </div>
  );
}
