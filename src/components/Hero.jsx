import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export default function Hero({ onOrder }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-acai-bg pt-20">
      {/* Luzes de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-acai-purple/20 blur-[130px]" />

        <div className="absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-acai-green/10 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-acai-purple/10 blur-[100px]" />
      </div>

      {/* Grid decorativo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-acai-green/20 bg-acai-green/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-acai-green" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-acai-green">
              Açaí fresco pela manhã
            </span>
          </div>

          <h1 className="font-display max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Seu açaí.
            <br />

            <span className="text-acai-purpleLight">Sua manhã.</span>

            <br />

            <span className="text-acai-green">Do seu jeito.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-acai-muted sm:text-lg">
            Açaí cremoso, fresco e pronto para começar o dia com energia.
            Escolha seu tamanho, agende sua entrega e receba pela manhã.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onOrder}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-acai-green px-7 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-black shadow-xl shadow-acai-green/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#25ff88] active:scale-[0.98]"
            >
              Pedir açaí agora

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => {
                const element = document.querySelector("#produtos");

                if (window.__lenis && element) {
                  window.__lenis.scrollTo(element, {
                    offset: -72,
                  });
                } else {
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-acai-purple/50 hover:bg-acai-purple/10"
            >
              Ver produtos
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div>
              <p className="font-display text-lg font-extrabold text-white">
                100%
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Açaí
              </p>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div>
              <p className="font-display text-lg font-extrabold text-white">
                1L
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Embalagem
              </p>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div>
              <p className="font-display text-lg font-extrabold text-white">
                Manhã
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                Entrega
              </p>
            </div>
          </div>
        </motion.div>

        {/* VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative aspect-square">
            {/* Glow */}
            <div className="absolute inset-[12%] rounded-full bg-acai-purple/30 blur-[80px]" />

            {/* Círculo decorativo */}
            <div className="absolute inset-[7%] rounded-full border border-acai-purple/20" />

            <div className="absolute inset-[13%] rounded-full border border-acai-green/10" />

            {/* Imagem principal */}
            <div className="absolute inset-[10%] overflow-hidden rounded-[2.5rem] border border-white/10 bg-acai-card shadow-2xl shadow-black/40">
              <img
                src="/images/acai-hero.jpg"
                alt="Açaí cremoso"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute right-[3%] top-[8%] rounded-2xl border border-acai-green/20 bg-acai-bg/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                Fresco
              </p>

              <p className="font-display text-sm font-extrabold text-acai-green">
                Todo dia
              </p>
            </motion.div>

            {/* Badge inferior */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute bottom-[8%] left-[3%] rounded-2xl border border-acai-purple/30 bg-acai-bg/90 px-4 py-3 shadow-xl backdrop-blur-xl"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                Entrega
              </p>

              <p className="font-display text-sm font-extrabold text-white">
                Pela manhã
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        type="button"
        onClick={() => {
          const element = document.querySelector("#produtos");

          if (window.__lenis && element) {
            window.__lenis.scrollTo(element, {
              offset: -72,
            });
          } else {
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors hover:text-acai-green sm:flex"
        aria-label="Descer para produtos"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
          Explorar
        </span>

        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
