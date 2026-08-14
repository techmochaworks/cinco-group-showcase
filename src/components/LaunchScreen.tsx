import { useState, useEffect } from "react";
import { Scissors } from "lucide-react";

export function LaunchScreen({ children }: { children: React.ReactNode }) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isOpening, setIsOpening] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsOpening(true);
      const timeout = setTimeout(() => {
        setIsComplete(true);
      }, 2500); // 2.5 seconds for animation
      return () => clearTimeout(timeout);
    }
  }, [timeLeft]);

  if (isComplete) {
    return <>{children}</>;
  }

  return (
    <>
      <style>{`body { overflow: hidden !important; }`}</style>
      
      <div className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-auto bg-black">
        {/* Left Curtain */}
        <div 
          className={`w-1/2 h-full bg-red-900 border-r-[6px] border-yellow-600/80 shadow-2xl transition-transform duration-[2000ms] ease-in-out ${isOpening ? '-translate-x-full' : 'translate-x-0'}`}
          style={{ 
            backgroundImage: 'linear-gradient(90deg, #2a0404 0%, #7f1d1d 50%, #991b1b 100%)',
            boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.6)'
          }}
        />
        
        {/* Right Curtain */}
        <div 
          className={`w-1/2 h-full bg-red-900 border-l-[6px] border-yellow-600/80 shadow-2xl transition-transform duration-[2000ms] ease-in-out ${isOpening ? 'translate-x-full' : 'translate-x-0'}`}
          style={{ 
            backgroundImage: 'linear-gradient(270deg, #2a0404 0%, #7f1d1d 50%, #991b1b 100%)',
            boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.6)'
          }}
        />

        {/* Center Ribbon Line */}
        <div className={`absolute top-1/2 left-0 right-0 h-6 bg-yellow-600 shadow-[0_0_20px_rgba(202,138,4,0.8)] transform -translate-y-1/2 transition-all duration-1000 z-10 border-y border-yellow-400 ${isOpening ? 'opacity-0 scale-x-110' : 'opacity-100 scale-x-100'}`} 
             style={{ transitionProperty: 'opacity, transform' }} />

        {/* Content Container (Timer & Icon) */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 z-20 ${isOpening ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
          <div className="text-center p-12 rounded-3xl backdrop-blur-md bg-black/30 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.9)] mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-[0.25em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              Launching In
            </h1>
            <div className="text-[6rem] md:text-[12rem] leading-none font-bold text-yellow-500 tabular-nums drop-shadow-[0_0_40px_rgba(234,179,8,0.7)]">
              00:{timeLeft.toString().padStart(2, '0')}
            </div>
          </div>
          
          {/* Scissors Icon on Ribbon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="bg-yellow-500 w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.6)] border-[3px] border-yellow-200">
                <Scissors className={`w-12 h-12 text-red-950 transition-transform duration-500 ${isOpening ? 'rotate-0' : '-rotate-45'}`} strokeWidth={2.5} />
             </div>
          </div>
        </div>
      </div>
      
      {children}
    </>
  );
}
