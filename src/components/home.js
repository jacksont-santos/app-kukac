import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [solucao, setSolucao] = useState(1);

    return (
        <section className="container mt-5">
            <div className="card text-center">
                <p className="mt-3" id="questao"><strong>O QUE VOCÊ QUER FAZER ?</strong></p>
                <div className="card-header bg-dark">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item links" onClick={() => setSolucao(1)}>
                            <span className="nav-link"><strong>Palíndromos</strong></span>
                        </li>
                        <li className="nav-item links" onClick={() => setSolucao(2)}>
                            <span className="nav-link"><strong>Caixa</strong></span>
                        </li>
                        <li className="nav-item links" onClick={() => setSolucao(3)}>
                            <span className="nav-link"><strong>Veículos</strong></span>
                        </li>
                        <li className="nav-item links" onClick={() => setSolucao(4)}>
                            <span className="nav-link"><strong>CEPs</strong></span>
                        </li>
                    </ul>
                </div>
                {solucao === 1 && 
                    <div className="card-body" id="solucao1">
                    <h5 className="card-title">Palíndromos</h5>
                    <p className="card-text">Defina uma faixa de números para encontrar os palíndromos entre eles.</p>
                    <span className="btn btn-primary links" onClick={() => navigate("/palindromos")}>Encontrar Palíndromos</span>
                </div>
                }
                {solucao === 2 &&
                    <div className="card-body" id="solucao2">
                    <h5 className="card-title">Caixa</h5>
                    <p className="card-text">Calcule o valor e a forma do troco de uma compra.</p>
                    <span className="btn btn-primary links" onClick={() => navigate("/caixa")}>Ir para o caixa</span>
                </div>
                }
                {solucao === 3 &&
                    <div className="card-body" id="solucao2">
                    <h5 className="card-title">Garagem</h5>
                    <p className="card-text">Cadastrar novos veículos.</p>
                    <span className="btn btn-primary links" onClick={() => navigate("/vaiculos")}>Cadastrar</span>
                </div>
                }
                {solucao === 4 &&
                    <div className="card-body" id="solucao2">
                    <h5 className="card-title">CEPs</h5>
                    <p className="card-text">Pesquise endereços de ceps.</p>
                    <span className="btn btn-primary links" onClick={() => navigate("/ceps")}>Pesquisar</span>
                </div>
                }
                
            </div>
        </section>
    )
}

export default Home