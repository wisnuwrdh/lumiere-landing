const benefits = [
  {
    title: "Tekstur Ringan",
    desc: "Formula water-based yang terasa ringan di kulit. Tidak lengket dan nyaman dipakai sehari-hari, bahkan untuk kulit berminyak.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Cepat Meresap",
    desc: "Teknologi fast-absorbing membuat serum meresap sempurna dalam hitungan detik. Tidak menunggu lama sebelum lanjut ke step skincare berikutnya.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Niacinamide Enriched",
    desc: "Mengandung Niacinamide 5% yang dikenal sebagai bahan aktif multi-manfaat: mencerahkan, melembapkan, dan memperbaiki skin barrier.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M14 8v4" />
        <path d="M12 10h4" />
      </svg>
    ),
  },
  {
    title: "Dermatologically Tested",
    desc: "Telah diuji secara dermatologis dan aman untuk semua jenis kulit, termasuk kulit sensitif. Bebas dari bahan iritatif dan pewangi buatan.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 109.95 9" />
      </svg>
    ),
  },
  {
    title: "Non-Sticky Finish",
    desc: "Tidak meninggalkan rasa lengket setelah pemakaian. Kulit terasa lembap, halus, dan siap untuk makeup atau sunscreen.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 8a6 6 0 0112 0c0 7 4 9 4 9H2s4-2 4-9" />
        <path d="M9.5 17.5c.5.5 1.5 1.5 2.5 1.5s2-1 2.5-1.5" />
      </svg>
    ),
  },
  {
    title: "Hasil Terlihat dalam 2 Minggu",
    desc: "Dengan pemakaian rutin 2x sehari, perubahan tekstur dan kecerahan kulit mulai terlihat dalam 14 hari. Tapi setiap kulit hasilnya bisa berbeda.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="relative py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Kenapa Lumière?
          </p>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Setiap detail diformulasikan dengan cinta — untuk hasil yang kamu
            rasakan sendiri.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group bg-cream rounded-2xl p-8 border border-soft-nude/20 hover-lift transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blush-pink-light/40 to-lumiere/10 flex items-center justify-center text-lumiere mb-5 group-hover:scale-105 transition-transform duration-300">
                {benefit.icon}
              </div>

              <h3 className="font-heading text-xl text-charcoal mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
