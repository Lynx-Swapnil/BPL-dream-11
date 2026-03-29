
import SelectedCard from "../../../ui/SelectedCard";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleRemoveSelectedPlayer = (playerToRemove) => {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== playerToRemove.playerName);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + playerToRemove.price);
    }

    return (
        <div>
            <div className="space-y-5">
                {
                    selectedPlayers.length === 0 ?
                        <div className="h-100 flex flex-col items-center justify-center gap-4">
                            <h2 className="font-semibold text-xl">No players selected yet</h2>
                            <p>Go to Available tab to select players</p>
                        </div>
                        : selectedPlayers.map(player => (
                            <SelectedCard key={player.playerName} player={player} handleRemoveSelectedPlayer={handleRemoveSelectedPlayer} />
                        ))
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;