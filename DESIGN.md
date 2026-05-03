<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Kaven Ecom — Design System</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
<style>
  /* ============================================================
     KAVEN ECOM — DESIGN SYSTEM TOKENS
     ============================================================ */

  :root {
    /* --- Cores principais --- */
    --color-primary:       #071559;   /* Azul-marinho escuro — navbar, detalhes */
    --color-accent:        #071559;   /* Azul escuro */
    --color-accent-light:  #38BDF8;   /* Azul claro — gradientes, efeitos */
    --color-cta-dark:      #17181A;   /* CTA hero — botão principal escuro */

    /* --- Backgrounds --- */
    --color-bg-page:       #FDFDFD;   /* Fundo da página branco */
    --color-bg-surface:    #FFFFFF;   /* Cartões, nav, modais */
    --color-bg-tint:       #EEF3FF;   /* Badges, ícones de card */

    /* --- Texto --- */
    --color-text-primary:  #111827;
    --color-text-secondary:#6B7280;
    --color-text-hint:     #9CA3AF;

    /* --- Bordas --- */
    --color-border:        #E5E7EB;
    --color-border-strong: #D1D5DB;

    /* --- Tipografia --- */
    --font-sans: 'Geist', sans-serif;

    /* --- Raios --- */
    --radius-sm:   8px;
    --radius-md:   12px;
    --radius-lg:   16px;
    --radius-pill: 999px;

    /* --- Espaçamentos (8pt grid) --- */
    --space-1:  8px;
    --space-2:  16px;
    --space-3:  24px;
    --space-4:  32px;
    --space-6:  48px;
    --space-8:  64px;

    /* --- Sombras --- */
    --shadow-nav:   0 1px 4px rgba(0,0,0,0.06);
    --shadow-modal: 0 4px 16px rgba(0,0,0,0.10);
  }

  /* ============================================================
     RESET & BASE
     ============================================================ */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { font-size: 16px; }

  body {
    font-family: var(--font-sans);
    background: var(--color-bg-page);
    color: var(--color-text-primary);
    line-height: 1.6;
  }

  /* ============================================================
     TIPOGRAFIA
     ============================================================ */
  h1 { font-size: 52px; font-weight: 500; line-height: 1.1; letter-spacing: -0.02em; }
  h2 { font-size: 36px; font-weight: 500; line-height: 1.2; }
  h3 { font-size: 24px; font-weight: 500; line-height: 1.3; }
  h4 { font-size: 18px; font-weight: 500; }
  p  { font-size: 16px; font-weight: 400; color: var(--color-text-secondary); line-height: 1.7; }
  small, .caption { font-size: 13px; color: var(--color-text-hint); }

  /* ============================================================
     BOTÕES
     ============================================================ */

  /* Botão CTA hero — dark pill com dot glowing */
  .btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    background: #17181A;
    color: #E5E5E5;
    border: 0.5px solid #313133;
    border-radius: var(--radius-pill);
    padding: 6px 32px 6px 6px;
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.025em;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  }
  .btn-cta:hover { transform: scale(1.02); }
  .btn-cta-icon {
    width: 40px; height: 40px;
    border-radius: 50%;
    background: #071559;
    border: 2px solid #071559;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 20px rgba(7, 21, 89, 0.6);
  }
  .btn-cta-icon-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #ffffff;
  }

  /* Botão primário navy — navbar */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--color-primary);
    color: #fff;
    border: none;
    border-radius: var(--radius-pill);
    padding: 12px 24px;
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-primary:hover { background: #0e1a4a; }

  /* Botão ghost */
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    background: transparent;
    color: var(--color-primary);
    border: 1.5px solid var(--color-primary);
    border-radius: var(--radius-pill);
    padding: 11px 24px;
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-ghost:hover { background: var(--color-bg-tint); }

  /* ============================================================
     NAVEGAÇÃO
     ============================================================ */
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--space-4);
    height: 64px;
    background: var(--color-bg-surface);
  }

  .navbar-logo {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-text-primary);
  }
  .navbar-logo span { font-weight: 400; }

  /* Nav pill central */
  .nav-pill {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    background: var(--color-bg-surface);
    border-radius: var(--radius-pill);
    border: 0.5px solid var(--color-border);
    padding: 10px 28px;
    box-shadow: var(--shadow-nav);
  }
  .nav-link {
    font-size: 14px;
    font-weight: 400;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color 0.2s;
  }
  .nav-link:hover { color: var(--color-text-primary); }
  .nav-link.active { color: var(--color-accent); font-weight: 500; }

  /* ============================================================
     HERO SECTION
     ============================================================ */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--space-8) var(--space-4);
    min-height: 520px;
    background: var(--color-bg-page);
  }
  .hero h1 { max-width: 700px; margin-bottom: var(--space-3); }
  .hero p  { max-width: 540px; margin-bottom: var(--space-4); font-size: 17px; }

  /* ============================================================
     CARDS DE SERVIÇO
     ============================================================ */
  .card {
    background: var(--color-bg-surface);
    border: 0.5px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-3);
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .card-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: var(--color-bg-tint);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    margin-bottom: 4px;
  }
  .card-title { font-size: 15px; font-weight: 500; color: var(--color-text-primary); }
  .card-desc  { font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; }

  /* Grid de cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-2);
  }

  /* ============================================================
     BADGES
     ============================================================ */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: var(--radius-pill);
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
  }
  .badge-dot { width: 6px; height: 6px; border-radius: 50%; }

  .badge-blue { background: var(--color-bg-tint); color: var(--color-primary); }
  .badge-blue .badge-dot { background: var(--color-accent); }

  .badge-green { background: #ECFDF5; color: #065F46; }
  .badge-green .badge-dot { background: #10B981; }

  .badge-amber { background: #FFFBEB; color: #92400E; }
  .badge-amber .badge-dot { background: #F59E0B; }

  /* ============================================================
     FORMULÁRIO / INPUTS
     ============================================================ */
  .input {
    width: 100%;
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    font-family: var(--font-sans);
    font-size: 14px;
    color: var(--color-text-primary);
    background: var(--color-bg-surface);
    outline: none;
    transition: border-color 0.2s;
  }
  .input:focus { border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
  .input::placeholder { color: var(--color-text-hint); }

  .form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 6px;
  }
  .form-group { display: flex; flex-direction: column; gap: 6px; }

  /* ============================================================
     UTILITÁRIOS DE LAYOUT
     ============================================================ */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 var(--space-4); }
  .flex       { display: flex; }
  .flex-col   { flex-direction: column; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .gap-1 { gap: var(--space-1); }
  .gap-2 { gap: var(--space-2); }
  .gap-3 { gap: var(--space-3); }
  .gap-4 { gap: var(--space-4); }
  .text-center { text-align: center; }
  .w-full { width: 100%; }

  /* ============================================================
     PÁGINA DE DEMONSTRAÇÃO
     ============================================================ */
  .ds-page { background: var(--color-bg-page); min-height: 100vh; }

  .ds-section {
    background: var(--color-bg-surface);
    border: 0.5px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-3);
    margin-bottom: var(--space-3);
  }
  .ds-section-title {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--color-text-hint);
    margin-bottom: var(--space-2);
    padding-bottom: var(--space-1);
    border-bottom: 0.5px solid var(--color-border);
  }
  .ds-row { display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; }

  /* Swatches */
  .swatch-grid { display: flex; flex-wrap: wrap; gap: var(--space-2); }
  .swatch-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .swatch-box  { width: 64px; height: 64px; border-radius: var(--radius-sm); border: 0.5px solid var(--color-border); }
  .swatch-name { font-size: 11px; font-weight: 500; color: var(--color-text-secondary); }
  .swatch-hex  { font-size: 10px; color: var(--color-text-hint); font-family: monospace; }

  /* Tipografia demo */
  .type-demo-row {
    display: flex; align-items: baseline; gap: var(--space-2);
    border-bottom: 0.5px solid var(--color-border);
    padding: 10px 0;
  }
  .type-demo-row:last-child { border: none; }
  .type-meta { font-size: 11px; color: var(--color-text-hint); min-width: 110px; font-family: monospace; flex-shrink: 0; }

  /* Raios demo */
  .radius-row { display: flex; gap: var(--space-2); flex-wrap: wrap; align-items: flex-end; }
  .radius-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .radius-box {
    background: var(--color-bg-tint);
    border: 0.5px solid var(--color-border);
    display: flex; align-items: center; justify-content: center;
  }
  .radius-label { font-size: 10px; color: var(--color-text-hint); font-family: monospace; }

  /* Espaçamentos demo */
  .spacing-row { display: flex; gap: 12px; align-items: flex-end; flex-wrap: wrap; }
  .spacing-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .spacing-box  { background: var(--color-bg-tint); border-radius: 4px; }
  .spacing-label { font-size: 10px; color: var(--color-text-hint); font-family: monospace; }
</style>
</head>
<body class="ds-page">

<!-- ============================================================
     DEMONSTRAÇÃO DO DESIGN SYSTEM
     ============================================================ -->
<div class="container" style="padding-top: 48px; padding-bottom: 64px;">

  <!-- Título -->
  <div style="margin-bottom: 40px;">
    <p class="caption" style="font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-accent);">Design System</p>
    <h2 style="color: var(--color-text-primary); margin-top: 4px;">Kaven Ecom</h2>
    <p style="margin-top: 8px;">Base visual extraída da hero — e-commerce orientado a conversão.</p>
  </div>

  <!-- 1. CORES -->
  <div class="ds-section">
    <div class="ds-section-title">1 · Cores</div>
    <div class="swatch-grid">
      <div class="swatch-item">
        <div class="swatch-box" style="background:#071559;"></div>
        <div class="swatch-name">Primária</div>
        <div class="swatch-hex">#071559</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#071559;"></div>
        <div class="swatch-name">Acento</div>
        <div class="swatch-hex">#071559</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#38BDF8;"></div>
        <div class="swatch-name">Azul claro</div>
        <div class="swatch-hex">#38BDF8</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#17181A;"></div>
        <div class="swatch-name">CTA dark</div>
        <div class="swatch-hex">#17181A</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#FDFDFD; border-color:#E5E7EB;"></div>
        <div class="swatch-name">Background</div>
        <div class="swatch-hex">#FDFDFD</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#FFFFFF; border-color:#E5E7EB;"></div>
        <div class="swatch-name">Superfície</div>
        <div class="swatch-hex">#FFFFFF</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#111827;"></div>
        <div class="swatch-name">Texto prim.</div>
        <div class="swatch-hex">#111827</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#6B7280;"></div>
        <div class="swatch-name">Texto sec.</div>
        <div class="swatch-hex">#6B7280</div>
      </div>
      <div class="swatch-item">
        <div class="swatch-box" style="background:#9CA3AF;"></div>
        <div class="swatch-name">Texto hint</div>
        <div class="swatch-hex">#9CA3AF</div>
      </div>
    </div>
  </div>

  <!-- 2. TIPOGRAFIA -->
  <div class="ds-section">
    <div class="ds-section-title">2 · Tipografia — Plus Jakarta Sans</div>
    <div class="type-demo-row">
      <div class="type-meta">H1 · 52px / 500</div>
      <div style="font-size: 40px; font-weight: 500; line-height:1.1;">Transformamos cliques</div>
    </div>
    <div class="type-demo-row">
      <div class="type-meta">H2 · 36px / 500</div>
      <div style="font-size: 28px; font-weight: 500;">Nossos Serviços</div>
    </div>
    <div class="type-demo-row">
      <div class="type-meta">H3 · 24px / 500</div>
      <div style="font-size: 20px; font-weight: 500;">Tráfego Pago</div>
    </div>
    <div class="type-demo-row">
      <div class="type-meta">Body · 16px / 400</div>
      <div style="font-size: 16px; color: var(--color-text-secondary); line-height:1.7;">Especialistas em criação de lojas virtuais, tráfego pago, integração em marketplaces e gestão de redes sociais para escalar a sua marca.</div>
    </div>
    <div class="type-demo-row">
      <div class="type-meta">Caption · 13px / 400</div>
      <div style="font-size: 13px; color: var(--color-text-hint);">Texto de apoio e legendas</div>
    </div>
  </div>

  <!-- 3. BOTÕES -->
  <div class="ds-section">
    <div class="ds-section-title">3 · Botões</div>
    <div class="ds-row">
      <!-- CTA hero -->
      <button class="btn-cta">
        <span class="btn-cta-icon">
          <div class="btn-cta-icon-dot"></div>
        </span>
        Fazer diagnóstico gratuito →
      </button>

      <!-- Primário navy -->
      <button class="btn-primary">Entrar em contato ☎</button>

      <!-- Ghost -->
      <button class="btn-ghost">Saiba mais</button>
    </div>
  </div>

  <!-- 4. NAVEGAÇÃO -->
  <div class="ds-section">
    <div class="ds-section-title">4 · Navegação</div>
    <nav class="navbar" style="border-radius: var(--radius-md); border: 0.5px solid var(--color-border);">
      <div class="navbar-logo">Kaven <span>Ecom</span></div>
      <div class="nav-pill">
        <a href="#" class="nav-link active">Sobre</a>
        <a href="#" class="nav-link">Serviços</a>
        <a href="#" class="nav-link">Como funciona</a>
        <a href="#" class="nav-link">Resultados</a>
        <a href="#" class="nav-link">Cases</a>
      </div>
      <button class="btn-primary" style="font-size: 14px; padding: 10px 20px;">Fazer diagnóstico gratuito</button>
    </nav>
  </div>

  <!-- 5. HERO -->
  <div class="ds-section">
    <div class="ds-section-title">5 · Hero Section</div>
    <section class="hero" style="border-radius: var(--radius-md); position: relative; overflow: hidden; background: #FDFDFD;">
      <h1 style="color: #000000; position: relative; z-index: 10;">Seu negócio pode faturar<br>muito mais do que fatura hoje.</h1>
      <p style="color: #5F5F5F; position: relative; z-index: 10;">Estruturamos a presença online de marcas que já vendem, mas dependem de processos manuais e indicações que não permitem escalar.</p>
      <button class="btn-cta" style="position: relative; z-index: 10;">
        <span class="btn-cta-icon">
          <div class="btn-cta-icon-dot"></div>
        </span>
        Fazer diagnóstico gratuito →
      </button>
    </section>
  </div>

  <!-- 6. CARDS -->
  <div class="ds-section">
    <div class="ds-section-title">6 · Cards de Serviço</div>
    <div class="cards-grid">
      <div class="card">
        <div class="card-icon">🛍️</div>
        <div class="card-title">Lojas Virtuais</div>
        <div class="card-desc">Criação e otimização de e-commerce do zero até o primeiro pedido.</div>
      </div>
      <div class="card">
        <div class="card-icon">📈</div>
        <div class="card-title">Tráfego Pago</div>
        <div class="card-desc">Google Ads e Meta Ads para escalar vendas com ROI positivo.</div>
      </div>
      <div class="card">
        <div class="card-icon">📦</div>
        <div class="card-title">Marketplaces</div>
        <div class="card-desc">Integração com Mercado Livre, Amazon, Shopee e mais.</div>
      </div>
      <div class="card">
        <div class="card-icon">📱</div>
        <div class="card-title">Redes Sociais</div>
        <div class="card-desc">Gestão de conteúdo e performance para crescer a sua marca.</div>
      </div>
    </div>
  </div>

  <!-- 7. BADGES -->
  <div class="ds-section">
    <div class="ds-section-title">7 · Badges</div>
    <div class="ds-row">
      <span class="badge badge-blue"><span class="badge-dot"></span>Novo serviço</span>
      <span class="badge badge-green"><span class="badge-dot"></span>Ativo</span>
      <span class="badge badge-amber"><span class="badge-dot"></span>Em breve</span>
    </div>
  </div>

  <!-- 8. FORMULÁRIO -->
  <div class="ds-section">
    <div class="ds-section-title">8 · Inputs de Formulário</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2); max-width: 600px;">
      <div class="form-group">
        <label class="form-label">Nome completo</label>
        <input class="input" type="text" placeholder="João Silva" />
      </div>
      <div class="form-group">
        <label class="form-label">E-mail</label>
        <input class="input" type="email" placeholder="joao@loja.com.br" />
      </div>
      <div class="form-group" style="grid-column: 1 / -1;">
        <label class="form-label">Mensagem</label>
        <textarea class="input" rows="3" placeholder="Conte sobre sua loja..." style="resize: vertical;"></textarea>
      </div>
      <div>
        <button class="btn-primary">Enviar mensagem</button>
      </div>
    </div>
  </div>

  <!-- 9. RAIOS & ESPAÇAMENTOS -->
  <div class="ds-section">
    <div class="ds-section-title">9 · Raios de Borda</div>
    <div class="radius-row">
      <div class="radius-item">
        <div class="radius-box" style="width:56px;height:56px;border-radius:8px;"></div>
        <div class="radius-label">8px — sm</div>
      </div>
      <div class="radius-item">
        <div class="radius-box" style="width:56px;height:56px;border-radius:12px;"></div>
        <div class="radius-label">12px — md</div>
      </div>
      <div class="radius-item">
        <div class="radius-box" style="width:56px;height:56px;border-radius:16px;"></div>
        <div class="radius-label">16px — lg</div>
      </div>
      <div class="radius-item">
        <div class="radius-box" style="width:96px;height:56px;border-radius:999px;"></div>
        <div class="radius-label">999px — pill</div>
      </div>
    </div>
  </div>

  <div class="ds-section">
    <div class="ds-section-title">10 · Espaçamentos (8pt grid)</div>
    <div class="spacing-row">
      <div class="spacing-item"><div class="spacing-box" style="width:8px;height:8px;"></div><div class="spacing-label">8px</div></div>
      <div class="spacing-item"><div class="spacing-box" style="width:16px;height:16px;"></div><div class="spacing-label">16px</div></div>
      <div class="spacing-item"><div class="spacing-box" style="width:24px;height:24px;"></div><div class="spacing-label">24px</div></div>
      <div class="spacing-item"><div class="spacing-box" style="width:32px;height:32px;"></div><div class="spacing-label">32px</div></div>
      <div class="spacing-item"><div class="spacing-box" style="width:48px;height:48px;"></div><div class="spacing-label">48px</div></div>
      <div class="spacing-item"><div class="spacing-box" style="width:64px;height:64px;"></div><div class="spacing-label">64px</div></div>
    </div>
  </div>

</div><!-- /container -->

</body>
</html>