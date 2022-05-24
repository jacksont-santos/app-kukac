import { useState } from "react";
import axios from "axios";

const Veiculo = () => {

    const [resposta, setResposta] = useState({});
    const [veiculo, setVeiculo] = useState({
        modelo: "",
        ano: 0,
        qtd: 2,
        marca: "",
        tipo: "",
        passageiros: 1
    });

    const veiculoChange = (event) => {
        let veiculoEdit = { ...veiculo };
        veiculoEdit[event.target.name] = event.target.value;
        setVeiculo(veiculoEdit);
    };

    const cadastrar = async () => {
        if (typeof veiculo.qtd === "string"){
            let qtdNumero = parseInt(veiculo.qtd);
            veiculo.qtd = qtdNumero
        }
        if (typeof veiculo.passageiros === "string"){
            let passageirosNumero = parseInt(veiculo.passageiros);
            veiculo.passageiros = passageirosNumero
        }
        let anoNumero = parseInt(veiculo.ano);
        veiculo.ano = anoNumero
        console.log(veiculo)
        await axios.post("/novoVeiculo", veiculo)
        .then((response) => {
            console.log(response)
            setResposta(response.data)
        }).catch((erro) => {
            console.log(erro)
        })
    }

    return (
        <section className="container mt-5 pt-5 bg-light d-flex flex-column align-items-center">
            <p className="descricao">Qual é o tipo do novo veiculo ?</p>
            <select className="d-flex" id="tipo" name="tipo" 
            onChange={veiculoChange} required>
                <option defaultValue={""}>
                </option>
                <option value={"carro"}>
                    Carro
                </option>
                <option value={"moto"}>
                    Moto
                </option>
                
            </select>

            {veiculo.tipo === "carro" && (
            <>
            <p className="descricao hrow">Registre as informações do novo veiculo na garagem</p>
            <div className="cardInputs">
                <div >
                    <label className="descricao" htmlFor="modelo">Modelo</label>
                    <input  type="text"
                            className="inputs"
                            placeholder="Digite o modelo"
                            id="modelo"
                            name="modelo"
                            onChange={veiculoChange}
                            required
                            />
                </div>
                <div>
                    <label className="descricao" htmlFor="ano">Ano</label>
                    <input  type="number"
                            className="inputs"
                            placeholder="Digite o ano de lançamento"
                            step={1}
                            id="ano"
                            name="ano"
                            onChange={veiculoChange}
                            required
                            >
                    </input>
                </div>
            </div>
            <div className="cardInputs">
                <div >
                    <label className="descricao" htmlFor="qtd">Nº de portas</label>
                    <select className="inputs" id="qtd" name="qtd" onChange={veiculoChange} required>
                        <option defaultValue={2}></option>
                        <option value={2}>2 Portas</option>
                        <option value={4}>4 Portas</option>
                    </select>
                </div>
                <div>
                    <label className="descricao" htmlFor="marca">Marca</label>
                    <input  type="text"
                            className="inputs"
                            placeholder="Digite a marca"
                            id="marca"
                            name="marca"
                            onChange={veiculoChange}
                            required
                            >
                    </input>
                </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={cadastrar}>Buscar</button>
            <br/>
            </>
            )}

            {veiculo.tipo === "moto" && (
            <>
            <p className="descricao hrow">Registre as informações do novo veiculo na garagem</p>
            <div className="cardInputs">
                <div >
                    <label className="descricao" htmlFor="modelo">Modelo</label>
                    <input  type="text"
                            className="inputs"
                            placeholder="Digite o modelo"
                            id="modelo"
                            name="modelo"
                            onChange={veiculoChange}
                            required
                            />
                </div>
                <div>
                    <label className="descricao" htmlFor="ano">Ano</label>
                    <input  type="number"
                            className="inputs"
                            placeholder="Digite o ano de lançamento"
                            step={1}
                            id="ano"
                            name="ano"
                            onChange={veiculoChange}
                            required
                            >
                    </input>
                </div>
            </div>
            <div className="cardInputs">
                <div >
                    <label className="descricao" htmlFor="passageiros">Passageiros</label>
                    <select className="inputs" id="passageiros" name="passageiros" onChange={veiculoChange} required>
                        <option defaultValue={1}></option>
                        <option value={1}>1 passageiro</option>
                        <option value={2}>2 passageiros</option>
                    </select>
                </div>
                <div>
                    <label className="descricao" htmlFor="marca">Marca</label>
                    <input  type="text"
                            className="inputs"
                            placeholder="Digite a marca"
                            id="marca"
                            name="marca"
                            onChange={veiculoChange}
                            required
                            >
                    </input>
                </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={cadastrar}>Buscar</button>
            <br/>
            </>
            )}
            {resposta.message && (
                <>
                <p className="descricao success">
                    {resposta.message}
                </p>
                </>
            )
            }
        </section>
    )
}
export default Veiculo