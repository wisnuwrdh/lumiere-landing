import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-heading text-2xl text-cream tracking-wide"
            >
              LUMIÈRE
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
              Skincare premium Indonesia yang diformulasikan untuk membantu
              kamu mendapatkan kulit cerah, sehat, dan bercahaya secara alami.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-cream mb-4">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-sm text-cream/60 hover:text-blush-pink-light transition-colors duration-200"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-sm text-cream/60 hover:text-blush-pink-light transition-colors duration-200"
                >
                  Manfaat
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-cream/60 hover:text-blush-pink-light transition-colors duration-200"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-cream/60 hover:text-blush-pink-light transition-colors duration-200"
                >
                  Konsultasi
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg text-cream mb-4">Ikuti Kami</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://instagram.com/lumiere.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-blush-pink-light transition-colors duration-200"
                >
                  <svg
                    width="16"
                    height="16"
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
                  @lumiere.id
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/6286798102801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-blush-pink-light transition-colors duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  0867 9810 2801
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {currentYear} Lumière. All rights reserved. Brand ini
            sepenuhnya fiktif dan dibuat untuk keperluan demo portfolio.
          </p>
          <p className="text-xs text-cream/30">
            Made with care for Indonesia&apos;s skincare enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}
