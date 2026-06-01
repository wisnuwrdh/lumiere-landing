const testimonials = [
  {
    name: "Aulia Rahman",
    age: 22,
    initial: "AR",
    problem: "Kulit kusam dan pori-pori besar",
    review:
      "Awalnya ragu karena kulitku termasuk sensitif. Tapi setelah 2 minggu pakai Lumière, alhamdulillah kulit jadi lebih cerah dan pori-pori keliatan mengecil. Teksturnya ringan banget, nggak bikin breakout. Udah repeat order 3 kali!",
    rating: 5,
  },
  {
    name: "Nadia Putri",
    age: 24,
    initial: "NP",
    problem: "Bekas jerawat hitam",
    review:
      "Bekas jerawat yang udah menetap berbulan-bulan mulai memudar setelah rutin pakai serum ini. Yang paling kusuka tuh baunya subtle banget dan nggak lengket. Cocok banget buat dipakai sebelum tidur. Recommended banget buat yang struggle sama bekas jerawat!",
    rating: 5,
  },
  {
    name: "Bella Safira",
    age: 20,
    initial: "BS",
    problem: "Tekstur kulit tidak rata",
    review:
      "Kulitku dulu suka terasa kasar dan teksturnya nggak merata. Udah coba banyak produk tapi Lumière yang paling kerasa hasilnya. Kulit jadi lebih halus dan lembap. Bonusnya, makeup jadi lebih menempel dan nggak crack!",
    rating: 5,
  },
  {
    name: "Salsabila Kirana",
    age: 23,
    initial: "SK",
    problem: "Kulit lelah dan kurang tidur",
    review:
      "Sebagai anak kuliahan yang sering begadang, kulit pasti kelihatan kusam. Tapi sejak pakai Lumière, setidaknya kulit keliatan lebih segar meski lagi kurang tidur. Serum ini kayak 'saving grace' buat skincare routine simpel aku.",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} dari 5 bintang`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={star <= rating ? "#dba5a5" : "#e8d5c4"}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Apa kata mereka?
          </p>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Cerita nyata dari pengguna Lumière yang telah merasakan perubahan
            pada kulit mereka.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream rounded-2xl p-6 md:p-8 border border-soft-nude/20 hover-lift transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Top row: avatar + rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush-pink-light to-lumiere/20 flex items-center justify-center text-sm font-semibold text-lumiere">
                    {item.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{item.name}</p>
                    <p className="text-xs text-charcoal-light/70">
                      {item.age} tahun — {item.problem}
                    </p>
                  </div>
                </div>
                <StarRating rating={item.rating} />
              </div>

              {/* Review */}
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed">
                &ldquo;{item.review}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
