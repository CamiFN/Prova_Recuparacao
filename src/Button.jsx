function Button({link, nome, descricao, QTD, preco,imag, lista, butao1, butao2}){
    return(
        <div className="itens">

        <button className='apps'>
              <img src={link} alt={nome} />
              <p className='nome'>{nome}</p>
              <p className='descricao'>{descricao}</p>
              <p className='QTD'>{QTD}</p>
              <p className='preco'>{preco}</p>
        </button>

        <button className='menu'>
        <img src={imag} alt="" />
        <p className='nome'>{lista}</p>
        <p className='butao'>{butao1}</p>
        <p className='buao'>{butao2}</p>
  </button>
        </div>
        
    );
}

export default Button;