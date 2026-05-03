

const steps = [
  {
    number: '1',
    title: 'Diagnóstico gratuito',
    description: 'Uma conversa sem compromisso. Você conta o que vende e onde está travado. A gente ouve, entende o seu momento e indica o caminho mais adequado, sem pressão e sem enrolação.',
  },
  {
    number: '2',
    title: 'Proposta',
    description: 'Apresentamos o serviço ou pacote que faz mais sentido pro seu momento. Nada de empurrar o que não serve pra você agora.',
  },
  {
    number: '3',
    title: 'Execução',
    description: 'Mãos à obra. Com etapas definidas: briefing, desenvolvimento, revisão e publicação. Você acompanha cada passo.',
  },
  {
    number: '4',
    title: 'Resultado',
    description: 'Você acompanha os números. A gente te mostra o que foi feito e o que está gerando retorno.',
  },
  {
    number: '5',
    title: 'Acompanhamento próximo',
    description: 'Não entregamos e sumimos. Fazemos manutenções, ajustes e atualizações constantes, porque o digital precisa evoluir junto com o seu negócio.',
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="w-full bg-[#FDFDFD] px-8 py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[14px] font-semibold tracking-wider text-[#071559] uppercase">
            Etapas
          </span>
          <h2 className="mt-4 text-[40px] font-medium leading-[1.1] tracking-tightest text-[#000000]">
            Do primeiro contato ao crescimento contínuo.
          </h2>
          <p className="mt-4 max-w-[600px] text-[17px] font-normal leading-[1.6] text-[#5F5F5F]">
            Um processo simples, sem burocracia, com marcos claros do começo ao fim.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mt-12 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-6">
          {/* Connecting Dashed Line (Desktop only) */}
          <div className="absolute left-[24px] top-[24px] hidden h-[1px] w-[calc(100%-48px)] border-t border-dashed border-[#D1D5DB] md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col">
              {/* Number Container */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#071559] text-[18px] font-medium text-white shadow-md">
                {step.number}
              </div>

              {/* Text */}
              <h3 className="mt-6 text-[18px] font-medium leading-snug text-[#000000]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#5F5F5F]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
