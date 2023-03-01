/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React, { useState } from "react";

import "../App";
import TrackingResult from "../components/TrackingResult/index";
import "bootstrap/dist/css/bootstrap.min.css";


import Logo from "../img/Raster.png";
import Bag from "../img/Bag.png";
import Chat from "../img/Chat.png";
import About from "../img/Play.png";

import Phones from "../img/Phone.png";
import MacBook from "../img/image1.jpeg";



import Appstore from "../img/Appstore.svg";
import Googleplay from "../img/Googleplay.svg";

import Swal from 'sweetalert2';

const Home = () => {
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

            <div class="w3-sidebar w3-bar-block w3-card w3-animate-left" className="d-none" id="mySidebar">
                <h2>Raster</h2>
                <button type="button" class="btn btn-lg float-right" id="closeNav"><i class="fa-solid fa-xmark" ></i></button>
                <a href="#" class=" w3-bar-item btn  btn-lg btn-block my-5"><i class="fa-solid fa-house fa-lg"></i><strong> Home </strong><i class="fa-solid fa-arrow-right float-right mt-1"></i></a>
                <a href="#" class=" w3-bar-item btn  btn-lg btn-block  my-5 "><i class="fa-solid fa-map fa-lg "></i><strong> Mapa Mundi </strong><i class="fa-solid fa-arrow-right float-right mt-1"></i></a>
                <a href="#" class=" w3-bar-item btn  btn-lg btn-block my-5"><i class="fa-solid fa-user-tie fa-lg "></i><strong> Sobre Nós </strong><i class="fa-solid fa-arrow-right float-right mt-1"></i></a>
                <a href="#" class=" w3-bar-item btn  btn-lg btn-block my-5"><i class="fa-solid fa-right-to-bracket fa-lg"></i><strong> Login </strong><i class="fa-solid fa-arrow-right float-right mt-1"></i></a>


            </div>





            <header>
                <div className="container">
                    <div className="row-sm">
                        <div className="col-sm">

                            <button type="button" class="float-left btn btn-outline-light mt-5"><i class="fa-solid fa-bars" /></button>
                        </div>




                        <div className="col-sm">

                        </div>


                        <div className="col-sm">

                            <div class="dropdown float-right mt-5">


                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item active" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>

                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path class="wave1" fill="#43818A" fill-opacity="1" d="M0,96L30,117.3C60,139,120,181,180,213.3C240,245,300,267,360,240C420,213,480,139,540,122.7C600,107,660,149,720,170.7C780,192,840,192,900,176C960,160,1020,128,1080,112C1140,96,1200,96,1260,128C1320,160,1380,224,1410,256L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    <path class="wave2" fill="#57A7B3" fill-opacity="1" d="M0,288L30,266.7C60,245,120,203,180,181.3C240,160,300,160,360,165.3C420,171,480,181,540,170.7C600,160,660,128,720,112C780,96,840,96,900,96C960,96,1020,96,1080,128C1140,160,1200,224,1260,250.7C1320,277,1380,267,1410,261.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    <path class="wave3" fill="#66C3D0" fill-opacity="1" d="M0,288L30,261.3C60,235,120,181,180,186.7C240,192,300,256,360,272C420,288,480,256,540,240C600,224,660,224,720,186.7C780,149,840,75,900,85.3C960,96,1020,192,1080,234.7C1140,277,1200,267,1260,261.3C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    <path fill="#66C3D2" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,256C480,277,600,299,720,309.3C840,320,960,320,1080,272C1200,224,1320,128,1380,80L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>

                </svg>
            </header >

            <div className="App mt-5 pt-5">

                <div className="container">

                    <img src={Logo} class="Logigs" alt="Logo" className="w-25 rounded-circle mx-auto d-block" />

                    <h1 className="text-white titi align-middle text-center" >RASTREAMENTO DE PEDIDOS</h1>
                    <p className="text-white titi align-middle text-center">Verifique sua encomenda a seguir</p>
                    <form onSubmit={submitHanlder} className="text-center">
                        <p>
                            <span className="form-group" class="input">
                                <input type="text" onChange={(e) => setValor(e.target.value)} value={valor} placeholder="⠀AA123456789BR ou 000.111.222-33" className="form-control" name="tracking" required />
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



            <div className="container ">

                <div className="row align-items-center">
                    <div className="col-11 pl-5 col-md-8">
                        <h1 className="texPho" >ESTAMOS CONSTRUINDO<br></br>A AGILIDADE</h1>
                        <h6 className="text-white Robot">A revolução em rastreamento de suas encomendas<br></br>que chegou para melhorar a sua maneira de ver suas encomendas!<br></br>
                            A sua disposição em sua casa ou aonde voce estiver</h6>
                    </div>

                    <div className="col-12 col-md-4">
                        <div class="icon">
                            <img src={Phones} class="Phones" alt="Phones" />
                        </div>
                    </div>
                </div>


            </div>

            <main className="cards" class="cards">

                <section class="card contact ">
                    <div class="icon">
                        <img src={Bag} alt="Contact us." />
                    </div>
                    <h3>Veja Suas Compras - Mapa Mundi</h3>
                    <span>Com o nosso sistema de rastreamento você tem tudo na palma de sua mão, a qualquer momento no momento que desejar.</span>
                    <button>Rastreamento</button>
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
                        <img src={About} alt="About us." />
                    </div>
                    <h3>Sobre nós</h3>
                    <span>Saiba mais a fundo como nós iniciamos e como é o nosso andamento no mercado de rastreamento de encomendas internacionais.</span>
                    <button href="#">Saiba Mais</button>
                </section>


            </main>


            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <img src={MacBook} class="Phones" alt="Phones" />
                    </div>
                    <div className="col-12 col-md-5">
                        <h1 className="texPho" >Você muda<br></br>Para o super App</h1>
                        <h6 className="text-white Robot">Quem tem conta no Raster tem soluções completas para todos os momentos em seus rastreamentos.</h6>
                    </div>
                </div>
            </div>





            <footer class="bg-foo text-white text-center text-lg-start">

                <div class="container p-4">

                    <div class="row d-flex justify-content-center">

                        <img src={Logo} class="Logigs" alt="Logo" className="w-25 rounded-circle mx-auto d-block" />

                        <div class="col-lg-3 col-md-12 mb-4 mb-md-0 ">
                            <h5 class="text-uppercase text-left">Suporte</h5>

                            <h6 className="text-left">
                                suporte@Raster.com.br
                                Atendimento das 9h às 18h
                                (dias úteis)
                            </h6>

                            <div className="mt-4 mb-2 rounded" style={{ borderTop: "2px solid #fff ", marginLeft: 10, marginRight: 10 }}></div>

                            <h5 class="text-uppercase pt-3 text-left">Fale Conosco</h5>

                            <h6 className="text-left">
                                suporte@Raster.com.br
                                Atendimento das 9h às 18h
                                (dias úteis)
                            </h6>
                        </div>


                        <div class="col-lg-2 col-md-6 mb-4 mb-md-0 ">
                            <h5 class="text-uppercase text-left">RASTER</h5>

                            <ul class="list-unstyled mb-0">
                                <li className="text-left">
                                    <i class="fa-solid fa-user-doctor"></i> <a href="#!" class="text-white text-left text-decoration-none">Trabalhe Conosco</a>
                                </li>
                                <li className="text-left">
                                    <i class="fa-solid fa-phone"></i> <a href="#!" class="text-white text-left text-decoration-none">Entre em Contato</a>
                                </li>

                                <div className="pt-2" style={{ borderTop: "2px solid #fff ", marginLeft: 10, marginRight: 10, marginTop: 30 }}></div>

                                <h5 class="text-uppercase pt-3 text-left">Políticas</h5>

                                <li className="text-left">
                                    <i class="fa-solid fa-file-contract"></i> <a href="#!" class="text-white text-left text-decoration-none">Contrato Raster</a>
                                </li>
                                <li className="text-left">
                                    <a href="#!" class="text-white text-left text-decoration-none d-block">Política de Privacidade</a>
                                </li>
                                <li className="text-left">
                                    <i class="fa-solid fa-computer"></i> <a href="#!" class="text-white text-left text-decoration-none">Licensa MIT</a>
                                </li>
                                <li className="text-left">
                                    <i class="fa-solid fa-cookie-bite"></i> <a href="#!" class="text-white text-left text-decoration-none">Política de Cookies</a>
                                </li>
                            </ul>
                        </div>



                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-0 text-left">Baixe agora mesmo o nosso app ;)</h5>

                            <ul class="list-unstyled">
                                <li className="pt-4">
                                    <img src={Appstore} alt="appstore" className="border rounded" />
                                </li>
                                <li className="pt-4">
                                    <img src={Googleplay} alt="googleplay" className="border rounded" />
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>

                <a href="https://api.whatsapp.com/send?phone=5511978381907"
                    target="_blank">
                    <img class="whatsapp" src="https://assets.boxloja.pro/shop/img/whatsapp.png" />
                </a>


                <div class="text-center p-3">
                    © 2023 | ∞ Desenvolvido por <span></span>Felipe Holanda{" - "}
                    <a class="text-white" href="https://mdbootstrap.com/">
                        <strong>Project Raster</strong>
                    </a>
                </div>

            </footer>

        </div>


    );

}

export default Home;