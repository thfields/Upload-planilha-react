import logo from './logo-ibram.png';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="d-flex vh-100">
            <div className="w-100 p-5 d-flex flex-column justify-content-center align-items-center">
                <img src={logo} alt="Logo do Instituto Brasileiro de Museus" width={250} />
                <p className="mt-2 fs-5 text-center">Inventário Nacional de Bens Cultutrais Musealizados</p>
                <Link type="button" className="btn btn-primary mt-4 btn-lg" to="/upload">
                 Fazer login com o museus.br
                </Link>
                <span className="fs-5 position-absolute bottom-0 pb-4">
                Você também pode baixar o nosso <a href="https://google.com">Cliente Offline</a>
                </span>
            </div>
            <div className="w-100 bg-success d-none d-lg-block"></div>
      </div>
     
    );
  }

