import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers, onViewDetails }) => {
    const [isChoosing, setIsChoosing] = React.useState(false);
    const isSelected = selectedPlayers.some((selectedPlayer) => selectedPlayer.playerName === player.playerName);
    const isChooseDisabled = isSelected || isChoosing;

    React.useEffect(() => {
        if (!isSelected) {
            setIsChoosing(false);
        }
    }, [isSelected]);

    const handleChoosePlayer = () => {
        if (isChooseDisabled) {
            toast.info(`${player.playerName} is already in your squad`);
            return;
        }

        setIsChoosing(true);

        let newCoin = coin - player.price;
        if (newCoin >= 0) {
            setCoin(newCoin);
        }
        else {
            setIsChoosing(false);
            toast.error("You do not have enough coins to select this player");
            return;
        }

        toast.success(`You have selected ${player.playerName}`);
        setSelectedPlayers((prevSelectedPlayers) => {
            if (prevSelectedPlayers.some((selectedPlayer) => selectedPlayer.playerName === player.playerName)) {
                return prevSelectedPlayers;
            }

            return [...prevSelectedPlayers, player];
        });
    };

    return (
        <div key={player.playerName}>
            <div className="card h-full overflow-hidden border border-[#e6ebff] bg-white/85 shadow-[0_14px_28px_rgba(14,28,61,0.08)]">
                <figure className='relative h-56 overflow-hidden'>
                    <img
                        src={player.playerImg}
                        alt={player.playerName}
                        className='h-full w-full object-cover object-top'
                    />
                    <span className='absolute left-4 top-4 rounded-full bg-[#0f172a]/90 px-3 py-1 text-xs font-semibold tracking-wide text-[#f8fafc]'>
                        #{player.jerseyNumber}
                    </span>
                </figure>
                <div className="card-body p-5">
                    <h2 className="card-title text-xl text-[#111827]"><FaUser /> {player.playerName}</h2>
                    <div className='flex justify-between items-center gap-3'>
                        <div className='flex gap-2 items-center text-[#475569]'>
                            <FaFlag />
                            <p>{player.playerCountry}</p>
                        </div>

                        <button
                            className='btn h-8 min-h-8 rounded-full border border-[#cdd7ff] bg-[#eef2ff] px-3 text-xs font-semibold text-[#2c3e9b] hover:border-[#a7b8ff] hover:bg-[#dce5ff]'
                            onClick={() => onViewDetails(player)}
                        >
                            {player.playerType}
                        </button>
                    </div>

                    <div className="my-3 h-px bg-[#e9eefc]"></div>

                    <div className='grid grid-cols-2 gap-2 text-sm'>
                        <p className='rounded-lg bg-[#f8faff] px-3 py-2 text-[#334155]'>Rating: <span className='font-semibold text-[#0f172a]'>{player.rating}</span></p>
                        <p className='rounded-lg bg-[#f8faff] px-3 py-2 text-[#334155]'>Age: <span className='font-semibold text-[#0f172a]'>{player.age}</span></p>
                        <p className='rounded-lg bg-[#f8faff] px-3 py-2 text-[#334155] col-span-2 truncate'>{player.team}</p>
                    </div>

                    <div className='mt-3 flex justify-between gap-4 text-sm'>
                        <p className='text-[#64748b] truncate'>{player.battingStyle}</p>
                        <p className='text-right text-[#64748b] truncate'>{player.bowlingStyle}</p>
                    </div>

                    <div className="card-actions mt-4 justify-between items-center">
                        <p className='font-semibold text-[#0f172a]'>Price: ${player.price}</p>
                        <button
                            className={`btn border-0 px-4 text-white ${isChooseDisabled ? 'cursor-not-allowed bg-[#64748b]' : 'bg-[#0f172a] hover:bg-[#1e293b]'}`}
                            onClick={handleChoosePlayer}
                            disabled={isChooseDisabled}
                        >
                            {isSelected ? 'Selected' : 'Choose Player'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
