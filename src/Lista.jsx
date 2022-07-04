import './List.css'
function List(){

    return(
        <div className='container'>
            
            <ol className="lista">
              <img src="log.svg" alt="IFood" />
              <li>Entregador</li>
              <li>Restaurante e Mercado</li>
              <li>Carreira</li>
              <li>IFood Card</li>
              <button>Criar conta</button>
              <button>Entrar</button>
            </ol>
            
        </div>
    );
    
}
export default List;