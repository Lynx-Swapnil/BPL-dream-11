import React from 'react';
import { FaUser } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
const SelectedCard = ({ player, handleRemoveSelectedPlayer }) => {
    return (
        <div>
            <div key={player.playerName} className="flex items-center justify-between gap-6 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_8px_18px_rgba(15,23,42,0.06)]" >
                <div className="flex items-center gap-4 sm:gap-6">
                    <img src={player.playerImg} alt={player.playerName} className="h-24 w-24 object-cover rounded-lg" />
                    <div>
                        <h2 className="flex items-center gap-2 font-semibold text-xl text-[#0f172a]"><FaUser />{player.playerName}</h2>
                        <p className='text-[#64748b]'>{player.playerType}</p>
                        <p className='text-sm text-[#94a3b8]'>{player.team}</p>
                    </div>
                </div>
                <button className="btn border-none bg-red-50 text-red-500 hover:bg-red-100" onClick={() => { handleRemoveSelectedPlayer(player) }}><GoTrash /></button>
            </div>
        </div>
    );
};

export default SelectedCard;