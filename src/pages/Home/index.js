import React from 'react';
import Menu from '../../components/Menu/Menu'
import Planos from '../../components/Planos';
import Secao1 from '../../components/Secao-Um';
import MiniCard from '../../components/MiniCards';
import Secao3 from '../../components/Secao-Tres';
import Footer from '../../components/Footer';
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
                <Secao3/>
            </main>

            <footer>
                <Footer/>
            </footer>
       </>
    )
};

export default Home;