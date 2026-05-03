import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import {
  ensureSiteContentSeeded,
  type SiteContent,
} from './data/siteContent';

import { ComoFunciona } from './components/ComoFunciona';

export default function App() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    setContent(ensureSiteContentSeeded());
  }, []);

  if (!content) return null;

  return (
    <div className="min-h-screen bg-bg-page">
      <Navbar brand={content.brand} nav={content.nav} contact={content.contact} />
      <Hero hero={content.hero} />
      <ComoFunciona />
    </div>
  );
}
