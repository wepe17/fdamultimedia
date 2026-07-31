/* ================================================================
   FDA MULTIMEDIA — Interactions
   i18n · reveal · GSAP · counters · faq · equipment · gallery · cursor
   ================================================================ */

/* ─── Loading screen ─────────────────────────────────────────── */
(function loader() {
  const bar = document.getElementById('loader-bar');
  const el = document.getElementById('loader');
  let p = 0;
  const t = setInterval(() => {
    p += 10 + Math.random() * 25;
    if (p >= 100) { p = 100; clearInterval(t); }
    bar.style.width = p + '%';
    if (p === 100) {
      setTimeout(() => el.classList.add('done'), 300);
      setTimeout(() => el.remove(), 1200);
    }
  }, 90);
})();

/* ─── i18n dictionary ────────────────────────────────────────── */
const I18N = {
  en: {
    'nav.about': 'About', 'nav.services': 'Services', 'nav.equipment': 'Equipment',
    'nav.gallery': 'Gallery', 'nav.reviews': 'Reviews', 'nav.contact': 'Contact',
    'nav.cta': 'Book WhatsApp',

    'hero.tagpill': 'Premium Rental',
    'hero.title.a': 'Trusted Multimedia',
    'hero.title.b': 'Rental Partner in',
    'hero.title.c': 'Malang.',
    'hero.sub': 'Professional rental solutions for projectors, sound systems, HT, DSLR cameras, LED TVs, screens, multimedia equipment and full event support.',
    'hero.cta1': 'Book via WhatsApp',
    'hero.cta2': 'See Equipment',
    'hero.card1': 'Rated across all local searches',
    'hero.card2': 'Verified customer feedback',
    'hero.card3.k': 'Fast Response', 'hero.card3.v': 'Reply within minutes on WhatsApp',
    'hero.card4.k': 'Trusted Partner', 'hero.card4.v': 'Schools · Corporations · Government',
    'hero.scroll': 'Scroll to explore',

    'trust.g': 'Google Rating', 'trust.rev': 'Reviews', 'trust.evt': 'Successful Events',
    'trust.eq.k': 'Professional', 'trust.eq.v': 'Equipment',
    'trust.fr.k': 'Fast Response', 'trust.fr.v': 'Reply in minutes',
    'trust.op.k': 'Open Everyday', 'trust.op.v': 'Mon – Sun · 08:00 – 22:00',

    'about.eyebrow': 'About FDA',
    'about.title': "Malang's most trusted multimedia rental company.",
    'about.p': "FDA Multimedia has become one of Malang's most trusted multimedia rental providers — delivering high-quality equipment, fast-response service, competitive pricing, and professional event support across schools, corporations, weddings, and government events.",
    'about.s1': 'Years of experience', 'about.s2': 'Successful events',
    'about.s3': 'Verified reviews', 'about.s4': 'Google rating',
    'about.badge.n': '10+', 'about.badge.t': 'Years serving Malang',

    'svc.eyebrow': 'Our Services',
    'svc.title': 'Complete multimedia rental, one professional partner.',
    'svc.p': 'From single-projector classroom setups to full-scale conference production — every category is professionally maintained, tested before delivery, and backed by our on-site technicians.',
    'svc.1.t': 'Projector Rental', 'svc.1.d': 'Epson, BenQ, Sony — 3000 to 8000 lumens for any venue size.',
    'svc.2.t': 'HDMI Converter',  'svc.2.d': 'VGA · HDMI · Display Port · USB-C — every laptop connects cleanly.',
    'svc.3.t': 'Sound System',    'svc.3.d': 'Portable to line-array systems for rooms of 30 to 3,000 people.',
    'svc.4.t': 'Wireless Microphone', 'svc.4.d': 'Handheld & lavalier UHF sets — clean audio, zero dropouts.',
    'svc.5.t': 'Audio Mixer',     'svc.5.d': 'Yamaha & Behringer digital mixers, 6 to 32 channels.',
    'svc.6.t': 'LED TV Rental',   'svc.6.d': '43" · 55" · 65" · 75" — 4K displays with roll-in stands.',
    'svc.7.t': 'Projection Screen', 'svc.7.d': '70" tripod to 200" motorised — front & rear projection ready.',
    'svc.8.t': 'Walkie Talkie (HT)', 'svc.8.d': 'Baofeng, Motorola & Icom sets for event crew coordination.',
    'svc.9.t': 'DSLR Camera',     'svc.9.d': 'Canon & Nikon bodies with kit + prime lens options.',
    'svc.10.t': 'Laser Pointer',  'svc.10.d': 'Logitech Spotlight & wireless presenters with USB receiver.',
    'svc.11.t': 'Technical Operator', 'svc.11.d': 'Certified crew on-site — setup, run, tear-down handled.',
    'svc.12.t': 'Full Event Multimedia Support',
    'svc.12.d': 'Turnkey: consultation → equipment → setup → operation → tear-down.',

    'eq.eyebrow': 'Featured Equipment',
    'eq.title': 'Professional-grade. Rigorously maintained.',
    'eq.p': 'Explore our featured inventory across six categories — every unit tested before dispatch, delivered with cables, and covered by our on-call support line.',
    'eq.t1': 'Projectors', 'eq.t2': 'Sound', 'eq.t3': 'Mixer', 'eq.t4': 'HT', 'eq.t5': 'TV Display', 'eq.t6': 'Converter',
    'eq.avail': 'In Stock · Ready to Deliver',
    'eq.spec1': 'Brightness', 'eq.spec2': 'Resolution', 'eq.spec3': 'Contrast',
    'eq.cta1': 'Check Availability', 'eq.cta2': 'Full Catalog',

    'why.eyebrow': 'Why Choose FDA',
    'why.title': 'Eight reasons our clients keep coming back.',
    'why.p': 'We are not just a rental shop. We are your multimedia production partner — invested in every event running flawlessly, from the projector\'s first light to the mic\'s last cue.',
    'why.1.t': 'Professional Equipment', 'why.1.d': 'Only trusted brands: Epson, Sony, Yamaha, Shure, Canon, Motorola.',
    'why.2.t': 'Fast Response', 'why.2.d': 'WhatsApp reply within minutes. Emergency same-day delivery.',
    'why.3.t': 'Affordable Pricing', 'why.3.d': 'Fair, transparent quotes. No hidden fees, no upsells at delivery.',
    'why.4.t': 'Well Maintained', 'why.4.d': 'Every unit inspected, cleaned, and tested before it leaves our shop.',
    'why.5.t': 'Professional Technicians', 'why.5.d': 'Certified operators handle setup and on-site troubleshooting for you.',
    'why.6.t': 'Flexible Rental Duration', 'why.6.d': 'Half-day, full-day, multi-day, weekly — priced to your schedule.',
    'why.7.t': 'Complete Solutions', 'why.7.d': 'Projector to sound to HT — one call handles the whole event stack.',
    'why.8.t': '5-Star Reviews', 'why.8.d': '276 verified Google reviews averaging 5.0. Consistency our clients trust.',

    'rev.eyebrow': 'Client Reviews',
    'rev.title': 'What our customers say on Google.',

    'gal.eyebrow': 'Event Gallery',
    'gal.title': 'A thousand events. One quality standard.',
    'gal.p': "Highlights from conferences, weddings, seminars, school ceremonies, and corporate events we've powered across Malang and East Java.",
    'gal.f1': 'All', 'gal.f2': 'Conference', 'gal.f3': 'Wedding', 'gal.f4': 'School',
    'gal.f5': 'Corporate', 'gal.f6': 'Church', 'gal.f7': 'Government',

    'cl.eyebrow': 'Trusted By',
    'cl.title': 'Schools, corporations, government, communities.',
    'cl.p': 'Over a decade of consistent service has earned us long-term partnerships with institutions across Malang Raya.',
    'cl.l1': 'Universities', 'cl.l2': 'Schools', 'cl.l3': 'Corporations',
    'cl.l4': 'Government', 'cl.l5': 'Wedding Organizers', 'cl.l6': 'Churches', 'cl.l7': 'Communities',

    'pr.eyebrow': 'Work Process',
    'pr.title': 'Five simple steps to a successful event.',
    'pr.p': 'Our workflow removes the friction from event production. You focus on your audience — we handle the technology.',
    'pr.1.t': 'Choose Equipment', 'pr.1.d': 'Browse the catalog or tell us the event type — we suggest the right kit.',
    'pr.2.t': 'Contact WhatsApp', 'pr.2.d': 'Send your date, venue, and requirements. We reply within minutes.',
    'pr.3.t': 'Receive Quotation', 'pr.3.d': 'Transparent quote — no hidden fees. Reserve with a friendly deposit.',
    'pr.4.t': 'Delivery & Setup', 'pr.4.d': 'Our team delivers, installs, tests, and hands over on schedule.',
    'pr.5.t': 'Successful Event', 'pr.5.d': 'On-call support throughout. Pickup after your event ends.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Everything you need to know before you book.',
    'faq.p': 'Still have questions? Reach us on WhatsApp — our team responds within minutes, every day.',
    'faq.cta': 'Chat with our team',

    'cta.eyebrow': 'Ready When You Are',
    'cta.h1': 'Need multimedia equipment',
    'cta.h2': 'for your event?',
    'cta.p': "Send us the date, venue, and your requirements. We'll build the perfect kit — and back it with our team, on-site, every step of the way.",
    'cta.b1': 'Book Now on WhatsApp',
    'cta.b2': 'Call 0897-6440-000',

    'ft.desc': "Malang's most trusted multimedia rental partner. Projectors, sound systems, HT, DSLR, LED TV and complete event support — professionally maintained and delivered on time.",
    'ft.h1': 'Services', 'ft.h2': 'Quick Links', 'ft.h3': 'Contact',
    'ft.s1': 'Projector Rental', 'ft.s2': 'Sound System', 'ft.s3': 'Walkie Talkie',
    'ft.s4': 'DSLR Camera', 'ft.s5': 'LED TV', 'ft.s6': 'Full Event Support',
    'ft.q1': 'About', 'ft.q2': 'Equipment', 'ft.q3': 'Reviews', 'ft.q4': 'Gallery', 'ft.q5': 'FAQ',
    'ft.hours': 'Mon – Sun · 08:00 – 22:00',
    'ft.copyr': 'All rights reserved.',
    'ft.priv': 'Privacy', 'ft.terms': 'Terms', 'ft.sitemap': 'Sitemap',

    'wa.k': 'Chat on WhatsApp', 'wa.v': 'Fast reply · 08:00–22:00',
  },
  id: {
    'nav.about': 'Tentang', 'nav.services': 'Layanan', 'nav.equipment': 'Peralatan',
    'nav.gallery': 'Galeri', 'nav.reviews': 'Ulasan', 'nav.contact': 'Kontak',
    'nav.cta': 'Pesan WhatsApp',

    'hero.tagpill': 'Rental Premium',
    'hero.title.a': 'Partner Rental Multimedia',
    'hero.title.b': 'Terpercaya di',
    'hero.title.c': 'Malang.',
    'hero.sub': 'Solusi rental profesional untuk proyektor, sound system, HT, kamera DSLR, LED TV, layar, peralatan multimedia dan dukungan event lengkap.',
    'hero.cta1': 'Pesan via WhatsApp',
    'hero.cta2': 'Lihat Peralatan',
    'hero.card1': 'Rating tertinggi di pencarian lokal',
    'hero.card2': 'Ulasan pelanggan terverifikasi',
    'hero.card3.k': 'Respons Cepat', 'hero.card3.v': 'Balas dalam hitungan menit di WhatsApp',
    'hero.card4.k': 'Partner Terpercaya', 'hero.card4.v': 'Sekolah · Korporasi · Pemerintah',
    'hero.scroll': 'Scroll untuk menjelajahi',

    'trust.g': 'Rating Google', 'trust.rev': 'Ulasan', 'trust.evt': 'Event Sukses',
    'trust.eq.k': 'Peralatan', 'trust.eq.v': 'Profesional',
    'trust.fr.k': 'Respons Cepat', 'trust.fr.v': 'Balas dalam menit',
    'trust.op.k': 'Buka Setiap Hari', 'trust.op.v': 'Sen – Min · 08:00 – 22:00',

    'about.eyebrow': 'Tentang FDA',
    'about.title': 'Rental multimedia paling terpercaya di Malang.',
    'about.p': 'FDA Multimedia telah menjadi salah satu penyedia rental multimedia paling terpercaya di Malang — menyajikan peralatan berkualitas tinggi, respons cepat, harga bersaing, dan dukungan event profesional untuk sekolah, perusahaan, pernikahan, dan acara pemerintah.',
    'about.s1': 'Tahun pengalaman', 'about.s2': 'Event sukses',
    'about.s3': 'Ulasan terverifikasi', 'about.s4': 'Rating Google',
    'about.badge.n': '10+', 'about.badge.t': 'Tahun melayani Malang',

    'svc.eyebrow': 'Layanan Kami',
    'svc.title': 'Rental multimedia lengkap, satu partner profesional.',
    'svc.p': 'Dari setup proyektor kelas kecil hingga produksi konferensi skala besar — setiap kategori dirawat profesional, diuji sebelum pengiriman, dan didukung teknisi di lokasi.',
    'svc.1.t': 'Rental Proyektor', 'svc.1.d': 'Epson, BenQ, Sony — 3000 hingga 8000 lumens untuk ruangan segala ukuran.',
    'svc.2.t': 'HDMI Converter', 'svc.2.d': 'VGA · HDMI · Display Port · USB-C — semua laptop terkoneksi lancar.',
    'svc.3.t': 'Sound System', 'svc.3.d': 'Sistem portable hingga line-array untuk 30 sampai 3.000 orang.',
    'svc.4.t': 'Microphone Wireless', 'svc.4.d': 'Set handheld & lavalier UHF — audio jernih, tanpa putus.',
    'svc.5.t': 'Mixer Audio', 'svc.5.d': 'Mixer digital Yamaha & Behringer, 6 hingga 32 channel.',
    'svc.6.t': 'Rental LED TV', 'svc.6.d': '43" · 55" · 65" · 75" — display 4K dengan stand roda.',
    'svc.7.t': 'Layar Proyeksi', 'svc.7.d': 'Tripod 70" hingga motorised 200" — front & rear projection.',
    'svc.8.t': 'Handy Talky (HT)', 'svc.8.d': 'Set Baofeng, Motorola & Icom untuk koordinasi crew event.',
    'svc.9.t': 'Kamera DSLR', 'svc.9.d': 'Body Canon & Nikon dengan pilihan lensa kit + prime.',
    'svc.10.t': 'Laser Pointer', 'svc.10.d': 'Logitech Spotlight & wireless presenter dengan USB receiver.',
    'svc.11.t': 'Operator Teknisi', 'svc.11.d': 'Crew tersertifikasi di lokasi — setup, run, tear-down.',
    'svc.12.t': 'Dukungan Multimedia Event Lengkap',
    'svc.12.d': 'Turnkey: konsultasi → peralatan → setup → operasional → bongkar.',

    'eq.eyebrow': 'Peralatan Unggulan',
    'eq.title': 'Kelas profesional. Dirawat ketat.',
    'eq.p': 'Jelajahi inventaris unggulan kami di enam kategori — setiap unit diuji sebelum pengiriman, dikirim lengkap dengan kabel, dan didukung layanan panggilan siaga.',
    'eq.t1': 'Proyektor', 'eq.t2': 'Sound', 'eq.t3': 'Mixer', 'eq.t4': 'HT', 'eq.t5': 'TV Display', 'eq.t6': 'Converter',
    'eq.avail': 'Tersedia · Siap Kirim',
    'eq.spec1': 'Kecerahan', 'eq.spec2': 'Resolusi', 'eq.spec3': 'Kontras',
    'eq.cta1': 'Cek Ketersediaan', 'eq.cta2': 'Katalog Lengkap',

    'why.eyebrow': 'Kenapa Pilih FDA',
    'why.title': 'Delapan alasan klien selalu kembali.',
    'why.p': 'Kami bukan sekadar toko rental. Kami adalah partner produksi multimedia Anda — berinvestasi agar setiap event berjalan sempurna, dari lampu proyektor pertama hingga cue mic terakhir.',
    'why.1.t': 'Peralatan Profesional', 'why.1.d': 'Hanya brand terpercaya: Epson, Sony, Yamaha, Shure, Canon, Motorola.',
    'why.2.t': 'Respons Cepat', 'why.2.d': 'Balas WhatsApp dalam hitungan menit. Pengiriman darurat sehari.',
    'why.3.t': 'Harga Terjangkau', 'why.3.d': 'Penawaran adil dan transparan. Tanpa biaya tersembunyi.',
    'why.4.t': 'Terawat dengan Baik', 'why.4.d': 'Setiap unit diperiksa, dibersihkan, dan diuji sebelum keluar workshop.',
    'why.5.t': 'Teknisi Profesional', 'why.5.d': 'Operator tersertifikasi menangani setup dan troubleshooting di lokasi.',
    'why.6.t': 'Durasi Sewa Fleksibel', 'why.6.d': 'Setengah hari, sehari, beberapa hari, mingguan — sesuai jadwal Anda.',
    'why.7.t': 'Solusi Lengkap', 'why.7.d': 'Proyektor, sound, HT — satu kontak menangani semua stack event.',
    'why.8.t': 'Ulasan Bintang 5', 'why.8.d': '276 ulasan Google terverifikasi dengan rata-rata 5.0.',

    'rev.eyebrow': 'Ulasan Klien',
    'rev.title': 'Apa kata pelanggan kami di Google.',

    'gal.eyebrow': 'Galeri Event',
    'gal.title': 'Ribuan event. Satu standar kualitas.',
    'gal.p': 'Sorotan dari konferensi, pernikahan, seminar, upacara sekolah, dan event korporat yang kami dukung di Malang dan Jawa Timur.',
    'gal.f1': 'Semua', 'gal.f2': 'Konferensi', 'gal.f3': 'Pernikahan', 'gal.f4': 'Sekolah',
    'gal.f5': 'Korporat', 'gal.f6': 'Gereja', 'gal.f7': 'Pemerintah',

    'cl.eyebrow': 'Dipercaya Oleh',
    'cl.title': 'Sekolah, korporasi, pemerintah, komunitas.',
    'cl.p': 'Lebih dari satu dekade layanan konsisten telah menghadirkan kami kemitraan jangka panjang dengan institusi di seluruh Malang Raya.',
    'cl.l1': 'Universitas', 'cl.l2': 'Sekolah', 'cl.l3': 'Korporasi',
    'cl.l4': 'Pemerintah', 'cl.l5': 'Wedding Organizer', 'cl.l6': 'Gereja', 'cl.l7': 'Komunitas',

    'pr.eyebrow': 'Alur Kerja',
    'pr.title': 'Lima langkah sederhana menuju event sukses.',
    'pr.p': 'Alur kerja kami menghilangkan friksi produksi event. Anda fokus pada audiens — kami tangani teknologinya.',
    'pr.1.t': 'Pilih Peralatan', 'pr.1.d': 'Jelajahi katalog atau sampaikan jenis event — kami sarankan kit yang pas.',
    'pr.2.t': 'Hubungi WhatsApp', 'pr.2.d': 'Kirim tanggal, lokasi, dan kebutuhan Anda. Kami balas dalam menit.',
    'pr.3.t': 'Terima Penawaran', 'pr.3.d': 'Penawaran transparan — tanpa biaya tersembunyi. DP ramah untuk booking.',
    'pr.4.t': 'Pengiriman & Setup', 'pr.4.d': 'Tim kami mengirim, memasang, menguji, dan menyerahkan tepat waktu.',
    'pr.5.t': 'Event Sukses', 'pr.5.d': 'Dukungan siaga sepanjang acara. Pickup setelah event selesai.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Semua yang perlu Anda ketahui sebelum booking.',
    'faq.p': 'Masih ada pertanyaan? Hubungi kami di WhatsApp — tim kami merespons dalam hitungan menit, setiap hari.',
    'faq.cta': 'Chat dengan tim kami',

    'cta.eyebrow': 'Siap Kapan Anda Siap',
    'cta.h1': 'Butuh peralatan multimedia',
    'cta.h2': 'untuk event Anda?',
    'cta.p': 'Kirim tanggal, lokasi, dan kebutuhan Anda. Kami akan menyiapkan kit yang tepat — didukung tim kami di lokasi, di setiap langkah.',
    'cta.b1': 'Pesan Sekarang di WhatsApp',
    'cta.b2': 'Telepon 0897-6440-000',

    'ft.desc': 'Partner rental multimedia paling terpercaya di Malang. Proyektor, sound system, HT, DSLR, LED TV dan dukungan event lengkap — dirawat profesional dan dikirim tepat waktu.',
    'ft.h1': 'Layanan', 'ft.h2': 'Tautan Cepat', 'ft.h3': 'Kontak',
    'ft.s1': 'Rental Proyektor', 'ft.s2': 'Sound System', 'ft.s3': 'Handy Talky',
    'ft.s4': 'Kamera DSLR', 'ft.s5': 'LED TV', 'ft.s6': 'Dukungan Event Lengkap',
    'ft.q1': 'Tentang', 'ft.q2': 'Peralatan', 'ft.q3': 'Ulasan', 'ft.q4': 'Galeri', 'ft.q5': 'FAQ',
    'ft.hours': 'Sen – Min · 08:00 – 22:00',
    'ft.copyr': 'Semua hak dilindungi.',
    'ft.priv': 'Privasi', 'ft.terms': 'Syarat', 'ft.sitemap': 'Peta Situs',

    'wa.k': 'Chat di WhatsApp', 'wa.v': 'Balas cepat · 08:00–22:00',
  }
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (I18N[lang][k] != null) el.textContent = I18N[lang][k];
  });
  document.querySelectorAll('.nav-lang button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  localStorage.setItem('fda-lang', lang);
  // rebuild dynamic content that respects language
  buildGallery();
  buildFAQ();
  buildClients();
  setEquipment(currentEq);
}
document.querySelectorAll('.nav-lang button').forEach(b => {
  b.addEventListener('click', () => applyLang(b.dataset.lang));
});

/* ─── Nav scroll + section theme detection ───────────────────── */
const nav = document.getElementById('nav');
const progressBar = document.getElementById('progressBar');
const lightSections = ['about', 'services', 'reviews', 'gallery', 'clients', 'faq'];
function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 40);
  // detect what section is currently intersecting nav
  const navBottom = 80;
  let onLight = false;
  document.querySelectorAll('section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= navBottom && rect.bottom >= navBottom) {
      if (sec.classList.contains('about') || sec.classList.contains('services') ||
          sec.classList.contains('reviews') || sec.classList.contains('gallery') ||
          sec.classList.contains('clients') || sec.classList.contains('faq') ||
          sec.classList.contains('why')) {
        onLight = true;
      }
    }
  });
  nav.classList.toggle('on-light', onLight);
  // progress bar
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (y / h * 100) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ─── Reveal on scroll (IntersectionObserver) ────────────────── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      // trigger counters when trust section enters
      if (e.target.querySelector && e.target.querySelectorAll) {
        e.target.querySelectorAll('.counter').forEach(startCounter);
      }
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(el => io.observe(el));

/* ─── Counter animation ──────────────────────────────────────── */
function startCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const target = +el.dataset.target;
  const dur = 1400;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(target * eased).toLocaleString();
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(step);
}

/* ─── Mouse follower ─────────────────────────────────────────── */
(function cursor() {
  const f = document.getElementById('mouseFollower');
  const d = document.getElementById('mouseDot');
  if (!f || matchMedia('(hover: none)').matches) return;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let fx = mx, fy = my;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    d.style.left = mx + 'px'; d.style.top = my + 'px';
  });
  (function loop() {
    fx += (mx - fx) * 0.15;
    fy += (my - fy) * 0.15;
    f.style.left = fx + 'px';
    f.style.top = fy + 'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a, button, .svc-card, .why-card, .hero-card, .review-card, .masonry-item, .faq-q').forEach(el => {
    el.addEventListener('mouseenter', () => f.classList.add('hover'));
    el.addEventListener('mouseleave', () => f.classList.remove('hover'));
  });
})();

/* ─── Service card radial hover glow ─────────────────────────── */
document.querySelectorAll('.svc-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

/* ─── Hero image parallax ────────────────────────────────────── */
const heroImg = document.getElementById('heroImg');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroImg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
    }
  }, { passive: true });
}

/* ─── Equipment tabs ─────────────────────────────────────────── */
const EQUIPMENT = {
  projector: {
    title: 'Epson EB-FH52 · 4000 Lumen Full HD',
    title_id: 'Epson EB-FH52 · Full HD 4000 Lumen',
    desc: 'A conference-grade full HD projector delivering razor-sharp 4000-lumen output. Ideal for auditoriums, wedding halls, and corporate events up to 300 seats.',
    desc_id: 'Proyektor Full HD kelas konferensi dengan output 4000 lumen yang tajam. Ideal untuk auditorium, gedung pernikahan, dan event korporat hingga 300 kursi.',
    specs: [['Brightness/Kecerahan','4,000 lm'],['Resolution/Resolusi','1920 × 1080'],['Contrast/Kontras','16,000 : 1']],
    svg: `<svg viewBox="0 0 400 240" width="100%"><defs><linearGradient id="pjg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3A55"/><stop offset="1" stop-color="#0F1826"/></linearGradient></defs><g><rect x="80" y="60" width="240" height="110" rx="14" fill="url(#pjg)" stroke="#3B82F6" stroke-opacity=".3"/><circle cx="120" cy="115" r="34" fill="#0A1420" stroke="#60A5FA" stroke-width="1.5"/><circle cx="120" cy="115" r="22" fill="#0A1420" stroke="#3B82F6" stroke-opacity=".5"/><circle cx="120" cy="115" r="12" fill="#3B82F6" opacity=".8"/><circle cx="120" cy="115" r="5" fill="#93C5FD"/><rect x="180" y="90" width="12" height="12" rx="2" fill="#22C55E"/><rect x="200" y="90" width="12" height="12" rx="2" fill="#FBBF24" opacity=".5"/><rect x="180" y="120" width="120" height="4" rx="2" fill="#3B82F6" opacity=".3"/><rect x="180" y="132" width="80" height="4" rx="2" fill="#3B82F6" opacity=".2"/><rect x="180" y="144" width="100" height="4" rx="2" fill="#3B82F6" opacity=".2"/><text x="290" y="160" text-anchor="end" fill="#60A5FA" font-family="SF Pro Display, sans-serif" font-size="9" letter-spacing="2">EPSON</text></g></svg>`
  },
  sound: {
    title: 'Yamaha DBR15 · 1000W Powered PA',
    title_id: 'Yamaha DBR15 · PA Aktif 1000W',
    desc: 'A 15-inch two-way powered loudspeaker delivering 1000W of clean, tight punch. Perfect for weddings, seminars, and mid-scale corporate events.',
    desc_id: 'Speaker aktif 15 inch dua-arah dengan output 1000W bersih dan padat. Sempurna untuk pernikahan, seminar, dan event korporat skala menengah.',
    specs: [['Power/Daya','1,000 W'],['Driver','15"'],['SPL','132 dB']],
    svg: `<svg viewBox="0 0 400 240" width="100%"><defs><linearGradient id="spg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3A55"/><stop offset="1" stop-color="#0F1826"/></linearGradient></defs><g><path d="M140 30 L260 30 L280 200 L120 200 Z" fill="url(#spg)" stroke="#3B82F6" stroke-opacity=".3"/><circle cx="200" cy="130" r="55" fill="#0A1420" stroke="#22344F"/><circle cx="200" cy="130" r="42" fill="#0F1826" stroke="#3B82F6" stroke-opacity=".4"/><circle cx="200" cy="130" r="24" fill="#0A1420"/><circle cx="200" cy="130" r="8" fill="#3B82F6"/><circle cx="200" cy="65" r="14" fill="#0A1420" stroke="#3B82F6" stroke-opacity=".4"/><circle cx="200" cy="65" r="5" fill="#60A5FA"/><rect x="150" y="180" width="100" height="3" fill="#3B82F6" opacity=".4"/></g></svg>`
  },
  mixer: {
    title: 'Yamaha MG16XU · 16-Channel Analog Mixer',
    title_id: 'Yamaha MG16XU · Mixer Analog 16 Channel',
    desc: 'A 16-channel mixing console with premium D-PRE preamps and 24 built-in SPX effects. The workhorse for live events and hybrid conferences.',
    desc_id: 'Console mixing 16 channel dengan D-PRE preamp premium dan 24 efek SPX bawaan. Andalan untuk event live dan konferensi hybrid.',
    specs: [['Channels/Channel','16'],['Effects/Efek','24 SPX'],['USB','2-in/2-out']],
    svg: `<svg viewBox="0 0 400 240" width="100%"><defs><linearGradient id="mxg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3A55"/><stop offset="1" stop-color="#0F1826"/></linearGradient></defs><g><rect x="40" y="50" width="320" height="150" rx="8" fill="url(#mxg)" stroke="#3B82F6" stroke-opacity=".3"/>${Array.from({length:8},(_,i)=>`<g transform="translate(${65+i*40},70)"><circle cx="0" cy="15" r="7" fill="#0A1420" stroke="#3B82F6" stroke-opacity=".5"/><circle cx="0" cy="35" r="5" fill="#0A1420" stroke="#22344F"/><rect x="-4" y="55" width="8" height="60" rx="2" fill="#0A1420"/><rect x="-2" y="${60+i*3}" width="4" height="10" fill="#3B82F6"/></g>`).join('')}<rect x="60" y="185" width="280" height="8" fill="#0A1420"/><text x="200" y="30" text-anchor="middle" fill="#60A5FA" font-family="SF Pro Display, sans-serif" font-size="10" letter-spacing="3">YAMAHA MG16XU</text></g></svg>`
  },
  ht: {
    title: 'Motorola GP-338 · Professional Two-Way Radio',
    title_id: 'Motorola GP-338 · Radio Dua Arah Profesional',
    desc: 'A high-durability professional walkie talkie built for event crews. Long battery life, exceptional range, and crystal-clear audio in busy venues.',
    desc_id: 'Handy talky profesional tahan lama untuk crew event. Baterai awet, jangkauan luar biasa, dan audio jernih di venue ramai.',
    specs: [['Range/Jangkauan','5–8 km'],['Battery/Baterai','16 hrs'],['Channels/Channel','16']],
    svg: `<svg viewBox="0 0 400 240" width="100%"><defs><linearGradient id="htg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3A55"/><stop offset="1" stop-color="#0F1826"/></linearGradient></defs><g><rect x="150" y="20" width="100" height="200" rx="14" fill="url(#htg)" stroke="#3B82F6" stroke-opacity=".3"/><rect x="180" y="10" width="8" height="20" rx="4" fill="#22344F"/><rect x="160" y="40" width="80" height="50" rx="4" fill="#0A1420" stroke="#3B82F6" stroke-opacity=".4"/><text x="200" y="72" text-anchor="middle" fill="#60A5FA" font-family="SF Pro Display, monospace" font-size="16" font-weight="600">CH 12</text><circle cx="200" cy="105" r="8" fill="#0A1420" stroke="#3B82F6" stroke-opacity=".4"/><circle cx="200" cy="105" r="3" fill="#22C55E"/><rect x="165" y="125" width="70" height="70" rx="4" fill="#0A1420"/>${Array.from({length:12},(_,i)=>`<circle cx="${175+(i%3)*23}" cy="${138+Math.floor(i/3)*17}" r="6" fill="#22344F"/>`).join('')}<rect x="130" y="60" width="6" height="30" rx="3" fill="#22344F"/></g></svg>`
  },
  tv: {
    title: 'Samsung 65" 4K UHD Smart LED TV',
    title_id: 'Samsung 65" 4K UHD Smart LED TV',
    desc: 'Premium 65-inch 4K panel with roll-in stand and HDMI/USB inputs. Delivered ready-to-plug for exhibitions, launches, and hybrid presentations.',
    desc_id: 'Panel 4K premium 65 inch dengan stand roda dan input HDMI/USB. Dikirim siap-pakai untuk pameran, launching, dan presentasi hybrid.',
    specs: [['Size/Ukuran','65"'],['Resolution/Resolusi','3840 × 2160'],['HDR','HDR10+']],
    svg: `<svg viewBox="0 0 400 240" width="100%"><defs><linearGradient id="tvg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B82F6" stop-opacity=".3"/><stop offset="1" stop-color="#3B82F6" stop-opacity="0"/></linearGradient></defs><g><rect x="30" y="30" width="340" height="180" rx="6" fill="#0A1420" stroke="#22344F"/><rect x="40" y="40" width="320" height="150" fill="url(#tvg)"/><text x="200" y="120" text-anchor="middle" fill="#60A5FA" font-family="SF Pro Display, sans-serif" font-size="34" font-weight="600" opacity=".85">FDA</text><text x="200" y="140" text-anchor="middle" fill="#60A5FA" font-family="SF Pro Display, sans-serif" font-size="11" letter-spacing="4" opacity=".55">MULTIMEDIA</text><rect x="190" y="200" width="20" height="18" fill="#22344F"/><rect x="160" y="216" width="80" height="4" rx="2" fill="#22344F"/></g></svg>`
  },
  converter: {
    title: 'Universal HDMI / VGA / USB-C Converter Kit',
    title_id: 'Kit Konverter HDMI / VGA / USB-C Universal',
    desc: 'Every laptop, every projector — connected in seconds. Our converter kit includes VGA, HDMI, USB-C, Display Port and Lightning adapters.',
    desc_id: 'Setiap laptop, setiap proyektor — terhubung dalam hitungan detik. Kit konverter kami mencakup adapter VGA, HDMI, USB-C, Display Port dan Lightning.',
    specs: [['Ports/Port','8 types'],['Resolution/Resolusi','Up to 4K'],['Audio','Passthrough']],
    svg: `<svg viewBox="0 0 400 240" width="100%"><defs><linearGradient id="cvg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3A55"/><stop offset="1" stop-color="#0F1826"/></linearGradient></defs><g><rect x="80" y="70" width="240" height="100" rx="12" fill="url(#cvg)" stroke="#3B82F6" stroke-opacity=".3"/><rect x="100" y="90" width="40" height="18" rx="3" fill="#0A1420" stroke="#3B82F6" stroke-opacity=".4"/><text x="120" y="103" text-anchor="middle" fill="#60A5FA" font-family="monospace" font-size="8">HDMI</text><rect x="150" y="90" width="40" height="18" rx="3" fill="#0A1420" stroke="#22344F"/><text x="170" y="103" text-anchor="middle" fill="#60A5FA" font-family="monospace" font-size="8">VGA</text><rect x="200" y="90" width="40" height="18" rx="3" fill="#0A1420" stroke="#22344F"/><text x="220" y="103" text-anchor="middle" fill="#60A5FA" font-family="monospace" font-size="8">USB-C</text><rect x="250" y="90" width="40" height="18" rx="3" fill="#0A1420" stroke="#22344F"/><text x="270" y="103" text-anchor="middle" fill="#60A5FA" font-family="monospace" font-size="8">DP</text><rect x="100" y="120" width="190" height="4" rx="2" fill="#3B82F6" opacity=".3"/><circle cx="290" cy="140" r="6" fill="#22C55E"/><text x="105" y="155" fill="#60A5FA" font-family="SF Pro Display, sans-serif" font-size="10" letter-spacing="2" opacity=".7">MULTIPORT · 4K READY</text></g></svg>`
  }
};

let currentEq = 'projector';
function setEquipment(id) {
  currentEq = id;
  const d = EQUIPMENT[id]; if (!d) return;
  const lang = document.documentElement.lang || 'en';
  document.getElementById('eqTitle').textContent = lang === 'id' ? d.title_id : d.title;
  document.getElementById('eqDesc').textContent = lang === 'id' ? d.desc_id : d.desc;
  const specs = d.specs.map(([k,v]) => `<div class="equip-spec"><div class="k">${k.split('/')[lang==='id'?1:0]||k.split('/')[0]}</div><div class="v">${v}</div></div>`).join('');
  document.getElementById('eqSpecs').innerHTML = specs;
  document.getElementById('equipVisual').innerHTML = d.svg;
  document.querySelectorAll('.equip-tab').forEach(t => t.classList.toggle('active', t.dataset.eq === id));
}
document.querySelectorAll('.equip-tab').forEach(t => {
  t.addEventListener('click', () => setEquipment(t.dataset.eq));
});
setEquipment('projector');

/* ─── Gallery ────────────────────────────────────────────────── */
const GALLERY = [
  { cat:'conference', r:75, t:'International Conference', t_id:'Konferensi Internasional', s:'UB · 1,200 pax', bg:'linear-gradient(135deg,#0A1420,#1E3A8A)', ic:'projector' },
  { cat:'wedding',    r:120, t:'Wedding Reception',    t_id:'Resepsi Pernikahan',      s:'Grand Ballroom · Malang', bg:'linear-gradient(135deg,#4A1D1D,#831843)', ic:'sound' },
  { cat:'school',     r:70,  t:'School Anniversary',   t_id:'HUT Sekolah',              s:'SMA Negeri · 800 pax', bg:'linear-gradient(135deg,#064E3B,#065F46)', ic:'tv' },
  { cat:'corporate',  r:95,  t:'Product Launch',       t_id:'Peluncuran Produk',        s:'PT Astra · Batu', bg:'linear-gradient(135deg,#312E81,#3730A3)', ic:'mixer' },
  { cat:'church',     r:65,  t:'Sunday Service',       t_id:'Ibadah Minggu',            s:'GKI · Malang', bg:'linear-gradient(135deg,#78350F,#92400E)', ic:'ht' },
  { cat:'government', r:88,  t:'Regional Summit',      t_id:'Rakor Regional',           s:'Pemkot Malang', bg:'linear-gradient(135deg,#134E4A,#115E59)', ic:'converter' },
  { cat:'conference', r:70,  t:'Tech Seminar',         t_id:'Seminar Teknologi',        s:'Kampus UMM · 500 pax', bg:'linear-gradient(135deg,#1E293B,#0F172A)', ic:'mixer' },
  { cat:'wedding',    r:95,  t:'Garden Wedding',       t_id:'Pernikahan Outdoor',       s:'Villa · Batu', bg:'linear-gradient(135deg,#3F3F46,#18181B)', ic:'sound' },
  { cat:'school',     r:80,  t:'Graduation Ceremony',  t_id:'Wisuda',                    s:'ITN · Malang', bg:'linear-gradient(135deg,#1E40AF,#1E3A8A)', ic:'tv' },
  { cat:'corporate',  r:70,  t:'Company Anniversary',  t_id:'Ulang Tahun Perusahaan',   s:'Bank Jatim', bg:'linear-gradient(135deg,#7C2D12,#9A3412)', ic:'projector' },
  { cat:'government', r:115, t:'Public Consultation',  t_id:'Musrenbang',                s:'Kabupaten Malang', bg:'linear-gradient(135deg,#164E63,#155E75)', ic:'sound' },
  { cat:'church',     r:80,  t:'Youth Retreat',        t_id:'Retret Pemuda',            s:'Selecta · Batu', bg:'linear-gradient(135deg,#701A75,#86198F)', ic:'ht' },
];
function iconSvg(k) {
  const map = {
    projector:'<rect x="20" y="30" width="60" height="30" rx="3"/><circle cx="35" cy="45" r="8"/>',
    sound:'<circle cx="50" cy="45" r="18"/><circle cx="50" cy="45" r="8"/>',
    mixer:'<rect x="15" y="30" width="70" height="30" rx="2"/><line x1="30" y1="35" x2="30" y2="55" stroke-width="2"/><line x1="45" y1="35" x2="45" y2="55" stroke-width="2"/><line x1="60" y1="35" x2="60" y2="55" stroke-width="2"/>',
    ht:'<rect x="35" y="20" width="30" height="55" rx="3"/><rect x="42" y="28" width="16" height="14"/>',
    tv:'<rect x="15" y="25" width="70" height="42" rx="2"/><line x1="40" y1="72" x2="60" y2="72" stroke-width="2"/>',
    converter:'<rect x="20" y="35" width="60" height="25" rx="3"/><rect x="28" y="42" width="12" height="8"/><rect x="45" y="42" width="12" height="8"/>'
  };
  return `<svg viewBox="0 0 100 90" stroke="rgba(255,255,255,.35)" fill="none" stroke-width="1.5">${map[k]||map.projector}</svg>`;
}
function buildGallery() {
  const lang = document.documentElement.lang || 'en';
  const m = document.getElementById('masonry');
  m.innerHTML = GALLERY.map(g => `
    <div class="masonry-item" data-cat="${g.cat}">
      <div class="m-visual" style="--r:${g.r}%; background:${g.bg}">
        <div style="display:grid;place-items:center;">
          <div style="width:35%;opacity:.35">${iconSvg(g.ic)}</div>
        </div>
        <div class="overlay">
          <div class="cap">
            <div class="t">${lang==='id'? g.t_id : g.t}</div>
            <div class="s">${g.s}</div>
          </div>
        </div>
      </div>
    </div>`).join('');
}
buildGallery();
document.querySelectorAll('.gallery-filter button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.gallery-filter button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const f = b.dataset.filter;
    document.querySelectorAll('.masonry-item').forEach(item => {
      const show = f === 'all' || item.dataset.cat === f;
      item.style.display = show ? '' : 'none';
    });
  });
});

/* ─── FAQ accordion ──────────────────────────────────────────── */
const FAQ = [
  {
    q_en: 'What are your minimum and maximum rental durations?',
    q_id: 'Berapa durasi sewa minimum dan maksimum?',
    a_en: 'Our minimum rental is 4 hours (half-day) and we support single-day, multi-day, weekly, and monthly rentals. Long-term contracts are available for regular clients — reach out for tailored pricing.',
    a_id: 'Durasi minimum kami 4 jam (setengah hari) dan kami mendukung sewa harian, beberapa hari, mingguan, hingga bulanan. Kontrak jangka panjang tersedia untuk klien tetap — hubungi kami untuk harga khusus.'
  },
  {
    q_en: 'Is a deposit required?',
    q_id: 'Apakah diperlukan deposit?',
    a_en: 'A small deposit secures your reservation. The exact amount depends on the equipment value and rental duration — we quote transparently up-front with no surprises.',
    a_id: 'Deposit kecil untuk mengamankan reservasi. Nominalnya tergantung nilai peralatan dan durasi sewa — kami sampaikan transparan di awal tanpa kejutan.'
  },
  {
    q_en: 'Do you deliver to venues outside Malang?',
    q_id: 'Apakah melayani pengiriman di luar Malang?',
    a_en: 'Yes. We deliver across Malang Raya (Kota, Kabupaten, Batu) as standard, and we also serve Surabaya, Pasuruan, Blitar, and other East Java cities on request.',
    a_id: 'Ya. Kami mengirim ke seluruh Malang Raya (Kota, Kabupaten, Batu) sebagai standar, dan juga melayani Surabaya, Pasuruan, Blitar, dan kota Jawa Timur lain sesuai permintaan.'
  },
  {
    q_en: 'Do you provide operators / technicians?',
    q_id: 'Apakah menyediakan operator / teknisi?',
    a_en: 'Yes. Certified technicians are available for on-site setup, live operation, and tear-down — either included with a full-service package or as an add-on to equipment-only rentals.',
    a_id: 'Ya. Teknisi tersertifikasi tersedia untuk setup di lokasi, operasional live, dan bongkar — bisa termasuk dalam paket layanan lengkap atau sebagai add-on untuk sewa peralatan saja.'
  },
  {
    q_en: 'What payment methods do you accept?',
    q_id: 'Metode pembayaran apa yang diterima?',
    a_en: 'Bank transfer (BCA, Mandiri, BNI), QRIS, and cash on delivery. Invoicing for institutional clients is available on request.',
    a_id: 'Transfer bank (BCA, Mandiri, BNI), QRIS, dan tunai saat pengiriman. Invoice untuk klien institusi tersedia sesuai permintaan.'
  },
  {
    q_en: 'How do I check equipment availability?',
    q_id: 'Bagaimana cara cek ketersediaan peralatan?',
    a_en: 'The fastest way is WhatsApp us your event date and equipment list — we reply with real-time availability within minutes during business hours.',
    a_id: 'Cara tercepat adalah WhatsApp ke kami dengan tanggal event dan daftar peralatan — kami balas dengan ketersediaan real-time dalam menit selama jam operasional.'
  },
  {
    q_en: 'What is your cancellation policy?',
    q_id: 'Bagaimana kebijakan pembatalan?',
    a_en: 'Cancellations more than 48 hours before the event are fully refundable minus a small processing fee. Within 48 hours, the deposit is retained. We are flexible for genuine emergencies.',
    a_id: 'Pembatalan lebih dari 48 jam sebelum event dapat direfund penuh dikurangi biaya administrasi kecil. Kurang dari 48 jam, deposit ditahan. Kami fleksibel untuk keadaan darurat.'
  },
];
function buildFAQ() {
  const lang = document.documentElement.lang || 'en';
  const el = document.getElementById('faqList');
  el.innerHTML = FAQ.map((f,i) => `
    <div class="faq-item ${i===0?'open':''}">
      <button class="faq-q">
        <span>${lang==='id'? f.q_id : f.q_en}</span>
        <span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="faq-a"><p>${lang==='id'? f.a_id : f.a_en}</p></div>
    </div>`).join('');
  el.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}
buildFAQ();

/* ─── Clients ────────────────────────────────────────────────── */
const CLIENTS = [
  { name:'Universitas Brawijaya', short:'UB', c:'#1E40AF' },
  { name:'Universitas Muhammadiyah Malang', short:'UMM', c:'#DC2626' },
  { name:'Institut Teknologi Nasional', short:'ITN', c:'#0891B2' },
  { name:'Pemerintah Kota Malang', short:'PEMKOT', c:'#065F46' },
  { name:'Bank Jatim', short:'BJTM', c:'#7C2D12' },
  { name:'PT Astra International', short:'ASTRA', c:'#111827' },
  { name:'SMA Negeri 1 Malang', short:'SMAN 1', c:'#1E293B' },
  { name:'GKI Malang', short:'GKI', c:'#6B21A8' },
  { name:'Telkom Indonesia', short:'TLKM', c:'#B91C1C' },
  { name:'Kabupaten Malang', short:'KAB. MLG', c:'#134E4A' },
  { name:'Hotel Tugu Malang', short:'TUGU', c:'#78350F' },
  { name:'Universitas Negeri Malang', short:'UM', c:'#3730A3' },
];
function buildClients() {
  const el = document.getElementById('clientsGrid');
  el.innerHTML = CLIENTS.map(c => `
    <div class="client-cell">
      <div class="logo" style="color:${c.c}">
        <span class="mark" style="background:${c.c}">${c.short.charAt(0)}</span>
        <span>${c.name}</span>
      </div>
    </div>`).join('');
}
buildClients();

/* ─── GSAP scroll animations (optional layer of polish) ───────── */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  // hero card 3d subtle sway on mousemove
  const cards = document.querySelectorAll('.hero-card');
  document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
    const w = window.innerWidth, h = window.innerHeight;
    const rx = (e.clientY / h - 0.5) * -6;
    const ry = (e.clientX / w - 0.5) * 6;
    cards.forEach((c,i) => {
      const strength = 1 + i * 0.15;
      c.style.transform = `translateY(0) rotateX(${rx*strength}deg) rotateY(${ry*strength}deg)`;
    });
  });
  document.querySelector('.hero')?.addEventListener('mouseleave', () => {
    cards.forEach(c => c.style.transform = '');
  });

  // subtle parallax on equip visual
  gsap.to('.equip-visual', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: { trigger: '.equip', start:'top bottom', end:'bottom top', scrub: true }
  });
}

/* ─── year + init lang ───────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();
applyLang(localStorage.getItem('fda-lang') || 'en');
