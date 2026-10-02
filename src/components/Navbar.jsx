import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const scrollTo = (id) => {
  const element = document.querySelector(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#09050D]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* LOGO */}
        <button
          type="button"
          onClick={() => goTo("#topo")}
          className="group flex items-center gap-3"
          aria-label="Voltar ao início"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-acai-purple/40 bg-acai-purple/10 shadow-lg shadow-acai-purple/10 transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-xl font-black text-acai-green">
              A
            </span>
          </div>

          <div className="text-left">
            <span className="block font-display text-lg font-black uppercase leading-none tracking-tight text-white">
              Açaí
            </span>
            <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-acai-green">
              da manhã
            </span>
          </div>
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => goTo("#produtos")}
            className="font-display text-xs font-bold uppercase tracking-wide text-white/70 transition-colors hover:text-acai-green"
          >
            Produtos
          </button>

          <button
            type="button"
            onClick={() => goTo("#diferencial")}
            className="font-display text-xs font-bold uppercase tracking-wide text-white/70 transition-colors hover:text-acai-green"
          >
            Diferencial
          </button>

          <button
            type="button"
            onClick={() => goTo("#como-funciona")}
            className="font-display text-xs font-bold uppercase tracking-wide text-white/70 transition-colors hover:text-acai-green"
          >
            Como funciona
          </button>

          <button
            type="button"
            onClick={() => goTo("#endereco")}
            className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wide text-white/70 transition-colors hover:text-acai-green"
          >
            <MapPin className="h-3.5 w-3.5" />
            Endereço
          </button>
        </nav>

        {/* CTA DESKTOP */}
        <button
          type="button"
          onClick={() => goTo("#pedir")}
          className="hidden rounded-full bg-acai-green px-5 py-3 font-display text-xs font-extrabold uppercase tracking-wide text-black shadow-lg shadow-acai-green/10 transition-all duration-300 hover:scale-[1.03] hover:bg-[#25ff88] md:block"
        >
          Pedir agora
        </button>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 p-2.5 text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#09050D]"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 pb-6 pt-3">

              <button
                type="button"
                onClick={() => goTo("#produtos")}
                className="border-b border-white/5 py-4 text-left font-display text-sm font-bold uppercase tracking-wide text-white/80"
              >
                Produtos
              </button>

              <button
                type="button"
                onClick={() => goTo("#diferencial")}
                className="border-b border-white/5 py-4 text-left font-display text-sm font-bold uppercase tracking-wide text-white/80"
              >
                Diferencial
              </button>

              <button
                type="button"
                onClick={() => goTo("#como-funciona")}
                className="border-b border-white/5 py-4 text-left font-display text-sm font-bold uppercase tracking-wide text-white/80"
              >
                Como funciona
              </button>

              <button
                type="button"
                onClick={() => goTo("#endereco")}
                className="flex items-center gap-2 border-b border-white/5 py-4 text-left font-display text-sm font-bold uppercase tracking-wide text-white/80"
              >
                <MapPin className="h-4 w-4 text-acai-green" />
                Onde estamos
              </button>

              <button
                type="button"
                onClick={() => goTo("#pedir")}
                className="mt-5 rounded-full bg-acai-green py-4 font-display text-sm font-extrabold uppercase tracking-wide text-black"
              >
                Pedir açaí agora
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
