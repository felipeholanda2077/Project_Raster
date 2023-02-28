import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Pages/main.scss';
import Home from '../src/Pages/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Pages/Home";
//import About from "./Pages/About";
//import Maps from "./Pages/Maps";
//import Layout from "./Pages/Layout";
//import NoPage from "./Pages/NoPage";


//export default function App() {
//    return (
//        <BrowserRouter>
//            <Routes>
//                <Route path="/" element={<Layout />}>
//                    <Route index element={<Home />} />
//                    <Route path="about" element={<About />} />
//                    <Route path="maps" element={<Maps />} />
//                    <Route path="*" element={<NoPage />} />
//                </Route>
//            </Routes>
//        </BrowserRouter>
//    );
//}//

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);