import Films from "./Films"
import {Link} from "react-router-dom";
import React from "react";

const Home = () => {


    return (
        <div className="Home" >
            <Link to='/'>Главная</Link>
            <h1 style={{ textAlign: 'center'}}>Фильмы</h1>
            <Films />
        </div>
    )
}

export default Home