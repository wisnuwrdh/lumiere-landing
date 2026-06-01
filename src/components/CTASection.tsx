import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-cream to-[#fdf3ef] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-blush-pink-light/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-champagne-light/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lumiere/10 border border-lumiere/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-lumiere animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-lumiere-dark tracking-wider uppercase">
            Gratis Konsultasi
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 animate-fade-in leading-tight">
          Mau konsultasi dulu?
          <br />
          <span className="text-lumiere">Kami siap membantu!</span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-charcoal-light max-w-2xl mx-auto mb-10 animate-fade-in-delay-1 leading-relaxed">
          Bingung mau mulai dari mana? Atau pengen tanya-tanya soal produk
          sebelum beli? Yuk, chat aja via WhatsApp. Tim kami dengan senang hati
          membantu kamu memilih produk yang tepat untuk kulitmu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Link
            href="https://wa.me/6286798102801"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-lumiere to-lumiere-dark text-white font-semibold text-lg shadow-lg shadow-lumiere/20 transition-all duration-300 hover:shadow-xl hover:shadow-lumiere/30"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat via WhatsApp
          </Link>

          <Link
            href="https://instagram.com/lumiere.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl border-2 border-lumiere/30 text-charcoal font-semibold text-lg transition-all duration-300 hover:border-lumiere hover:bg-lumiere/5 hover:shadow-lg"
          >
            <svg
              width="22"
              height="22"
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
            DM Instagram
          </Link>
        </div>

        {/* Additional trust */}
        <p className="text-xs md:text-sm text-charcoal-light/50 mt-8 animate-fade-in-delay-3">
          Respon cepat dalam 1x24 jam. Senang-senang aja, nggak ada kewajiban
          beli kok!
        </p>
      </div>
    </section>
  );
}
