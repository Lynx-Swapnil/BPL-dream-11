import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {

    const players = use(playersPromise);
    

    const [selectedType, setSelectedType] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    
    return (
        <div className='container mx-auto my-15'>
            <div className='flex justify-between items-center gap-4 mb-5'>
                {selectedType === 'available' ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Player ({selectedPlayers.length}/{players.length}) Players</h2>}
                <div className='flex flex-col sm:flex-row'>
                    <button onClick={() => setSelectedType('available')}
                        className={`btn w-full sm:w-auto ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} rounded-xl sm:rounded-l-xl sm:rounded-r-none`}>Available
                    </button>
                    <button onClick={() => setSelectedType('selected')}
                        className={`btn mt-2 w-full sm:mt-0 sm:w-auto ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-xl sm:rounded-r-xl sm:rounded-l-none`}>Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
           { selectedType === 'available' ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} /> }
        </div>
    );
};

export default Players;