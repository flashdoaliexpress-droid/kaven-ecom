import type { SiteContent } from '../data/siteContent';

type Props = {
  hero: SiteContent['hero'];
};

export function Hero({ hero }: Props) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-20 text-center">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/fundo-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center">
      <h1 className="max-w-[760px] text-[52px] font-medium leading-[1.1] tracking-tightest text-[#000000]">
        {hero.titleLines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p className="mt-6 max-w-[560px] text-[17px] font-normal leading-[1.7] text-[#5F5F5F]">
        {hero.subtitle}
      </p>

      <button
        type="button"
        className="mt-8 inline-flex items-center gap-4 rounded-pill bg-[#17181A] p-1.5 pr-8 border-[0.5px] border-[#313133] shadow-lg transition-transform hover:scale-[1.02]"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071559] border-[2px] border-[#071559] shadow-[0_0_20px_rgba(7,21,89,0.6)]">
          <span className="h-[5px] w-[5px] rounded-full bg-white"></span>
        </span>
        <span className="text-[15px] font-light text-[#E5E5E5] tracking-wide">
          {hero.cta}
        </span>
      </button>
      </div>
    </section>
  );
}
