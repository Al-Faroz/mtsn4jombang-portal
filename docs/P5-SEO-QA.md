# P5 — SEO Portal Utama dan Tautan Logo MATSAFOUR

**Status:** Menunggu QA lokal dan persetujuan FIX.

## Ruang lingkup perubahan

- Judul dan deskripsi meta berbahasa Indonesia.
- Canonical `https://mtsn4jombang.sch.id/`.
- Metadata Open Graph dan Twitter Card (teks; tidak mengklaim ada gambar pratinjau).
- JSON-LD schema.org tipe `EducationalOrganization` dan `WebSite` dengan identitas serta logo madrasah.
- `robots.txt` dan `sitemap.xml` **hanya untuk domain utama**.
- Favicon SVG resmi.
- Logo besar **di kedua tampilan** menjadi tautan ke `https://matsafour.mtsn4jombang.sch.id/` dan bisa diakses melalui keyboard.
- Tata letak, daftar layanan, kategori, dan URL tombol lain tidak berubah.

## Mengapa sitemap hanya satu URL?

Portal utama adalah satu dokumen HTML dengan perpindahan tampilan memakai hash (`#utama`/`#manajemen`), bukan dua halaman web independen. Sitemap tidak menambahkan hash sebagai halaman terpisah atau mencantumkan situs lain yang memiliki hostname sendiri. Subdomain yang punya konten publik mengelola SEO dan sitemap di aplikasinya masing-masing.

## QA lokal

- [ ] `http://localhost/mtsn4jombang-portal/` tetap tampil normal.
- [ ] Logo tengah di Portal Utama membuka MATSAFOUR di tab baru.
- [ ] Logo tengah di Manajemen Madrasah membuka MATSAFOUR di tab baru.
- [ ] Klik, Tab, Enter, dan fokus keyboard pada logo dapat digunakan.
- [ ] Kedua logo tidak menabrak ikon di desktop dan mobile.
- [ ] Semua 11 tujuan layanan tetap sesuai.
- [ ] Perpindahan kategori dan hash tetap berfungsi.
- [ ] Periksa View Source: title, description, canonical, og:*, JSON-LD, dan favicon.
- [ ] Akses `http://localhost/mtsn4jombang-portal/robots.txt` dan `/sitemap.xml` pada lokal.
- [ ] Pastikan tidak muncul error JavaScript/HTML pada DevTools.

## Setelah domain utama dipasang (dikerjakan pengelola)

1. Pastikan `https://mtsn4jombang.sch.id/`, `/robots.txt`, `/sitemap.xml`, dan file logo semuanya merespons dengan benar lewat HTTPS.
2. Pada Google Search Console yang **sudah terdaftar**, kirim URL `https://mtsn4jombang.sch.id/sitemap.xml` bila belum pernah dikirim, lalu gunakan pemeriksaan URL untuk beranda.
3. Validasi structured data di validator Schema.org dan pantau laporan pengindeksan Search Console.
4. Cek metadata, canonical, dan tautan MatsaFour pada website produksi setelah cutover.

Tidak ada pengaturan atau perubahan Search Console, DNS, WordPress, maupun subdomain yang dilakukan dalam PR ini. Canonical ke domain produksi memang tetap tampil saat pengujian di localhost. Sitemap yang dikirim bukan jaminan Google mengindeks halaman.
