import Card from '../../../ui/Card';
const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers, onViewDetails }) => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    players.map(player => (
                        <Card
                            key={player.playerName}
                            player={player}
                            setCoin={setCoin}
                            coin={coin}
                            setSelectedPlayers={setSelectedPlayers}
                            selectedPlayers={selectedPlayers}
                            onViewDetails={onViewDetails}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;