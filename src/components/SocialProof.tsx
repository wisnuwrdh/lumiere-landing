export default function SocialProof() {
  const stats = [
    {
      value: "10.000+",
      label: "Pelanggan Puas",
      description: "Telah menggunakan Lumière secara rutin",
    },
    {
      value: "4.9/5",
      label: "Rating Rata-rata",
      description: "Dari ribuan ulasan di seluruh Indonesia",
    },
    {
      value: "92%",
      label: "Kulit Lebih Lembap",
      description: "Pengguna merasakan perubahan dalam 2 minggu",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <p className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Dipercaya oleh ribuan wanita Indonesia
          </p>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Lumière telah membantu banyak perempuan mendapatkan kulit yang
            lebih cerah, lembap, dan sehat secara alami.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-cream to-cream-dark/50 rounded-2xl p-8 md:p-10 text-center border border-soft-nude/30 hover-lift transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full bg-gradient-to-r from-blush-pink/40 to-lumiere/40" />

              <div className="relative">
                <p className="font-heading text-4xl md:text-5xl lg:text-6xl text-lumiere mb-2">
                  {stat.value}
                </p>
                <p className="font-semibold text-charcoal text-lg mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-blush-pink-light/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
