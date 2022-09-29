import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Workplace from './Workplace/Workplace';
import './Body.css';
import Game from './Game/Game';

const Body = () => {
    const [games, setGames] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setGames(data))
},[])
const addButton = (game)=>{
    const newCart =[...carts,game];
    setCarts(newCart);
}

    return (
        <div className='body-conatiner'>
            <div className="game-conatiner">
                {
                    games.map(game=><Game key={game.id} buttonAdd={addButton} game ={game}></Game>)
                }
            </div>
            <div className="information-conatiner">
                <Workplace carts={carts}></Workplace>
            </div>
        </div>
    );
};

export default Body;