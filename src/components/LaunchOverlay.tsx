import React from 'react';

type LaunchOverlayProps = {
  onFinish: () => void;
};

const LaunchOverlay: React.FC<LaunchOverlayProps> = ({ onFinish }) => {
  type Phase = 'idle' | 'playing' | 'logo';
  const [phase, setPhase] = React.useState<Phase>('idle');
  const [typedText, setTypedText] = React.useState('');
  const [isWiping, setIsWiping] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const handleLaunch = React.useCallback(() => {
    if (phase !== 'idle') return;
    setPhase('playing');
  }, [phase]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleLaunch();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleLaunch]);

  // Phase: playing -> run video for 2s, then wipe transition to white
  React.useEffect(() => {
    if (phase !== 'playing') return;
    const video = videoRef.current;
    if (video) {
      try {
        video.play();
      } catch {}
    }
    const playTimer = window.setTimeout(() => {
      setIsWiping(true);
      const wipeDurationMs = 800;
      const wipeTimer = window.setTimeout(() => {
        setIsWiping(false);
        setPhase('logo');
      }, wipeDurationMs);
      return () => window.clearTimeout(wipeTimer);
    }, 2000);
    return () => window.clearTimeout(playTimer);
  }, [phase]);

  // Phase: logo -> white screen with typing effect for 4s
  React.useEffect(() => {
    if (phase !== 'logo') return;
    const fullText = 'JANHIT SANSTHA';
    setTypedText('');

    const perCharMs = Math.max(50, Math.floor(4000 / fullText.length));
    let idx = 0;
    const interval = window.setInterval(() => {
      idx += 1;
      setTypedText(fullText.slice(0, idx));
      if (idx >= fullText.length) {
        window.clearInterval(interval);
      }
    }, perCharMs);

    const done = window.setTimeout(() => onFinish(), 4000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(done);
    };
  }, [phase, onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] text-white overflow-hidden">
      {/* Background video (idle/playing) */}
      {(phase === 'idle' || phase === 'playing') && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={"/Indian%20flag.mp4"}
          muted
          autoPlay
          loop
          playsInline
        />
      )}

      {/* Wipe transition from right to left */}
      <div
        className={
          "absolute inset-0 bg-white transform transition-transform duration-700 ease-in-out will-change-transform " +
          (isWiping ? "translate-x-0" : "translate-x-full")
        }
      />

      {/* Dim + Button on top (idle) */}
      {phase === 'idle' && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <button
              onClick={handleLaunch}
              className="px-8 py-6 rounded-xl text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-600 text-black shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white max-w-4xl leading-tight"
            >
              Celebrating freedom with a new beginning – Janhit Sanstha website now live!
            </button>
            <div className="text-sm md:text-base text-gray-200">Press Enter to launch</div>
          </div>
        </div>
      )}

      {/* White screen with logo + typing (logo phase) */}
      {phase === 'logo' && (
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center">
          <img
            src="/Janhit%20Main%20Logo.png"
            alt="Janhit Sanstha Logo"
            className="w-28 h-28 md:w-40 md:h-40 object-contain"
          />
          <div className="mt-4 text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent">
            {typedText}
          </div>
        </div>
      )}
    </div>
  );
};

export default LaunchOverlay;


