import React, { useMemo, useState } from "react";

const WHATSAPP = "559185710375";

const products = [
  {
    id: "medio",
    name: "Açaí Médio 1Lt",
    shortName: "Médio 1Lt",
    price: 8,
    description: "Saco de 1 litro de açaí médio.",
  },
  {
    id: "grosso",
    name: "Açaí Grosso 1Lt",
    shortName: "Grosso 1Lt",
    price: 10,
    description: "Saco de 1 litro de açaí grosso e bem encorpado.",
  },
  {
    id: "promo",
    name: "Promoção 2 Litros",
    shortName: "Promo 2Lts",
    price: 15,
    description: "2 sacos de 1 litro de Açaí Médio.",
  },
];

const deliveryTimes = [
  "Entrega das 08:00",
  "Entrega das 08:30",
  "Entrega das 09:00",
  "Entrega das 09:30",
  "Entrega das 10:00",
];

export default function PedidoSection() {
  const [selectedProduct, setSelectedProduct] = useState("medio");
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("Entrega das 08:00");

  const product = products.find(
    (item) => item.id === selectedProduct
  );

  const total = useMemo(() => {
    return product.price * quantity;
  }, [product, quantity]);

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function formatPhone(value) {
    const numbers = value.replace(/\D/g, "").slice(0, 11);

    if (numbers.length <= 2) {
      return numbers;
    }

    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }

    return `(${numbers.slice(0, 2)}) ${numbers.slice(
      2,
      7
    )}-${numbers.slice(7)}`;
  }

  function sendOrder() {
    if (!name.trim()) {
      alert("Digite seu nome.");
      return;
    }

    if (!phone.trim()) {
      alert("Digite seu telefone.");
      return;
    }

    if (!address.trim()) {
      alert("Digite o endereço de entrega.");
      return;
    }

    const message = `
🍇 *NOVO PEDIDO — TOPAÇAÍ*

*Pedido:*
${product.name}

*Quantidade:* ${quantity}

*Valor total:* R$ ${total.toFixed(2).replace(".", ",")}

*Cliente:* ${name}

*Telefone:* ${phone}

*Horário:* ${deliveryTime}

*Endereço de entrega:*
${address}

📍 *Endereço da TopAçaí:*
Rua Prefeito Laurival Campos Cunha, 86, Comercial
Entre Frederico Vasconcelos e Jaime Dias.

Pedido realizado pelo site.
    `.trim();

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  }

  return (
    <section
      id="pedir"
      className="relative overflow-hidden bg-[#08050d] py-24 lg:py-32"
    >
      {/* brilho de fundo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-900/20 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-green-500/5 blur-[120px]" />

        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* CABEÇALHO */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.35em] text-[#00f878]">
            Pedido Express
          </p>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Agende sua entrega da{" "}
            <span className="text-white">manhã</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Preencha, envie e pronto: o pedido fica salvo com a gente
            e abre o WhatsApp já com o resumo pra você confirmar.
          </p>
        </div>

        {/* ÁREA DO PEDIDO */}
        <div className="grid gap-8 rounded-[28px] border border-purple-500/20 bg-[#0d0815]/80 p-5 shadow-[0_0_80px_rgba(80,0,120,0.12)] backdrop-blur-xl sm:p-8 lg:grid-cols-[1.45fr_0.75fr] lg:p-10">
          {/* ESQUERDA */}
          <div>
            {/* PRODUTOS */}
            <div>
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/55">
                1. Escolha o pedido
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {products.map((item) => {
                  const active = selectedProduct === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedProduct(item.id)}
                      className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                        active
                          ? "border-[#00f878] bg-[#10241d] shadow-[0_0_25px_rgba(0,248,120,0.12)]"
                          : "border-purple-500/15 bg-[#0a0610] hover:border-purple-400/40"
                      }`}
                    >
                      <div className="text-sm font-semibold text-white">
                        {item.shortName}
                      </div>

                      <div
                        className={`mt-3 text-2xl font-black ${
                          item.id === "promo"
                            ? "text-[#00f878]"
                            : "text-[#a855f7]"
                        }`}
                      >
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* QUANTIDADE */}
            <div className="mt-10">
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/55">
                2. Quantidade
              </p>

              <div className="flex w-fit items-center gap-7 rounded-2xl border border-purple-500/20 bg-[#0a0610] px-5 py-3">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 text-xl text-white transition hover:border-[#00f878] hover:text-[#00f878]"
                >
                  −
                </button>

                <span className="min-w-[25px] text-center text-xl font-bold text-white">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 text-xl text-white transition hover:border-[#00f878] hover:text-[#00f878]"
                >
                  +
                </button>
              </div>
            </div>

            {/* DADOS */}
            <div className="mt-10">
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/55">
                3. Seus dados
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-purple-500/15 bg-[#09050e] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-[#00f878]/60"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(formatPhone(event.target.value))
                    }
                    placeholder="Telefone (91) 9xxxx-xxxx"
                    className="w-full rounded-xl border border-purple-500/15 bg-[#09050e] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-[#00f878]/60"
                  />

                  <select
                    value={deliveryTime}
                    onChange={(event) =>
                      setDeliveryTime(event.target.value)
                    }
                    className="w-full rounded-xl border border-purple-500/15 bg-[#09050e] px-5 py-4 text-sm text-white outline-none transition focus:border-[#00f878]/60"
                  >
                    {deliveryTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Endereço de entrega (rua, número, bairro)"
                  className="w-full rounded-xl border border-purple-500/15 bg-[#09050e] px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-[#00f878]/60"
                />
              </div>
            </div>
          </div>

          {/* RESUMO */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-purple-500/20 bg-[#09050e] p-6 sm:p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/55">
                Resumo
              </p>

              <h3 className="mt-6 text-xl font-bold text-white">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-white/45">
                {deliveryTime}
              </p>

              <div className="my-6 h-px bg-purple-500/15" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                Total
              </p>

              <p className="mt-2 text-4xl font-black text-[#00f878]">
                R$ {total.toFixed(2).replace(".", ",")}
              </p>

              {/* AVISO */}
              <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4">
                <p className="text-xs leading-5 text-yellow-300/80">
                  Já passou das 10h — seu agendamento vale para a
                  entrega da manhã.
                </p>
              </div>

              {/* BOTÃO */}
              <button
                type="button"
                onClick={sendOrder}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#00f878] px-6 py-5 text-sm font-black uppercase tracking-wide text-[#06100a] shadow-[0_0_30px_rgba(0,248,120,0.18)] transition hover:scale-[1.02] hover:bg-[#22ff8b] active:scale-[0.98]"
              >
                <span className="text-lg">➤</span>
                Salvar pedido e ir pro WhatsApp
              </button>

              <p className="mt-4 text-center text-[11px] leading-5 text-white/30">
                O pedido fica salvo no painel da loja e o resumo
                abre no WhatsApp para confirmação.
              </p>
            </div>
          </div>
        </div>

        {/* ENDEREÇO */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-purple-500/10 bg-white/[0.02] px-5 py-5 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00f878]">
            Onde estamos
          </p>

          <p className="mt-2 text-sm text-white/55">
            Rua Prefeito Laurival Campos Cunha, 86 — Comercial
          </p>

          <p className="mt-1 text-xs text-white/30">
            Entre Frederico Vasconcelos e Jaime Dias
          </p>
        </div>
      </div>
    </section>
  );
}
