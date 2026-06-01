export default function BeforeAfter() {
  const results = [
    {
      id: 1,
      caption:
        "Pemakaian rutin 2x sehari selama 4 minggu. Kulit terasa lebih lembap dan cerah!",
      user: "Sarah",
      duration: "4 minggu pemakaian",
    },
    {
      id: 2,
      caption:
        "Bekas jerawat mulai memudar setelah 3 minggu. Tekstur kulit juga lebih halus ✨",
      user: "Maya",
      duration: "3 minggu pemakaian",
    },
    {
      id: 3,
      caption:
        "Kulit kusam berubah jadi lebih glowing alami. Sekarang lebih pede bare face!",
      user: "Dinda",
      duration: "6 minggu pemakaian",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Hasil nyata dari pengguna
          </p>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Bukan klaim semata — ini adalah hasil yang dibagikan oleh pengguna
            setia Lumière. Setiap kulit memiliki perjalanan yang berbeda.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((item, idx) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="bg-warm-white rounded-2xl overflow-hidden border border-soft-nude/20 hover-lift transition-all duration-500">
                {/* Side-by-side Before/After visual placeholders */}
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="aspect-[3/4] bg-gradient-to-b from-soft-nude/40 to-cream-dark relative flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c27e7e"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-auto mb-2 opacity-40"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="5" />
                        <path d="M3 21a9 9 0 0118 0" />
                      </svg>
                      <span className="text-xs font-medium text-charcoal-light/60 uppercase tracking-wider">
                        Before
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-blush-pink-dark/20 text-[10px] text-blush-pink-dark">
                      Sebelum
                    </div>
                  </div>

                  {/* After */}
                  <div className="aspect-[3/4] bg-gradient-to-b from-cream-dark/30 to-lumiere-light/30 relative flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-lumiere/15 flex items-center justify-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#c99789"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 8a6 6 0 0112 0c0 7 4 9 4 9H2s4-2 4-9" />
                          <path d="M9.5 17.5c.5.5 1.5 1.5 2.5 1.5s2-1 2.5-1.5" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-lumiere/80 uppercase tracking-wider">
                        After
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-lumiere/20 text-[10px] text-lumiere">
                      Sesudah
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-charcoal leading-relaxed italic mb-3">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-charcoal">
                      — {item.user}
                    </span>
                    <span className="text-xs text-charcoal-light/60">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-10">
          <p className="text-xs md:text-sm text-charcoal-light/60 max-w-lg mx-auto">
            *Hasil setiap individu dapat berbeda tergantung kondisi kulit dan
            konsistensi pemakaian. Gambar di atas adalah ilustrasi untuk
            menunjukkan konsep before-after.
          </p>
        </div>
      </div>
    </section>
  );
}
