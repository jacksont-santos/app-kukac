import { useState } from "react";
import axios from "axios";

const Caixa = () => {
  const [valorCompra, setValorCompra] = useState(0);
  const [valorRecebido, setValorRecebido] = useState(0);
  const [notas, setNotas] = useState({});
  const [respondido, setRespondido] = useState(false);

  const getResult = async () => {
    const compra = parseInt(valorCompra);
    const recebido = parseInt(valorRecebido);
    const quest = {
      pagar: compra,
      pago: recebido,
    };

    await axios
      .post("/purchase", quest)
      .then((response) => {
        setNotas(response.data);
        setRespondido(true);
      })
      .catch((erro) => {
        console.log(erro);
        setRespondido(true);
      });
  };

  return (
    <section className="container mt-5 pt-5 bg-light d-flex flex-column align-items-center">
      <p className="descricao">
        Qual é o valor da compra e do dinheiro recebido pelo caixa ?
      </p>
      <div className="cardInputs">
        <div>
          <label className="descricao" htmlFor="inicio">
            Valor da compra
          </label>
          <input
            type="number"
            className="inputs"
            placeholder="Digite o valor da compra"
            min={0}
            step={1}
            id="inicio"
            name="inicio"
            onChange={(event) => {
              setValorCompra(event.target.value);
            }}
          />
        </div>
        <div>
          <label className="descricao" htmlFor="fim">
            Valor pagado
          </label>
          <input
            type="number"
            className="inputs"
            placeholder="Digite o valor recebido"
            min={valorCompra}
            step={1}
            id="fim"
            name="fim"
            onChange={(event) => {
              setValorRecebido(event.target.value);
            }}
          ></input>
        </div>
        <button type="button" className="btn btn-primary" onClick={getResult}>
          Obter Resultado
        </button>
      </div>
      {respondido && (
        <>
          <p className="descricao">
            O caixa fornecerá um total de {notas.minimoNotas} notas.
          </p>
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Valor da Compra</th>
                <th scope="col">Valor do troco</th>
                <th scope="col">Notas de Cem</th>
                <th scope="col">Notas de Dez</th>
                <th scope="col">Notas de Um</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{notas.purchaseValue}</td>
                <td>{notas.returnedValue}</td>
                <td>{notas.notasCem}</td>
                <td>{notas.notasDez}</td>
                <td>{notas.notasUm}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};
export default Caixa;
