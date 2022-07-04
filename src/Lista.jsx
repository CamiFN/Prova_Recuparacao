import './Lista.css'
function List(){
    //lista das noticias
    const readmore =[
        {n:"1",noticia:"Funcinária que dencuniou procurador diz que agressor 'desprezava mulheres' e teme  sair na rua:'Muito medo'"},
        {n:"2",noticia:"Imposto de Renda 2022: Receita abre consultas ao 2º lote de restituição nesta  quinta; veja se você está no grupo"},
        {n:"3",noticia:"Governo opera pra evitar CPI do MEC, que ganhou força após prisão prisão de Milton Ribeiro"},
        {n:"4",noticia:"Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal; 7 ficam feridos"},
        {n:"5",noticia:"Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é dono dessa chalana?'"}
      ]
      const lista = readmore.map(
        (r)=>
        <p className='noticia'>
           <div className='numero'>
            {r.n}
            </div>
            {r.noticia}
        </p> 
      )

    return(
        <div className='container'>
            
            {lista}
            
        </div>
    );
    
}
export default List;