//App.jsx
import { useState } from 'react';
import './Button.css'
import Button from "./Button";
import './Lista.css'

function App(){

  const paginas = [
		{
			link: "logo.svg"
		},
		{
			lista: "Entregador",
		},
		{
			lista: "Restaurante e Mercado",
		},
		{
			lista: "Carreiras",
		},
		{
			lista: "iFood Card",
		},
		{
			butao1: "Criar conta",
		},
		{
			butao2: "Entrar"
		}
	];

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
    <div>
    <div className="conteiner">
			{
				paginas.map((pag) => {
					return <Card 
							nome={pag.nome}
							link={pag.link}
							butao1={pag.buta1}
							butao2={pag.butao2}
						/>;
				})
			}
		</div>

      <div className="Icones">
        {
          icones.map((icone)=>{
            return <Button 
            link={icone.link} 
            nome={icone.nome}
            descricao={icone.descricao}
            QTD={icone.QTD}
            preco={icone.preco}
             />
          })
        }
      </div>
      </div>
  );
}
export default App