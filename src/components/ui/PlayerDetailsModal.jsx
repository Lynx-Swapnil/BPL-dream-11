import { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';

const PlayerDetailsModal = ({ player, onClose }) => {
  useEffect(() => {
    if (!player) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [player, onClose]);

  if (!player) return null;

  return (
    <div className='fixed inset-0 z-60 flex items-center justify-center p-4'>
      <button
        className='absolute inset-0 bg-[#020617]/65 backdrop-blur-[1px]'
        onClick={onClose}
        aria-label='Close player details'
      ></button>

      <div className='relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/40 bg-white shadow-[0_18px_46px_rgba(15,23,42,0.28)]'>
        <div className='grid md:grid-cols-2'>
          <div className='relative min-h-72 bg-[#0f172a]'>
            <img
              src={player.playerImg}
              alt={player.playerName}
              className='h-full w-full object-cover object-top opacity-90'
            />
            <div className='absolute inset-x-0 bottom-0 bg-linear-to-t from-[#020617] via-[#020617]/35 to-transparent px-5 pb-5 pt-10'>
              <p className='text-sm font-semibold tracking-wide text-[#f8fafc]/80'>#{player.jerseyNumber} · {player.team}</p>
              <h2 className='text-3xl font-bold text-white'>{player.playerName}</h2>
              <p className='text-[#cbd5e1]'>{player.playerType}</p>
            </div>
          </div>

          <div className='relative p-6 pr-16 md:p-7 md:pr-16'>
            <button
              className='btn btn-sm absolute right-5 top-5 h-9 min-h-9 w-9 rounded-full border border-[#d8dfef] bg-white text-[#475569] hover:bg-[#f8fafc]'
              onClick={onClose}
              aria-label='Close details dialog'
            >
              <FaXmark />
            </button>

            <p className='text-sm leading-6 text-[#475569]'>{player.bio}</p>

            <div className='mt-5 grid grid-cols-2 gap-3 text-sm'>
              <p className='rounded-xl bg-[#f5f8ff] px-3 py-2'>Country: <span className='font-semibold text-[#0f172a]'>{player.playerCountry}</span></p>
              <p className='rounded-xl bg-[#f5f8ff] px-3 py-2'>Age: <span className='font-semibold text-[#0f172a]'>{player.age}</span></p>
              <p className='rounded-xl bg-[#f5f8ff] px-3 py-2'>Matches: <span className='font-semibold text-[#0f172a]'>{player.matches}</span></p>
              <p className='rounded-xl bg-[#f5f8ff] px-3 py-2'>Rating: <span className='font-semibold text-[#0f172a]'>{player.rating}</span></p>
              <p className='rounded-xl bg-[#f5f8ff] px-3 py-2'>Runs: <span className='font-semibold text-[#0f172a]'>{player.runs}</span></p>
              <p className='rounded-xl bg-[#f5f8ff] px-3 py-2'>Wickets: <span className='font-semibold text-[#0f172a]'>{player.wickets}</span></p>
            </div>

            <div className='mt-5 space-y-2 text-sm text-[#334155]'>
              <p><span className='font-semibold text-[#0f172a]'>Batting:</span> {player.battingStyle}</p>
              <p><span className='font-semibold text-[#0f172a]'>Bowling:</span> {player.bowlingStyle}</p>
              <p><span className='font-semibold text-[#0f172a]'>Strike Rate:</span> {player.strikeRate}</p>
              <p><span className='font-semibold text-[#0f172a]'>Economy:</span> {player.economy === 0 ? 'N/A' : player.economy}</p>
              <p><span className='font-semibold text-[#0f172a]'>Best:</span> {player.bestPerformance}</p>
              <p><span className='font-semibold text-[#0f172a]'>Impact:</span> {player.roleImpact}</p>
            </div>

            <div className='mt-6 flex items-center justify-between'>
              <span className='rounded-full bg-[#fef3c7] px-3 py-1 text-xs font-semibold text-[#92400e]'>
                {player.isOverseas ? 'Overseas Player' : 'Local Player'}
              </span>
              <span className='text-lg font-bold text-[#0f172a]'>${player.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsModal;
