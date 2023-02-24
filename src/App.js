/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.css";
import TrackingResult from "./components/TrackingResult";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./img/Raster.png";
import Swal from 'sweetalert2'

function App() {
  const [data, setData] = useState([]);

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
    });
  };

    return (
      <div className="App">
        <div className="container">
          <img src={Logo} alt="Logo" />
          <h1>Project Raster</h1>
          <p>Verifique sua encomenda a seguir</p>
          <form onSubmit={submitHanlder}>
            <div className="form-group">
              <input type="text" placeholder="AA123456789BR ou 000.111.222-33" className="form-control" name="tracking" />
            </div>
            <button type="submit" className="btn btn-primary">
              Verificar
            </button>
          </form>

          <TrackingResult data={data} />
        </div>
        <footer>
          <p>
            Feito por <span role="img"></span>Felipe Holanda{" - "}
            <a href="#">
              <strong>Project Raster</strong>
            </a>
          </p>
        </footer>
      </div>
    );

  }


  export default App;