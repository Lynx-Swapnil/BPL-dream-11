import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';
import PlayerDetailsModal from '../../ui/PlayerDetailsModal';

const Players = ({ playersPromise, setCoin, coin }) => {

    const players = use(playersPromise);


    const [selectedType, setSelectedType] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [activePlayer, setActivePlayer] = useState(null);

    const handleOpenDetails = (player) => {
        setActivePlayer(player);
    };

    const handleCloseDetails = () => {
        setActivePlayer(null);
    };

    return (
        <div className='container mx-auto my-15'>
            <div className='mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center'>
                {
                    selectedType === 'available'
                        ? <h2 className='font-bold text-3xl text-[#0f172a]'>Build Your Squad</h2>
                        : <h2 className='font-bold text-3xl text-[#0f172a]'>Selected Players ({selectedPlayers.length}/{players.length})</h2>
                }
                <div className='flex flex-col sm:flex-row'>
                    <button onClick={() => setSelectedType('available')}
                        className={`btn w-full border-0 sm:w-auto ${selectedType === 'available' ? 'bg-[#E7FE29] text-[#111827] hover:bg-[#d7ef1f]' : 'bg-white text-[#334155] hover:bg-[#f8fafc]'} rounded-xl sm:rounded-l-xl sm:rounded-r-none`}>Available
                    </button>
                    <button onClick={() => setSelectedType('selected')}
                        className={`btn mt-2 w-full border-0 sm:mt-0 sm:w-auto ${selectedType === 'selected' ? 'bg-[#E7FE29] text-[#111827] hover:bg-[#d7ef1f]' : 'bg-white text-[#334155] hover:bg-[#f8fafc]'} rounded-xl sm:rounded-r-xl sm:rounded-l-none`}>Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {
                selectedType === 'available'
                    ? <AvailablePlayers
                        players={players}
                        setCoin={setCoin}
                        coin={coin}
                        setSelectedPlayers={setSelectedPlayers}
                        selectedPlayers={selectedPlayers}
                        onViewDetails={handleOpenDetails}
                    />
                    : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} />
            }

            <PlayerDetailsModal player={activePlayer} onClose={handleCloseDetails} />
        </div>
    );
};

export default Players;