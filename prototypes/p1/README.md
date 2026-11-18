# P1 — Prototipe visual interaktif

Status: **draf untuk review**, bukan landing page produksi.

## Menjalankan

Buka `prototypes/p1/index.html` di browser. Tidak perlu PHP, database, koneksi build, atau instalasi paket.

## Yang sudah dicontohkan

- Portal utama: MatsaFour (berita), SLA-SKS, SAPA, Pengumuman, CBT.
- Portal manajemen: SisFour, ProGuru, Sarpras, Kantin, RDM, KMP-RDM.
- Navigasi interaktif antara kedua portal tanpa reload halaman.
- Akses aplikasi melalui tautan menuju subdomain masing-masing.
- Tata letak orbit/lingkaran pada desktop, grid responsif pada perangkat kecil.
- Efek hover/focus dan dukungan pengurangan animasi.
- Label **PROTOTIPE P1** untuk mencegah salah anggap sebagai versi final.

## Belum diputuskan

- Penempatan CBT dan KMP-RDM; posisi saat ini hanya untuk mendemonstrasikan layout (sesuai Master Dokumen V1.1).
- Logo resmi: simbol bintang sementara **bukan** logo madrasah.
- Ikon emoji adalah placeholder; akan diganti satu gaya ikon yang konsisten setelah review.
- Penamaan akhir kategori, nama pendek aplikasi, warna, tata letak dan gambar latar.
- Pilihan stack, deployment, pengalihan WordPress, otorisasi/SSO.

## Yang perlu diperiksa

1. Desktop: komposisi orbit, keseimbangan ruang kosong, ukuran pusat dan ikon.
2. Mobile: ikon terjangkau, terbaca, tidak saling menimpa.
3. Ganti kategori melalui tombol atas maupun bawah; URL hash berubah.
4. Hover/focus keyboard dan klik tautan sesuai URL yang sudah diberikan.
5. Warna dan kesan desain sesuai selera pengelola.

**Jangan melakukan deploy ke domain utama dari folder prototipe ini.**
