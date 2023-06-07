import { useEffect, useState } from "react";
import './App.css'

function Funcao(){
    const[aperte, setAperte] = useState([])
    const[aperte2, setAperte2] = useState([])


    return(
        <div className="main">
            <header>
                <h1>
                    CONSELHOS DE CHUCK E KANYE
                </h1>
            </header>
            <div className="apertar">

            <div >    
            <img id="chuck" src="https://img.r7.com/images/2017/08/25/6azld30mdw_5j8ymqja2g_file?dimensions=460x305&&amp;&amp;&amp;&amp;resize=460x305&amp;crop=517x343+185+0&amp;&amp;&amp;&amp;resize=460x305&amp;crop=517x343+185+0" onClick={ () => {fetch('https://api.chucknorris.io/jokes/random')
            .then(res=>res.json())
            .then(json=>setAperte(json))}}/>
            </div>    

            <div id="aperte">
                {aperte.value}
            </div>
            </div>

            <div className="apertar2">
            <img id="kanye" src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportEntertainmentNews/tagreuters.com2022binary_LYNXMPEI5T0QA-FILEDIMAGE.jpg?w=876&h=484&crop=1" onClick={ () => {fetch('https://api.kanye.rest')
            .then(res=>res.json())
            .then(json=>setAperte2(json))}}/>

                <div id="aperte2">
                    {aperte2.quote}
                </div>
            </div>

        </div>
    /* https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnnbrasil.com.br%2Feconomia%2Fveja-quais-empresas-romperam-parceria-com-kanye-west-apos-polemicas-do-rapper%2F&psig=AOvVaw3P1QVJYelA8YK7BH3fudq5&ust=1685581749557000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICH7civnv8CFQAAAAAdAAAAABAd */
    /*  */    

    )
}

export default Funcao;

