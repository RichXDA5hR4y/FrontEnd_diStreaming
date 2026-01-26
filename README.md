# 💻 FrontEnd - diStreaming

**diStreaming Client** adalah antarmuka pengguna (client-side) untuk platform layanan streaming film. Repositori ini menangani tampilan visual, interaksi pengguna, dan konsumsi data dari API, terpisah dari logika server.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 Deskripsi

Aplikasi sisi klien ini dibangun untuk memberikan pengalaman visual yang responsif bagi pengguna *diStreaming*. Berfungsi sebagai penghubung antara pengguna dan sistem, aplikasi ini menangani manajemen state tampilan, routing halaman, dan komunikasi asinkron dengan Backend API.

## ✨ Fitur Utama

* **Single Page Application (SPA):** Navigasi antar halaman yang cepat tanpa reload.
* **User Interface:** Desain antarmuka yang bersih untuk Login, Register, dan Katalog Film.
* **Data Consumption:** Mengambil dan menampilkan data dinamis dari RESTful API.
* **State Management:** Pengelolaan data sesi pengguna (token auth) di sisi klien.
* **Responsive Layout:** Penyesuaian tampilan otomatis untuk perangkat Desktop dan Mobile.

## 🛠️ Tech Stack

Teknologi yang digunakan dalam pembangunan frontend ini:

* **Library:** React.js
* **Routing:** React Router DOM
* **HTTP Client:** Axios
* **Styling:** CSS / Tailwind CSS / Bootstrap
* **Version Control:** Git & GitHub

## 📂 Struktur Direktori

Berikut adalah susunan folder utama dalam proyek ini:
* `src/components`: Menyimpan elemen UI yang dapat digunakan kembali (Navbar, Card, dll).
* `src/pages`: Menyimpan halaman utama aplikasi (Home, Login, Detail).
* `src/services`: Menyimpan konfigurasi koneksi ke API (Axios).
* `public`: Menyimpan aset statis.

## 🚀 Cara Menjalankan (Installation)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi frontend di mesin lokal:

1.  **Clone repositori:**
    ```bash
    git clone [https://github.com/RichXDA5hR4y/FrontEnd_diStreaming.git](https://github.com/RichXDA5hR4y/FrontEnd_diStreaming.git)
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd FrontEnd_diStreaming
    ```

3.  **Install dependencies (NPM):**
    ```bash
    npm install
    ```

4.  **Konfigurasi Environment (Opsional):**
    * Jika menggunakan file `.env`, sesuaikan URL API Backend Anda di sini.

5.  **Jalankan Aplikasi:**
    ```bash
    npm start
    ```
    Aplikasi akan berjalan di `http://localhost:3000`.

## 👤 Author

**Rayneldis Richard Tandirerung, S.Inf.**
* **Role:** Freelance Programmer, Junior Full Stack Web Developer
* **GitHub:** [RichXDA5hR4y](https://github.com/RichXDA5hR4y)
  
Dibuat untuk tujuan edukasi dan portofolio pengembangan web.

Pengembangan lanjutan mungkin bisa dilakukan nanti jika diperlukan.
