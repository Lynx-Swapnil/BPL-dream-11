import React, { useMemo, useState } from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers, onViewDetails }) => {
    const [searchText, setSearchText] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');
    const [sortBy, setSortBy] = useState('rating-desc');

    const playerTypes = useMemo(() => {
        return ['all', ...new Set(players.map((player) => player.playerType))];
    }, [players]);

    const visiblePlayers = useMemo(() => {
        const normalizedSearch = searchText.trim().toLowerCase();

        const filteredPlayers = players.filter((player) => {
            const matchesText =
                player.playerName.toLowerCase().includes(normalizedSearch) ||
                player.playerCountry.toLowerCase().includes(normalizedSearch) ||
                player.team.toLowerCase().includes(normalizedSearch);
            const matchesType = typeFilter === 'all' || player.playerType === typeFilter;

            return matchesText && matchesType;
        });

        const sortedPlayers = [...filteredPlayers];

        if (sortBy === 'price-asc') {
            sortedPlayers.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            sortedPlayers.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'rating-asc') {
            sortedPlayers.sort((a, b) => a.rating - b.rating);
        } else {
            sortedPlayers.sort((a, b) => b.rating - a.rating);
        }

        return sortedPlayers;
    }, [players, searchText, typeFilter, sortBy]);

    return (
        <div>
            <div className='mb-6 grid grid-cols-1 gap-3 rounded-2xl border border-[#dce5ff] bg-white/80 p-4 md:grid-cols-4'>
                <label className='form-control w-full md:col-span-2'>
                    <span className='mb-1 text-sm font-medium text-[#334155]'>Search Player</span>
                    <input
                        type='text'
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                        placeholder='Name, country, team...'
                        className='input input-bordered w-full border-[#d7e1ff] bg-white'
                    />
                </label>

                <label className='form-control w-full'>
                    <span className='mb-1 text-sm font-medium text-[#334155]'>Filter Type</span>
                    <select
                        className='select select-bordered w-full border-[#d7e1ff] bg-white'
                        value={typeFilter}
                        onChange={(event) => setTypeFilter(event.target.value)}
                    >
                        {playerTypes.map((type) => (
                            <option key={type} value={type}>
                                {type === 'all' ? 'All Types' : type}
                            </option>
                        ))}
                    </select>
                </label>

                <label className='form-control w-full'>
                    <span className='mb-1 text-sm font-medium text-[#334155]'>Sort By</span>
                    <select
                        className='select select-bordered w-full border-[#d7e1ff] bg-white'
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                    >
                        <option value='rating-desc'>Rating: High to Low</option>
                        <option value='rating-asc'>Rating: Low to High</option>
                        <option value='price-asc'>Price: Low to High</option>
                        <option value='price-desc'>Price: High to Low</option>
                    </select>
                </label>
            </div>

            <p className='mb-4 text-sm font-medium text-[#475569]'>
                Showing {visiblePlayers.length} of {players.length} players
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    visiblePlayers.map(player => (
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

            {visiblePlayers.length === 0 && (
                <div className='mt-6 rounded-2xl border border-dashed border-[#cbd5e1] bg-[#f8fafc] p-8 text-center'>
                    <p className='text-lg font-semibold text-[#0f172a]'>No players found</p>
                    <p className='mt-1 text-sm text-[#64748b]'>Try changing search text, filter, or sort options.</p>
                </div>
            )}
        </div>
    );
};

export default AvailablePlayers;