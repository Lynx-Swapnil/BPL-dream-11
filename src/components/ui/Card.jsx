import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Card = ({ player, setCoin, coin , selectedPlayers, setSelectedPlayers}) => {
    const [isSelected, setIsSelected] = React.useState(false);
    const handleChoosePlayer = () => {
        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(newCoin);
        }
        else {
            alert('You do not have enough coins to select this player');
            return;
        }
        alert(`You have selected ${player.playerName}`);
        setIsSelected(!isSelected);
        setSelectedPlayers([...selectedPlayers, player]);
    }
    return (
        <div>
            <h1 key={player.playerName}><div className="card h-full bg-base-100 shadow-sm">
                <figure className='h-56 overflow-hidden'>
                    <img
                        src={player.playerImg}
                        alt={player.playerName}
                        className='h-full w-full object-cover object-top' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> <FaUser /> {player.playerName}</h2>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <FaFlag />
                            <p>{player.playerCountry}</p>
                        </div>

                        <button className='btn'>({player.playerType})</button>
                    </div>

                    <div className="divider"></div>

                    <h2 className='font-bold'>{player.rating}</h2>
                    <div className='flex justify-between gap-4'>
                        <p>{player.battingStyle}</p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: ${player.price}</p>
                        <button className="btn " onClick={() => { handleChoosePlayer() }} disabled={isSelected}>
                            {isSelected ? 'Selected' : 'Choose Player'}
                        </button>
                    </div>
                </div>
            </div>
            </h1>
        </div>
    );
};

export default Card;
