import React from 'react';
import Menu from '../../components/Menu/Menu'
import Planos from '../../components/Planos';
import Secao1 from '../../components/Secao-Um';


const Home = () => {

    return (
        <>
            <header>
                <Menu/>
            </header>

            <main>
                <Secao1/>
                <Planos/>
            </main>
            
        </>
    )
};

export default Home;