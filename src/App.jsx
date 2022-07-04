//App.jsx
import { useState } from 'react';
import './Button.css'
import Button from "./Button";

function App(){
  const [selecionado, setSelecionado] = useState(false);

  function mudaIcones() {
      setSelecionado(!selecionado);
      console.log(selecionado);
  }

  const icones = [
    {
      link: "big-king.webp",
      nome: "Combo Big King",
      descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
      QTD: "Serve 1 pessoa",
      preco:"R$ 41,90",

    },
    {
      link: "cheddar-duplo.webp",
      nome: "Combo Cheddar Duplo",
      descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão  preto com gergelim,...",
      QTD: "Serve 1 pessoa",
      preco:"R$ 41,90",
    },
    {
      link: "cheeseburger-duplo.webp",
      nome: "Combo Cheeseburger Duplo com Bacon",
      descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
      QTD: "Serve 1 pessoa",
      preco:"R$ 36,90",
    },
    {
      link: "mega-stacker.webp",
      nome: "Combo Mega Stacker 2.0",
      descricao: "Um hambúrguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo...",
      QTD: "Serve 1 pessoa",
      preco:"R$ 51,90",
    },

  ]

  return(
      <div className="Icones">
        {icones.map((icone) => {
          return 
          <Button 
          link={icone.link} 
          nome={icone.nome}
          descricao={icone.descricao}
          QTD={icone.QTD}
          preco={icone.preco}
           />
        })}
      </div>
  );
}
export default App