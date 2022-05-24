import { useState } from "react";
import axios from "axios";

const Palindromos = () => {

    const [primeiroNumero, setPrimeiro] = useState(0);
    const [segundoNumero, setSegundo] = useState(0);
    const [listaPalindromo, setListaPalindromo] = useState([]);

    const enviar = async () => {
        const numero1Convertido = parseInt(primeiroNumero);
        const numero2Convertido = parseInt(segundoNumero);

        await axios.get(`/palindromos/${numero1Convertido}/${numero2Convertido}`)
        .then((response) => {
            setListaPalindromo(response.data);
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <section className="container mt-5 pt-5 bg-light d-flex flex-column align-items-center">
            <p className="descricao">Defina o intervalo de números que serão analísados</p>
            <div className="cardInputs">
                <div >
                    <label className="descricao" htmlFor="inicio">Início</label>
                    <input  type="number"
                            className="inputs"
                            placeholder="Digite o primeiro número"
                            min={0}
                            step={1}
                            id="inicio"
                            name="inicio"
                            onChange={(event) => {setPrimeiro(event.target.value)}}
                            />
                </div>
                <div>
                    <label className="descricao" htmlFor="fim">Fim</label>
                    <input  type="number"
                            className="inputs"
                            placeholder="Digite o último número"
                            min={primeiroNumero}
                            step={1}
                            id="fim"
                            name="fim"
                            onChange={(event) => {setSegundo(event.target.value)}}
                            >
                    </input>
                </div>
                <button type="button" className="btn btn-primary" onClick={enviar}>Buscar</button>
            </div>
            {listaPalindromo.length >= 1 && (
                <>
                <p className="descricao">
                    Foram encontrados {listaPalindromo.length} números palíndromos.
                </p>
                <ol id="lista">
                    <p><strong>PALÍNDROMOS</strong></p>
                {listaPalindromo.map((palindromo) => (
                        <li className="ml-3 pl-3"><strong>{palindromo}</strong></li>
                ))}
                </ol>
                </>
            )
                
                
            }

        </section>
    )
}
export default Palindromos