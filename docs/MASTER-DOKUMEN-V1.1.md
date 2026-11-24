# MASTER DOKUMEN PENGEMBANGAN
## Portal Digital Terpadu MTsN 4 Jombang

**Versi:** 1.1  
**Tanggal:** 18 November 2026  
**Status:** Baseline perencanaan — keputusan yang ditetapkan dibedakan dari usulan  
**Repository:** https://github.com/Al-Faroz/mtsn4jombang-portal  
**Lokal:** `E:\xampp\htdocs\mtsn4jombang-portal`  
**Domain produksi:** https://mtsn4jombang.sch.id/

> Penanda: **[DISEPAKATI]** keputusan pengelola; **[USULAN]** belum disahkan; **[PERLU VERIFIKASI]** perlu pengecekan faktual/teknis. Jangan menganggap usulan sebagai spesifikasi yang sudah disetujui.

## 1. Gambaran dan tujuan

[DISEPAKATI] Domain utama `mtsn4jombang.sch.id` yang saat ini menampung WordPress berita dan kabar madrasah akan digunakan sebagai gerbang layanan digital. Portal berita WordPress menggunakan alamat tujuan yang **sudah ditetapkan**, yaitu **https://matsafour.mtsn4jombang.sch.id/**. Aplikasi pada subdomain lain tetap menjadi sistem terpisah.

Tujuan: navigasi layanan yang mudah, visual elegan dan interaktif, cepat pada ponsel maupun komputer, dan identitas resmi madrasah yang kuat. Proyek bukan penulisan ulang seluruh aplikasi, bukan sistem login bersama, dan bukan penggantian mekanisme otorisasi layanan.

## 2. Keputusan desain

- [DISEPAKATI] Portal memiliki rasa **single-page**, singkat, tidak menampilkan seluruh aplikasi dalam satu layar.
- [DISEPAKATI] Halaman awal berfokus pada **portal berita dan layanan yang pintu masuknya bersifat publik**, termasuk SLA-SKS.
- [DISEPAKATI] Layanan utama diwakili **lingkaran/ikon dengan nama panggilan**, bukan daftar panjang deskripsi.
- [DISEPAKATI] Ada navigasi berupa deretan ikon di bagian bawah menuju **Layanan Manajemen Madrasah**.
- [DISEPAKATI] Area manajemen memiliki **bahasa desain yang sama** dengan halaman utama, dengan akses kembali yang jelas.
- [DISEPAKATI] Referensi struktur: https://osdm.unsam.ac.id/; referensi warna hijau: https://rsu.edu.ph/; ilustrasi layout lingkaran mengacu pada contoh visual pengelola. Adaptasi, bukan penyalinan persis.
- [DISEPAKATI] Visual harus elegan, interaktif, responsif dan tetap ringan.
- [DISEPAKATI] URL berita adalah `https://matsafour.mtsn4jombang.sch.id/`, **bukan** `media`, `news`, atau `berita`.
- [DISEPAKATI] Master Dokumen menjadi acuan kerja; implementasi bertahap melalui branch, PR, QA, dan persetujuan FIX.

## 3. Inventaris destinasi

URL ini adalah tujuan navigasi; bukan pernyataan bahwa semua layanan bisa digunakan tanpa login.

| No | Nama ikon | Alamat | Fungsi |
|---:|---|---|---|
| 1 | SLA-SKS | https://sla-sks.mtsn4jombang.sch.id/ | E-learning pembelajaran mandiri SKS |
| 2 | ProGuru | https://proguru.mtsn4jombang.sch.id/ | Pengembangan profesional guru |
| 3 | Sarpras | https://sarpras.mtsn4jombang.sch.id/ | Sarana dan prasarana |
| 4 | Kantin | https://kantin.mtsn4jombang.sch.id/ | Pengelolaan kantin |
| 5 | SisFour | https://sisfour.mtsn4jombang.sch.id/ | Sistem informasi manajemen madrasah |
| 6 | SAPA | https://sapa.mtsn4jombang.sch.id/ | Pendaftaran layanan PTSP |
| 7 | Pengumuman | https://pengumuman.mtsn4jombang.sch.id/ | Pengumuman event tertentu |
| 8 | KMP-RDM | https://kmp-rdm.mtsn4jombang.sch.id/ | Cetak ulang rapor digital |
| 9 | CBT | https://cbt.mtsn4jombang.sch.id/ | Computer-based testing |
| 10 | RDM | https://rdm.mtsn4jombang.sch.id/ | Pengelolaan rapor digital madrasah |
| 11 | MatsaFour / Berita | https://matsafour.mtsn4jombang.sch.id/ | WordPress portal berita dan kabar madrasah |

**Inventaris:** 10 subdomain aplikasi + 1 portal berita = **11 tujuan**. Penetapan alamat MatsaFour bukan klaim bahwa migrasi WordPress telah selesai.

## 4. Arsitektur informasi

### 4.1 Beranda publik — `/`

- [DISEPAKATI] Identitas MTsN 4 Jombang; lingkaran interaktif berisi layanan publik dan pintu ke manajemen.
- [DISEPAKATI] Ikon **MatsaFour / Berita** membuka `https://matsafour.mtsn4jombang.sch.id/`.
- [DISEPAKATI] Ikon **SLA-SKS** tersedia pada halaman utama.
- [USULAN] SAPA dan Pengumuman ditampilkan di area layanan umum.
- [PERLU VERIFIKASI] CBT dan KMP-RDM masuk beranda publik atau kategori lain.
- [USULAN] Pengumuman dapat memiliki status event aktif/tidak aktif tanpa mencabut tujuan URL.
- [DISEPAKATI] Deretan navigasi bawah mengantar pengguna ke area Layanan Manajemen Madrasah.

### 4.2 Layanan Manajemen Madrasah

- [DISEPAKATI] Halaman/area tersendiri dengan desain konsisten, tidak membebani tampilan beranda.
- [USULAN] Gunakan path internal `/manajemen`, bukan subdomain baru.
- [USULAN] Kandidat ikon: SisFour, Sarpras, Kantin, ProGuru, RDM, KMP-RDM, dan CBT bila sesuai.
- [PERLU VERIFIKASI] Posisi final ditetapkan setelah memvalidasi pemakai utama, kebutuhan login, dan konteks tiap sistem.
- [DISEPAKATI] Sediakan navigasi jelas untuk kembali ke beranda.

### 4.3 Hak akses

**Tampilnya ikon tidak menentukan kewenangan.** Setiap aplikasi tetap mengurus autentikasi dan otorisasi sendiri. Jangan memindahkan login, membuat SSO, atau menjanjikan akses publik tanpa keputusan khusus. [PERLU VERIFIKASI] Apakah ada tautan yang tidak boleh dipublikasikan pada portal.

## 5. Konsep desain dan interaksi

- Komposisi desktop: lingkaran pusat bertuliskan **Portal Digital MTsN 4 Jombang**, ikon layanan disusun secara visual di sekelilingnya tanpa tabrakan.
- Tiap ikon menampilkan **simbol + nama pendek**; keterangan boleh ditampilkan saat hover maupun fokus keyboard.
- Hover/fokus: perubahan elevasi atau halo emerald yang ringan; klik/tap benar-benar membuka tautan atau halaman kategori.
- Mobile: ikon disusun ulang menjadi grid/cluster yang tetap mudah disentuh, bukan memaksakan orbit desktop berukuran kecil.
- [USULAN] Palet: deep green `#064E3B`, emerald `#047857`, accent `#10B981`, latar `#F5FAF7`, teks `#172B27`; bersifat draf sampai mockup disetujui.
- Dukung `prefers-reduced-motion`, navigasi keyboard, fokus terlihat, kontras memadai, label aksesibel, serta target sentuh yang nyaman.
- Hindari animasi permanen yang mengganggu, plugin berat, dan layar awal yang memerlukan scroll panjang untuk menemukan layanan.

## 6. Prinsip teknis

[USULAN] Implementasi awal sebagai situs statis (HTML, CSS, JavaScript) atau framework frontend ringan **setelah** mockup dan kebutuhan deployment disahkan. Belum perlu database hanya untuk katalog tautan. Catat tujuan tautan secara terpusat agar mudah diubah. Pastikan tautan eksternal aman dan tidak mengasumsikan layanan sudah online.

[PERLU VERIFIKASI] Hosting/domain/DNS, stack yang diizinkan, cara rilis, pengelolaan aset logo, dan struktur jalur WordPress eksisting.

## 7. Strategi pemindahan WordPress ke MatsaFour

Alamat tujuan WordPress **sudah diputuskan**: `https://matsafour.mtsn4jombang.sch.id/`.

Sebelum eksekusi produksi:
1. Inventaris WordPress: versi, plugin, tema, media, permalink, konten, formulir, integrasi, dan tautan internal.
2. Backup teruji untuk file, uploads, dan database; persiapkan rollback.
3. Pastikan DNS, SSL, hosting, serta ketersediaan subdomain MatsaFour.
4. Migrasi pada salinan/staging; periksa media, permalink, editor, login, pencarian, dan API jika digunakan.
5. Susun pemetaan **301 redirect** halaman/artikel dari domain utama ke alamat baru agar tautan lama tidak putus. Hindari mengalihkan seluruh permintaan beranda tanpa memikirkan portal baru.
6. Pastikan canonical, sitemap, robots, dan Search Console diperbarui.
7. Cutover setelah pengujian dan persetujuan; pertahankan backup dan rencana pemulihan.

**Belum dilakukan oleh proyek ini:** migrasi WordPress, perubahan DNS, atau redirect produksi.

## 8. Struktur repository [USULAN]

```text
mtsn4jombang-portal/
├── README.md
├── docs/
│   └── MASTER-DOKUMEN-V1.1.md
├── public/             # aset publik saat implementasi
└── src/                # kode portal setelah stack disepakati
```

Nama dan struktur folder implementasi boleh disesuaikan pada tahap fondasi. Jangan memasukkan kredensial, file .env produksi, backup WordPress, data siswa, atau database privat ke Git.

## 9. Pola kerja dan kontrol perubahan

1. Review master dokumen; tulis perubahan keputusan secara eksplisit.
2. Susun mockup desktop/mobile untuk beranda dan manajemen.
3. Review dan setujui mockup sebelum penulisan frontend.
4. Kembangkan per tahap pada branch fitur.
5. Buat Pull Request dengan ringkasan, bukti uji, dan batas pekerjaan.
6. Pengelola menguji secara lokal; beri status **FIX** hanya setelah disetujui.
7. Fitur yang FIX tidak diubah sembarangan; perubahan susulan harus terukur.
8. Merge ke `main` setelah persetujuan dan pemeriksaan.

## 10. Tahapan dan kriteria QA

| Tahap | Deliverable | Gerbang persetujuan |
|---|---|---|
| P0 | Master Dokumen dan inventaris layanan | Pengelompokan/terminologi final |
| P1 | Mockup visual beranda + manajemen desktop/mobile | **FIX (disetujui)** |
| P2 | Fondasi frontend dan konfigurasi tautan | **FIX (disetujui)** |
| P3 | Beranda dan lingkaran interaktif | Interaksi & responsif PASS |
| P4 | Area Layanan Manajemen | Navigasi & tautan PASS |
| P5 | QA aksesibilitas, performa, keamanan tautan | Checklist PASS |
| P6 | Rencana + uji migrasi WordPress ke MatsaFour | Konten & redirect PASS |
| P7 | Deployment dan verifikasi produksi | Persetujuan rilis |

**Checklist minimal:** semua URL sesuai inventaris; MatsaFour tidak tertukar dengan usulan lama; ikon keyboard/touch dapat dipakai; tidak ada overflow; tampil baik di desktop/tablet/ponsel; efek gerak dapat dikurangi; tautan valid; tidak ada data rahasia; alur kembali jelas.

## 11. Log keputusan

| Tanggal | Perubahan | Status |
|---|---|---|
| 18 Nov 2026 | Domain utama menjadi Portal Digital Terpadu; kategori manajemen terpisah secara visual | DISEPAKATI |
| 18 Nov 2026 | Tampilan interaktif dengan lingkaran ikon, referensi OSDM UNSAM dan warna RSU | DISEPAKATI |
| 18 Nov 2026 | Portal berita WordPress menggunakan `matsafour.mtsn4jombang.sch.id` | **DISEPAKATI — menggantikan seluruh kandidat nama sebelumnya** |

## 11.1 Revisi visual P1 — 18 November 2026

- [DISEPAKATI] Headline portal utama: **Portal Digital Madrasah**.
- [DISEPAKATI] Nama ikon berita dan pengumuman ditulis **MATSAFOUR** dan **PENGUMUMAN**.
- [DISEPAKATI] Bagian tengah lingkaran menggunakan **logo resmi MTsN 4 Jombang** dari file SVG asli `LogoFlat.svg`, bukan teks atau logo raster.
- [DISEPAKATI] Ikon seluruh layanan menggunakan **satu gaya outline sederhana dan seragam**; prototipe menggunakan desain bergaya Lucide.
- [DISEPAKATI] Tagline identitas di header juga menggunakan teks **Portal Digital Madrasah**.
- [PERLU REVIEW] Tampilan logo SVG dan detail ikon pada prototipe sebelum P1 dinyatakan FIX.

## 12. Hal yang belum ditetapkan

- Susunan akhir layanan pada beranda dan manajemen, terutama CBT/KMP-RDM.
- Warna final, ukuran dan tata letak lingkaran, ikon, dan aset identitas resmi.
- Stack frontend dan metode deployment.
- Detail teknis pemindahan WordPress dan redirect URL lama.

**Aturan:** hal-hal tersebut tidak boleh diputuskan sepihak pada tahap dokumentasi.


## 13. Status implementasi P2 (18 November 2026)

- **P1 FIX**: prototipe di `prototypes/p1/` menjadi referensi desain terkunci.
- **P2 FIX**: pengelola menyetujui fondasi situs statis pada 18 November 2026. Situs tersedia pada `index.html` dengan aset terpisah di `assets/`.
- Rilis produksi, pemindahan WordPress, maupun perubahan login aplikasi **belum dilakukan**.
- Checklist uji lokal: `docs/P2-QA.md`.


## 14. P5 — SEO Portal Digital (24 November 2026)

- [DISEPAKATI] Google Search Console **sudah didaftarkan** oleh pengelola; tidak perlu pendaftaran ulang.
- [DISEPAKATI] Optimasi SEO di repository untuk **domain utama**.
- [DISEPAKATI] Logo pusat pada kedua kategori menjadi tautan ke `https://matsafour.mtsn4jombang.sch.id/`.
- [IMPLEMENTASI MENUNGGU QA] Meta title/description, canonical, Open Graph, schema.org organisasi, favicon SVG, `robots.txt`, dan `sitemap.xml` telah disiapkan pada branch P5.
- [DISEPAKATI] Pengelolaan/migrasi WordPress dan konfigurasi DNS dilakukan sendiri oleh pengelola, bukan ruang lingkup pekerjaan ini.
- [CATATAN] Sitemap domain utama hanya berisi URL beranda; layanan subdomain tidak didaftarkan sebagai bagian sitemap beranda karena berada pada hostname berbeda.
- [QA] Ikuti `docs/P5-SEO-QA.md`; belum FIX sebelum disetujui.
