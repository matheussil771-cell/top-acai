import { motion } from "framer-motion";

const ITEMS = [
  "AÇAÍ FRESCO",
  "ENTREGA PELA MANHÃ",
  "1 LITRO",
  "CREMOSO",
  "FEITO PARA VOCÊ",
  "AÇAÍ FRESCO",
  "ENTREGA PELA MANHÃ",
  "1 LITRO",
  "CREMOSO",
  "FEITO PARA VOCÊ",
];

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-acai-purple py-4">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {ITEMS.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="mx-6 font-display text-sm font-black uppercase tracking-[0.18em] text-white sm:text-base">
              {item}
            </span>

            <span className="text-lg text-acai-green">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
