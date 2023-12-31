import React from "react";
import "./index.scss";

function back() {
  return window.history.back();
}

export default function NotFound() {
  return (
    <div className="ops container">
      <div>
        <h1>Ops... não consegui encontrar essa página!</h1>
        <p>
          Estou trabalhando para que sua experiencia seja a melhor possível,
          sinto muito não encontrar o que desejava...
        </p>
        <p><br />Err 404.</p>
        <button onClick={back}>Voltar</button>
      </div>
    </div>
  );
}
