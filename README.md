# Portal Digital MTsN 4 Jombang

Repository pengembangan **Portal Digital Terpadu MTsN 4 Jombang**, gerbang navigasi interaktif menuju layanan publik dan layanan manajemen madrasah.

- **Domain portal utama:** https://mtsn4jombang.sch.id/
- **Portal berita (WordPress):** https://matsafour.mtsn4jombang.sch.id/
- **Dokumentasi utama:** [Master Dokumen V1.1](docs/MASTER-DOKUMEN-V1.1.md)
- **Status:** perencanaan dan persiapan mockup; belum ada implementasi landing page atau migrasi WordPress.

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
