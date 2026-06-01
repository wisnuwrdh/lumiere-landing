import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#fff8f5] via-[#fdf3ef] to-[#faf0ee]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blush-pink-light/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-champagne-light/50 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-soft-rose/60 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8 animate-fade-in">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-pink-light/40 border border-blush-pink/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-lumiere" />
              <span className="text-xs md:text-sm font-medium text-charcoal-light tracking-wider uppercase">
                Skincare Premium Indonesia
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-charcoal">
              Cerahkan Kulitmu,{" "}
              <span className="text-lumiere">Percayakan</span> pada{" "}
              <span className="italic">Lumière</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal-light leading-relaxed max-w-lg">
              Lumière Brightening Serum — diformulasikan dengan Niacinamide 5%
              dan tekstur ringan yang cepat meresap. Cocok untuk kulit kusam,
              bekas jerawat, dan tekstur tidak merata.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="https://wa.me/6286798102801"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-lumiere to-lumiere-dark text-white font-semibold text-base shadow-lg shadow-lumiere/20 transition-all duration-300 hover:shadow-xl hover:shadow-lumiere/30"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi via WhatsApp
              </Link>

              <Link
                href="https://instagram.com/lumiere.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-lumiere/30 text-charcoal font-semibold text-base transition-all duration-300 hover:border-lumiere hover:bg-lumiere/5 hover:shadow-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Follow Instagram
              </Link>
            </div>

            {/* Trust badge */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs md:text-sm text-charcoal-light">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-lumiere"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Dermatologically Tested
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-lumiere"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75z"
                    clipRule="evenodd"
                  />
                </svg>
                BPOM Terdaftar
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-lumiere"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Halal Certified
              </span>
            </div>
          </div>

          {/* Right content - Product mockup */}
          <div className="flex justify-center items-center animate-fade-in-delay-1">
            <div className="relative w-full max-w-sm aspect-[3/4] flex items-center justify-center">
              {/* Glow behind bottle */}
              <div className="absolute inset-0 bg-gradient-radial from-blush-pink-light/30 via-transparent to-transparent rounded-full scale-75" />

              {/* Product bottle SVG - elegant representation */}
              <div className="relative w-56 md:w-64 lg:w-72 animate-product-glow">
                <svg
                  viewBox="0 0 200 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-xl"
                  role="img"
                  aria-label="Lumière Brightening Serum Bottle"
                >
                  {/* Bottle body */}
                  <defs>
                    <linearGradient
                      id="bottleGrad"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f0e0c8" />
                      <stop offset="30%" stopColor="#f5ede1" />
                      <stop offset="60%" stopColor="#e8d5c4" />
                      <stop offset="100%" stopColor="#d4bea0" />
                    </linearGradient>
                    <linearGradient
                      id="liquidGrad"
                      x1="0"
                      y1="1"
                      x2="0"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#c99789" />
                      <stop offset="100%" stopColor="#e8cec7" />
                    </linearGradient>
                    <linearGradient
                      id="capGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#e8d5c4" />
                      <stop offset="100%" stopColor="#c99789" />
                    </linearGradient>
                  </defs>

                  {/* Cap */}
                  <rect
                    x="72"
                    y="15"
                    width="56"
                    height="35"
                    rx="6"
                    fill="url(#capGrad)"
                  />
                  <rect
                    x="66"
                    y="12"
                    width="68"
                    height="8"
                    rx="4"
                    fill="#d4bea0"
                  />
                  <rect
                    x="74"
                    y="46"
                    width="52"
                    height="4"
                    rx="2"
                    fill="#d4bea0"
                  />

                  {/* Bottle neck */}
                  <rect
                    x="80"
                    y="50"
                    width="40"
                    height="20"
                    rx="4"
                    fill="url(#bottleGrad)"
                  />

                  {/* Bottle body */}
                  <path
                    d="M70 70 L70 240 Q70 270 100 270 L100 270 Q130 270 130 240 L130 70 Z"
                    fill="url(#bottleGrad)"
                    stroke="#d4bea0"
                    strokeWidth="0.5"
                  />

                  {/* Liquid inside */}
                  <path
                    d="M74 130 L74 238 Q74 266 100 266 L100 266 Q126 266 126 238 L126 130 Z"
                    fill="url(#liquidGrad)"
                    opacity="0.7"
                  />

                  {/* Label */}
                  <rect
                    x="78"
                    y="120"
                    width="44"
                    height="70"
                    rx="4"
                    fill="white"
                    opacity="0.9"
                  />
                  <text
                    x="100"
                    y="142"
                    textAnchor="middle"
                    fill="#c99789"
                    fontSize="10"
                    fontFamily="serif"
                    fontWeight="bold"
                  >
                    LUMIÈRE
                  </text>
                  <text
                    x="100"
                    y="157"
                    textAnchor="middle"
                    fill="#5c5750"
                    fontSize="7"
                    fontFamily="sans-serif"
                  >
                    Brightening
                  </text>
                  <text
                    x="100"
                    y="167"
                    textAnchor="middle"
                    fill="#5c5750"
                    fontSize="7"
                    fontFamily="sans-serif"
                  >
                    Serum
                  </text>
                  <text
                    x="100"
                    y="182"
                    textAnchor="middle"
                    fill="#c99789"
                    fontSize="5"
                    fontFamily="sans-serif"
                  >
                    ★ Niacinamide 5% ★
                  </text>

                  {/* Dropper */}
                  <rect
                    x="95"
                    y="48"
                    width="10"
                    height="8"
                    rx="3"
                    fill="#e8d5c4"
                  />
                  <rect
                    x="97"
                    y="56"
                    width="6"
                    height="16"
                    rx="3"
                    fill="#d4bea0"
                  />

                  {/* Highlight/reflection */}
                  <path
                    d="M82 80 Q84 160 82 240"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                  <path
                    d="M86 90 Q88 150 86 220"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.2"
                  />
                </svg>
              </div>

              {/* Decorative sparkle */}
              <div className="absolute top-12 right-8 w-3 h-3 rounded-full bg-champagne animate-ping opacity-30" />
              <div className="absolute bottom-20 left-6 w-2 h-2 rounded-full bg-blush-pink animate-ping opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  );
}
