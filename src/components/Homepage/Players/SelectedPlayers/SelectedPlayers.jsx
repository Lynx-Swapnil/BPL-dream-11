
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
                        <div className="h-100 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[#cbd5e1] bg-[#f8fafc]">
                            <h2 className="font-semibold text-xl text-[#0f172a]">No players selected yet</h2>
                            <p className='text-[#64748b]'>Go to Available tab to select players</p>
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