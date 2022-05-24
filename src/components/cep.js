import { useState } from "react";
import axios from "axios";

const Ceps = () => {

    const [listResponse, setListResponse] = useState([]);

    const enviarCeps = async (event) => {
        event.preventDefault();
        const cep1 = parseInt(event.target.cep1.value);
        const cep2 = parseInt(event.target.cep2.value);
        const cep3 = parseInt(event.target.cep3.value);
        const cep4 = parseInt(event.target.cep4.value);
        const cep5 = parseInt(event.target.cep5.value);
        const listCep = [cep1, cep2, cep3, cep4, cep5];

        await axios.post("ceps", listCep)
        .then((response) => {
            console.log(response)
            setListResponse(response.data)
        }).catch((erro) => {
            console.log(erro)
        })
    };

    return (
        <section className="container mt-5 pt-5 bg-light ">
            <p className="descricao">Digite os ceps para buscar (somente números)</p>
            <hr/>
            <form onSubmit={enviarCeps} className="d-flex flex-column align-items-center">
                <div>
                    <label className="descricao" htmlFor="cep1">Cep 1</label>
                    <input  type="number"
                        className="inputs"
                        min={11111111}
                        max={99999999}
                        placeholder="Digite o primeiro cep"
                        id="cep1"
                        name="cep1"
                        required
                    />
                </div>
                <div>
                    <label className="descricao" htmlFor="cep2">Cep 2</label>
                    <input  type="number"
                        className="inputs"
                        min={11111111}
                        max={99999999}
                        placeholder="Digite o segundo cep"
                        id="cep2"
                        name="cep2"
                        required
                    />
                </div>
                <div>
                    <label className="descricao" htmlFor="cep3">Cep 3</label>
                    <input  type="number"
                        className="inputs"
                        min={11111111}
                        max={99999999}
                        placeholder="Digite o terceiro cep"
                        id="cep3"
                        name="cep3"
                        required
                    />
                </div>
                <div>
                    <label className="descricao" htmlFor="cep4">Cep 4</label>
                    <input  type="number"
                        className="inputs"
                        min={11111111}
                        max={99999999}
                        placeholder="Digite o quarto cep"
                        id="cep4"
                        name="cep4"
                        required
                    />
                </div>
                <div>
                    <label className="descricao" htmlFor="cep5">Cep 5</label>
                    <input  type="number"
                        className="inputs"
                        min={11111111}
                        max={99999999}
                        placeholder="Digite o quinto cep"
                        id="cep5"
                        name="cep5"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Buscar</button>
                <hr/>
            </form>

            {listResponse.length >= 1 && (
                <table className ="table table-striped">
                <thead className="bg-primary bg-opacity-25">
                  <tr>
                    <th scope="col">Cep</th>
                    <th scope="col">Logradouro</th>
                    <th scope="col">Complemento</th>
                    <th scope="col">Bairro</th>
                    <th scope="col">Localidade</th>
                    <th scope="col">Uf</th>
                    <th scope="col">DDD</th>
                  </tr>
                </thead>
                <tbody>
                {listResponse.map((response) => {
                    if (response.cep){
                        return (
                            <tr key={response.cep}>
                              <td>{response.cep}</td>
                              <td>{response.logradouro}</td>
                              <td>{response.complemento}</td>
                              <td>{response.bairro}</td>
                              <td>{response.localidade}</td>
                              <td>{response.uf}</td>
                              <td>{response.ddd}</td>
                            </tr>
                              )
                    }
                }
                
                
                )
                }
                </tbody>
              </table>
            )}
        </section>
    )
}
export default Ceps