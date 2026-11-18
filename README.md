# Portal Digital MTsN 4 Jombang

Repository pengembangan **Portal Digital Terpadu MTsN 4 Jombang**, gerbang navigasi interaktif menuju layanan publik dan layanan manajemen madrasah.

- **Domain portal utama:** https://mtsn4jombang.sch.id/
- **Portal berita (WordPress):** https://matsafour.mtsn4jombang.sch.id/
- **Dokumentasi utama:** [Master Dokumen V1.1](docs/MASTER-DOKUMEN-V1.1.md)
- **Status:** P1 prototipe visual FIX; P2 fondasi website statis FIX (disetujui pengelola). Migrasi WordPress belum dilakukan.

## Konsep

Halaman utama menampilkan ikon dalam komposisi lingkaran interaktif untuk layanan publik, termasuk **MatsaFour / Berita** dan **SLA-SKS**. Deretan navigasi bawah membuka area **Layanan Manajemen Madrasah** dengan identitas desain yang konsisten.

Acuan struktur visual: [OSDM UNSAM](https://osdm.unsam.ac.id/); acuan nuansa warna hijau: [RSU](https://rsu.edu.ph/). Keduanya merupakan referensi desain, bukan template yang disalin.

## Inventaris layanan

| Layanan | Alamat |
|---|---|
| MatsaFour / Berita | https://matsafour.mtsn4jombang.sch.id/ |
| SLA-SKS | https://sla-sks.mtsn4jombang.sch.id/ |
| ProGuru | https://proguru.mtsn4jombang.sch.id/ |
| Sarpras | https://sarpras.mtsn4jombang.sch.id/ |
| Kantin | https://kantin.mtsn4jombang.sch.id/ |
| SisFour | https://sisfour.mtsn4jombang.sch.id/ |
| SAPA | https://sapa.mtsn4jombang.sch.id/ |
| Pengumuman | https://pengumuman.mtsn4jombang.sch.id/ |
| KMP-RDM | https://kmp-rdm.mtsn4jombang.sch.id/ |
| CBT | https://cbt.mtsn4jombang.sch.id/ |
| RDM | https://rdm.mtsn4jombang.sch.id/ |

> URL adalah pintu masuk masing-masing sistem; autentikasi tetap ditangani oleh aplikasi yang bersangkutan. Pembagian akhir antara portal utama dan manajemen masih dalam tahap finalisasi.

## Alur kerja

**Master Dokumen → Mockup → Persetujuan → Implementasi bertahap → QA → FIX → Pull Request → Merge.**

Gunakan branch terpisah untuk setiap tahap. Jangan commit data privat, konfigurasi produksi, atau backup database ke repository.

## Menjalankan di localhost (P2)

Folder lokal: `E:\\xampp\\htdocs\\mtsn4jombang-portal`. Buka **http://localhost/mtsn4jombang-portal/** saat Apache XAMPP berjalan, atau buka `index.html` secara langsung di browser.

Website statis tanpa database dan build tools. Struktur aktif:

```text
index.html
assets/css/portal.css
assets/js/portal.js
assets/img/LogoFlat.svg
```

Folder `prototypes/p1/` tetap dipertahankan sebagai arsip desain **FIX**. Jangan mengedit folder arsip untuk mengubah website aktif.

**Penting:** domain produksi masih berisi WordPress; jangan deploy konten `index.html` ke root produksi sebelum proses migrasi dan persetujuan rilis.

Checklist P2: [docs/P2-QA.md](docs/P2-QA.md).
