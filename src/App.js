/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.css";
import TrackingResult from "./components/TrackingResult";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./img/Raster.png";
import Bag from "./img/Bag.png";
import Chat from "./img/Chat.png";
import Play from "./img/Play.png";

import Swal from 'sweetalert2'


function App() {
  const [data, setData] = useState([]);
  const [valor, setValor] = React.useState('');

  const submitHanlder = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
      .then(response => response.json())
      .then(result => {
        if (result.message === "OK") {
          setData(result.data);




          Swal.fire(
            'Pedido Verificado com Sucesso!',
            'Abaixo você pode ver o status do seu pedido!',
            'success'
          )
        }

      },
        (err) => {

          console.log('ERRO: ', err);

          Swal.fire({
            icon: 'error',
            title: 'Erro ao Buscar o pedido!',
            text: 'Tente novamente mais tarde!',
            footer: '<a href="">Por que eu tenho esse problema?</a>'
          }
          )
        }
      );
    function setValor1() {
      setValor('');
    }
    setTimeout(setValor1, 1000 * 3);
  };


  return (

    <div className="backgroundrect position-absolute">
      <header>

        <div className="row-sm">
          <div className="col-sm">
            <i class="fa-solid fa-bars"><button type="button" class="btn btn-outline-light mt-5 float-left">Sidebar</button></i>
          </div>

          <div className="col-sm">
           </div>


          <div className="col-sm">

            <div class="dropdown float-right mt-5">
              <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Paises
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item active" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>

                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>

          </div>
        </div>







        <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path class="wave1" fill="#43818A" fill-opacity="1" d="M0,96L30,117.3C60,139,120,181,180,213.3C240,245,300,267,360,240C420,213,480,139,540,122.7C600,107,660,149,720,170.7C780,192,840,192,900,176C960,160,1020,128,1080,112C1140,96,1200,96,1260,128C1320,160,1380,224,1410,256L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          <path class="wave2" fill="#57A7B3" fill-opacity="1" d="M0,288L30,266.7C60,245,120,203,180,181.3C240,160,300,160,360,165.3C420,171,480,181,540,170.7C600,160,660,128,720,112C780,96,840,96,900,96C960,96,1020,96,1080,128C1140,160,1200,224,1260,250.7C1320,277,1380,267,1410,261.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          <path class="wave3" fill="#66C3D0" fill-opacity="1" d="M0,288L30,261.3C60,235,120,181,180,186.7C240,192,300,256,360,272C420,288,480,256,540,240C600,224,660,224,720,186.7C780,149,840,75,900,85.3C960,96,1020,192,1080,234.7C1140,277,1200,267,1260,261.3C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          <path fill="#66C3D2" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,256C480,277,600,299,720,309.3C840,320,960,320,1080,272C1200,224,1320,128,1380,80L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>

        </svg>
      </header>

      <div className="App mt-5 pt-5">

        <div className="container">

          <img src={Logo} class="Logigs" alt="Logo" className="w-25 rounded-circle" />

          <h1 className="text-white titi" >RASTREAMENTO DE PEDIDOS</h1>
          <p className="text-white titi">Verifique sua encomenda a seguir</p>
          <form onSubmit={submitHanlder}>
            <p>
              <span className="form-group" class="input">
                <input type="text" onChange={(e) => setValor(e.target.value)} value={valor} placeholder="AA123456789BR ou 000.111.222-33" className="form-control" name="tracking" required />
              </span>
            </p>



            <div class="wrap p-5">
              <button type="submit" className="buttonv">
                Verificar
              </button>
            </div>

          </form>
          <br></br>
          <div className=" pt-5">
            <div class="card-body">
              <TrackingResult data={data} />
            </div>
          </div>


        </div>
      </div>





      <main className="cards" class="cards">

        <section class="card contact ">
          <div class="icon">
            <img src={Bag} alt="Contact us." />
          </div>
          <h3>Veja Suas Compras</h3>
          <span>Com o nosso sistema de rastreamento você tem tudo na palma de sua mão, a qualquer momento no momento que desejar.</span>
          <button href="#">Rastreamento</button>
        </section>
        <section class="card shop">
          <div class="icon">
            <img src={Chat} alt="Shop here." />
          </div>
          <h3>Suporte 24 Horas</h3>
          <span>Trabalhamos com suporte de atendimento via e-mail 24 horas por dia, de segunda a sexta-feira.</span>
          <button href="#">Atendimento</button>
        </section>
        <section class="card about">
          <div class="icon">
            <img src={Play} alt="About us." />
          </div>
          <h3>Sobre nós</h3>
          <span>Saiba mais a fundo como nós iniciamos e como é o nosso andamento no mercado de rastreamento de encomendas internacionais.</span>
          <button href="#">Saiba Mais</button>
        </section>








      </main>

      <footer id="rodape" className="d-flex justify-content-center bg-dark">
        <p className="align-middle text-white">
          Feito por <span></span>Felipe Holanda{" - "}
          <a href="https://github.com/felipeholanda2077/Project_Raster">
            <strong>Project Raster</strong>
          </a>
        </p>
      </footer>
    </div>








  );

}

export default App;