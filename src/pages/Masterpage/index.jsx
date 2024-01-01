import React from "react";
import "./index.scss";

export default function MasterPage() {
  return (
    <div className="flex alCenter header">
      <div className="brand-logo">
        <h2 id="logo">Gabriel Araújo Lima</h2>
      </div>
      <div className="brand-nav">
        <nav>
            <ul className="flex">
                <li><a href="./">Inicio</a></li>
                <li><a href="./project">Projetos</a></li>
                <li><a href="./contact">Contato</a></li>
            </ul>
        </nav>
      </div>
    </div>
  );
}
