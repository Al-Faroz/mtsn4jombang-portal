# P2 — Fondasi website statis dan QA

Status: **P2 FIX**, disetujui pengelola pada 18 November 2026.

## Ruang lingkup

- Mengangkat desain P1 yang sudah disetujui ke root `index.html`.
- Memisahkan HTML, CSS, dan JavaScript ke file masing-masing.
- Memasang logo SVG asli dan mempertahankan warna, komposisi, label uppercase, footer LemahTeles, serta posisi ikon yang telah di-FIX.
- Menjalankan portal tanpa database, Composer, Node.js, atau jaringan CDN.
- Tidak mengubah WordPress, DNS, subdomain, hosting, atau otorisasi aplikasi lain.

## Cara menguji di lokal

1. Jalankan Apache pada XAMPP.
2. Pastikan repository ada di `E:\xampp\htdocs\mtsn4jombang-portal`.
3. Buka `http://localhost/mtsn4jombang-portal/`.
4. Jika hanya ingin memeriksa tampilan, `index.html` juga bisa dibuka langsung sebagai file.

## Checklist

- [ ] Beranda terbuka tanpa 404.
- [ ] Logo resmi SVG tampil tajam, tanpa latar putih di luar segi lima.
- [ ] Judul dan tagline bertuliskan **Portal Digital Madrasah**.
- [ ] Ikon **MATSAFOUR, SLA-SKS, SAPA, PENGUMUMAN, CBT** tampil utuh.
- [ ] CBT tidak tertutup navigasi bawah.
- [ ] Klik tombol **Manajemen** menampilkan 6 ikon manajemen.
- [ ] Label **SISFOUR, PROGURU, SARPRAS, KANTIN, RDM, KMP-RDM** uppercase.
- [ ] Ikon RDM dan KMP-RDM tidak tertutup panel navigasi.
- [ ] Tombol **Portal Utama** kembali tanpa reload.
- [ ] Refresh ketika URL berakhir `#manajemen` tetap menampilkan area manajemen.
- [ ] Hover dan fokus keyboard berfungsi, tidak ada tabrakan antarikon.
- [ ] Tampilan di ponsel, tablet, dan desktop tidak overflow horizontal.
- [ ] Tidak ada request CDN atau aset eksternal untuk tampilan portal.
- [ ] Tautan menuju 11 destinasi benar dan dibuka sebagai tab baru.
- [ ] Footer menampilkan **Create By LemahTeles**.
- [ ] Periksa Console dan Network pada DevTools, pastikan tidak ada error aset/JS.

Checklist ini tersedia untuk pengujian ulang. Persetujuan P2 dicatat pada tingkat tahap.
