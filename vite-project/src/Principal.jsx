import { useState } from 'react'
import Objeto from './Principal.module.css'


function Principal(){

    const [adicionar, setAdicionar] = useState([])

    return(
        <div className={Objeto.full}>
            <div className={Objeto.principal}>
                <div className={Objeto.cabeca}>LISTA DE COMPRAS</div>
                <div className={Objeto.cima}>
                    <div className={Objeto.pergunta}>
                        <p>Informe um produto</p>
                        <input type="text" className={Objeto.resposta} />
                    </div>
                    <div className={Objeto.divisao}>
                        <div className={Objeto.pergunta2}>
                        <p>Informe a quantidade</p>
                        <input type="text" className={Objeto.resposta2} />
                        </div>

                        <div className={Objeto.pergunta2}>
                        <p>Informe o valor</p>
                        <input type="text" className={Objeto.resposta2} />
                        </div>
                    </div>
                </div>
                
                <div className={Objeto.botoes}>
                    <button className={Objeto.botao1}>CADASTRAR</button>
                    <button className={Objeto.botao2}>LIMPAR</button>
                </div>

                <div className={Objeto.subtitulo}>
                    <div>Itens</div>
                </div>

            </div>
        </div>
    )

}

export default Principal

