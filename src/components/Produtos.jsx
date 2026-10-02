import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../lib/products";

const EASE = [0.16, 1, 0.3, 1];

export default function Produtos({ onSelect }) {
  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-acai-bg py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-acai-purple/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-acai-green">
            Escolha seu açaí
          </p>

          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Do tamanho da sua fome.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-acai-muted sm:text-lg">
            Açaí cremoso, preparado para você começar a manhã do jeito certo.
            Escolha a opção que combina com a sua rotina.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={
                index < 3
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
              }
            >
              <ProductCard
                product={product}
                index={index}
                onSelect={onSelect}
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-acai-purple/20 bg-acai-card/50 px-5 py-4 text-center"
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
            Pedido antecipado
          </p>

          <p className="mt-2 text-sm text-acai-muted">
            Agende sua entrega pela manhã e receba seu açaí fresquinho sem
            precisar sair de casa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
