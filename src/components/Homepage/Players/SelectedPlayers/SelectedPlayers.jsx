import { FaUser } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

const SelectedPlayers = ({ selectedPlayers , setSelectedPlayers , coin , setCoin}) => {

    const handleRemoveSelectedPlayer = (playerToRemove) => {
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== playerToRemove.playerName);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + playerToRemove.price);
    }

    return (
        <div>
            <div className="space-y-5">
                {
                    selectedPlayers.map(player => (
                        <div key={player.playerName} className="flex items-center justify-between gap-6 p-10 rounded-2xl border" >
                            <div className="flex items-center gap-6">
                                <img src={player.playerImg} alt={player.playerName} className="h-24 w-24 object-cover rounded-lg" />
                                <div>
                                    <h2 className="flex items-center gap-2 font-semibold text-xl"><FaUser />{player.playerName}</h2>
                                    <p>{player.playerType}</p>
                                </div>
                            </div>
                            <button className="btn text-red-500 border-none " onClick={() => { handleRemoveSelectedPlayer(player) }}><GoTrash /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;