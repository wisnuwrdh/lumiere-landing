const problems = [
  {
    id: 1,
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    problem: "Kulit kusam dan lelah",
    problemDesc:
      "Paparan polusi, kurang tidur, dan sinar UV bikin kulit tampak kusam dan tidak bercahaya. Makeup pun tidak menempel sempurna.",
    solution:
      "Lumière Brightening Serum dengan Niacinamide 5% membantu mencerahkan kulit secara bertahap, membuat wajah tampak lebih segar dan bercahaya alami.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z" />
      </svg>
    ),
    problem: "Bekas jerawat membandel",
    problemDesc:
      "Bekas jerawat hitam atau merah sulit hilang meski sudah pakai berbagai produk. Ini bisa menurunkan kepercayaan diri, terutama saat bare face.",
    solution:
      "Kombinasi Niacinamide dan formula anti-inflamasi membantu memudarkan bekas jerawat dan menyamarkan noda hitam secara bertahap.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="32"
        height="32"
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
    problem: "Tekstur kulit tidak merata",
    problemDesc:
      "Kulit terasa kasar, pori-pori tampak besar, dan tekstur wajah tidak rata membuat riasan tidak mulus dan wajah terlihat kurang sehat.",
    solution:
      "Tekstur serum yang ringan dan cepat meresap membantu menghaluskan permukaan kulit, mengecilkan pori-pori, dan mengembalikan tekstur kulit yang sehat.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="relative py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Masalah kulit yang kamu rasakan?
          </p>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Kamu tidak sendiri. Banyak perempuan mengalami hal yang sama — dan
            kami punya solusinya.
          </p>
        </div>

        {/* Problem cards */}
        <div className="flex flex-col gap-8">
          {problems.map((item, idx) => (
            <div
              key={item.id}
              className="group grid md:grid-cols-2 gap-6 md:gap-10 bg-warm-white rounded-2xl p-8 md:p-10 border border-soft-nude/20 hover-lift transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Problem side */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blush-pink-light/30 flex items-center justify-center text-lumiere">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-blush-pink-dark bg-blush-pink-light/30 px-3 py-1 rounded-full">
                      Masalah
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-charcoal-light text-sm md:text-base leading-relaxed">
                    {item.problemDesc}
                  </p>
                </div>
              </div>

              {/* Solution side */}
              <div className="flex gap-5 md:border-l md:border-soft-nude/30 md:pl-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-lumiere/10 flex items-center justify-center text-lumiere">
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
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-lumiere-dark bg-lumiere/10 px-3 py-1 rounded-full">
                      Solusi Lumière
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-2">
                    Solusi tepat untukmu
                  </h3>
                  <p className="text-charcoal-light text-sm md:text-base leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
