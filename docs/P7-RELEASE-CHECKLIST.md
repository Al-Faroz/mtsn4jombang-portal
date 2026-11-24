# P7 — Checklist Kesiapan Rilis Portal Digital Madrasah

**Tanggal penyusunan:** 24 November 2026  
**Status:** Menunggu pemeriksaan produksi pengelola. Dokumen ini **tidak melakukan deployment**.

## Batas tanggung jawab

- Repository `mtsn4jombang-portal`: landing page publik dan area Manajemen Madrasah, SEO root-domain, serta tautan menuju subdomain.
- Migrasi WordPress MATSAFOUR, konfigurasi DNS/SSL, pengalihan URL artikel lama, dan pengelolaan setiap subdomain **ditangani pengelola secara terpisah**.
- Jangan menimpa WordPress aktif di root sebelum pengelola menyatakan root domain siap dipakai untuk portal.

## Sebelum unggah

- [ ] Pastikan `main` memuat PR #1, #3, #4, #5, #6, dan #7.
- [ ] Pastikan `index.html` serta `assets/css/portal.css`, `assets/js/portal.js`, dan `assets/img/LogoFlat.svg` ada.
- [ ] Pastikan `robots.txt` dan `sitemap.xml` ada di root folder situs yang akan diakses pada `https://mtsn4jombang.sch.id/`.
- [ ] Pastikan `index.html` merujuk ke jalur aset relatif `assets/...` dan tak memerlukan database atau proses build.
- [ ] Jangan unggah `prototypes/`, `docs/`, berkas `.git`, backup, atau dokumen internal jika hosting hanya membutuhkan website statis.
- [ ] Pastikan tujuan tombol MATSAFOUR: `https://matsafour.mtsn4jombang.sch.id/`.

## Verifikasi setelah portal berada pada domain utama

- [ ] `https://mtsn4jombang.sch.id/` merespons HTTPS dan memuat Portal Digital Madrasah.
- [ ] Logo resmi tajam; logo tengah pada **Portal Utama** dan **Manajemen Madrasah** dapat diklik dan membuka MATSAFOUR.
- [ ] Tampilan desktop: ikon, lingkaran pusat, footer, navigasi tidak tumpang-tindih.
- [ ] Tampilan HP: kartu terakhir CBT rata tengah; keenam kartu Manajemen tersusun rapi.
- [ ] Tombol **Portal Utama ↔ Manajemen Madrasah** berfungsi.
- [ ] Uji keyboard (Tab dan Enter), fokus terlihat, dan navigasi ke tab baru.
- [ ] Uji 11 tautan layanan; cek alamat tujuan dan ketentuan login masing-masing, tanpa menganggap semua layanan publik.
- [ ] Tidak ada error 404 aset atau error JavaScript pada DevTools.
- [ ] `https://mtsn4jombang.sch.id/robots.txt` terbuka dan memuat lokasi sitemap.
- [ ] `https://mtsn4jombang.sch.id/sitemap.xml` terbuka dan berisi canonical homepage saja.
- [ ] Source HTML memuat title, description, canonical `https://mtsn4jombang.sch.id/`, metadata sosial, dan JSON-LD.
- [ ] Struktur organisasi/website diperiksa menggunakan validator Schema.org (validitas struktur bukan jaminan rich results).
- [ ] Di Search Console yang **sudah dimiliki pengelola**, periksa beranda dan kirim sitemap URL jika diperlukan.
- [ ] Jika Google masih melihat WordPress lama, beri waktu crawling dan pantau status indeks—jangan mengubah data Search Console berulang tanpa diagnosis.

## Kriteria selesai

**Rilis dinyatakan FIX hanya jika pengelola mengonfirmasi** tampilan produksi, 11 tujuan layanan, aset, SEO dasar, dan navigasi telah PASS.

## Catatan

Domain utama memiliki satu dokumen dengan perpindahan kategori menggunakan hash. Sitemap domain utama **tidak** mendata seluruh URL subdomain; SEO situs lain dikelola di aplikasi masing-masing. Jangan menyalin konfigurasi robots untuk aplikasi internal tanpa audit akses.
