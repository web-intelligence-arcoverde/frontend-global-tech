import React from 'react';
import Menu from '../../components/Menu/Menu'
import Planos from '../../components/Planos';
import Secao1 from '../../components/Secao-Um';
import MiniCard from '../../components/MiniCards';
import Secao2 from '../../components/Secao-Dois';


const Home = () => {

    return (
        <>
            <header>
                <Menu/>
            </header>

            <main>
                <Secao1/>
                <Planos/>
                <MiniCard/>
                <Secao2/>
            </main>
       </>
    )
};

export default Home;