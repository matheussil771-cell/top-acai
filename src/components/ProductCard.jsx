import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { formatBRL } from "../lib/products";

const EASE = [0.16, 1, 0.3, 1];

export default function ProductCard({ product, index = 0, onSelect }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: EASE,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-acai-purple/25 bg-acai-card shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-acai-purple/50 hover:shadow-acai-purple/10"
    >
      {/* IMAGEM */}
      <div className="relative aspect-[4/3] overflow-hidden bg-acai-bg">
        {product.image ? (
          <img
            src={product.image}
            alt={product.nome}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-5xl font-black text-acai-purple/30">
              AÇAÍ
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {product.isPromo && (
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-acai-green px-3 py-1.5 font-display text-[10px] font-extrabold uppercase tracking-wide text-black shadow-lg">
            <Star className="h-3 w-3 fill-current" />
            Promoção
          </div>
        )}

        {product.badge && (
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
            {product.badge}
          </div>
        )}
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-acai-green">
            {product.volume || "Açaí"}
          </p>

          <h3 className="font-display mt-2 text-xl font-extrabold leading-tight text-white">
            {product.nome}
          </h3>

          {product.descricao && (
            <p className="mt-2 text-sm leading-relaxed text-acai-muted">
              {product.descricao}
            </p>
          )}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            {product.precoAntigo && (
              <p className="font-mono text-xs text-white/30 line-through">
                {formatBRL(product.precoAntigo)}
              </p>
            )}

            <p
              className={`font-display text-2xl font-black ${
                product.isPromo
                  ? "text-acai-green"
                  : "text-acai-purpleLight"
              }`}
            >
              {formatBRL(product.preco)}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelect?.(product.id)}
            className="group/button inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 font-display text-xs font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:bg-acai-green hover:text-black"
          >
            Pedir

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:translate-x-1" />
          </button>
        </div>
      </div>
    </
