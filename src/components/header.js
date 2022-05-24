import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid d-flex justify-content-between">
                        <a className="navbar-brand links" onClick={() => navigate('/')}>
                            <h1>The Oracle</h1>
                        </a>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item links" onClick={() => navigate('/palindromos')}>
                                    <span className="nav-link active" aria-current="page">
                                        <h5>Os Palíndromos</h5>
                                    </span>
                                </li>
                                <li className="nav-item links" onClick={() => navigate('/caixa')}>
                                    <span className="nav-link">
                                        <h5>O Negócio</h5>
                                    </span>
                                </li>
                                <li className="nav-item links" onClick={() => navigate('/veiculos')}>
                                    <span className="nav-link">
                                        <h5>A Garagem</h5>
                                    </span>
                                </li>
                                <li className="nav-item links" onClick={() => navigate('/ceps')}>
                                    <span className="nav-link">
                                        <h5>Os CEPs</h5>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header