
import { useState } from 'react';
import './Button.css'


function Button() {
    const [selecionado, setSelecionado] = useState(false);

    function mudaBotao() {
        setSelecionado(!selecionado);
        console.log(selecionado);
    }

    return(
        <div className="butãos">
            
            <button className='btn'>
                <p className='titulo'>PREVIOUS</p>
                <p className='descrição'>JQUERY: DETECT UPDATE OF HTML <p>ELEMENT</p></p>
            </button>    
            
            <button className='btn'>
                <p className='titulo'>NEXT</p>
                <p className='descrição'>RAILS + DEVISE WORKING WITH <p>MULTIPLE MODELS</p></p>
            </button>
        </div>
    );
}
export default Button;