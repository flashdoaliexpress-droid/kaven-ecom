import type { SiteContent } from '../data/siteContent';

type Props = {
  brand: SiteContent['brand'];
  nav: SiteContent['nav'];
  contact: SiteContent['contact'];
};

export function Navbar({ brand, nav, contact }: Props) {
  return (
    <header className="absolute top-0 z-50 w-full pt-6">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-8">
        <div className="text-[18px] font-bold text-text-primary">
          {brand.name} <span className="font-normal">{brand.suffix}</span>
        </div>

        <div className="flex items-center gap-4 rounded-pill border-[0.5px] border-brd bg-bg-surface p-1.5 pl-8 shadow-nav">
          <nav className="mr-2 flex items-center gap-6">
            {nav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  'text-[14px] transition-colors ' +
                  (link.active
                    ? 'font-medium text-[#071559]'
                    : 'font-normal text-text-secondary hover:text-text-primary')
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-[10px] text-[14px] font-medium text-white transition-opacity hover:opacity-90"
          >
            {contact.label}
            <PhoneIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
