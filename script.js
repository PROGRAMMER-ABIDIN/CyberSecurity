const materi = {
    "Dasar Keamanan Siber": {
        caraKerja: "Keamanan siber berfokus pada perlindungan sistem, jaringan, dan data dari ancaman digital. Penyerang menggunakan berbagai metode seperti eksploitasi kerentanan perangkat lunak, pencurian data melalui phishing, atau serangan brute force untuk menebak kata sandi.",
        caraMengatasi: [
            "Gunakan kata sandi yang kuat dan unik untuk setiap akun.",
            "Aktifkan autentikasi dua faktor (2FA).",
            "Perbarui perangkat lunak secara teratur.",
            "Pendidikan keamanan siber bagi pengguna."
        ],
        contoh: [
            "Phishing: Email palsu yang tampak seperti dari bank, meminta Anda memasukkan data sensitif.",
            "Malware: Program berbahaya yang menyamar sebagai software asli untuk mencuri informasi."
        ],
        dampak: [
            "Kehilangan data pribadi seperti informasi keuangan.",
            "Kerugian finansial akibat pencurian atau pemerasan.",
            "Kehilangan reputasi bagi perusahaan yang gagal melindungi data pengguna."
        ],
        kelebihan: [
            "Melindungi aset digital secara menyeluruh.",
            "Meningkatkan kesadaran keamanan pada pengguna.",
            "Mencegah kerugian akibat serangan siber."
        ]
    },
    "Keamanan Jaringan": {
        caraKerja: "Keamanan jaringan bertujuan melindungi jaringan internal dari akses yang tidak sah dengan teknologi seperti firewall, IDS/IPS, dan VPN untuk memfilter lalu lintas yang masuk dan keluar serta mengenkripsi koneksi.",
        caraMengatasi: [
            "Konfigurasi firewall untuk membatasi lalu lintas yang mencurigakan.",
            "Gunakan IDS/IPS untuk memonitor dan menghentikan aktivitas berbahaya.",
            "Implementasikan VPN untuk melindungi data selama transmisi.",
            "Ganti kata sandi default pada perangkat jaringan."
        ],
        contoh: [
            "Firewall: Blokir akses dari alamat IP yang mencurigakan.",
            "VPN: Koneksi aman ke kantor melalui jaringan Wi-Fi publik."
        ],
        dampak: [
            "Akses jaringan tanpa izin yang dapat menyebabkan pencurian data.",
            "Serangan DDoS yang mengganggu operasional.",
            "Penyadapan data selama transmisi tanpa enkripsi."
        ],
        kelebihan: [
            "Meningkatkan keamanan infrastruktur jaringan.",
            "Mengurangi risiko serangan berbasis jaringan.",
            "Mendukung koneksi aman melalui VPN."
        ]
    },
    "Penetration Testing": {
        caraKerja: "Penetration testing adalah simulasi serangan terhadap sistem atau jaringan untuk menemukan kerentanan. Penguji menggunakan teknik seperti scanning, exploitation, dan privilege escalation untuk mengidentifikasi kelemahan.",
        caraMengatasi: [
            "Lakukan penetration testing secara berkala.",
            "Gunakan alat pentesting yang andal seperti Metasploit atau Nmap.",
            "Terapkan rekomendasi setelah penemuan kerentanan.",
            "Perbarui dan tambal perangkat lunak secara rutin."
        ],
        contoh: [
            "Black Box Testing: Penetration testing tanpa informasi awal tentang sistem target.",
            "White Box Testing: Pengujian dengan akses penuh terhadap informasi sistem."
        ],
        dampak: [
            "Identifikasi dini kelemahan yang dapat dieksploitasi penyerang.",
            "Meningkatkan keamanan sistem melalui penemuan dan perbaikan kerentanan.",
            "Mencegah potensi serangan di masa depan."
        ],
        kelebihan: [
            "Mendeteksi kerentanan sebelum dieksploitasi.",
            "Memperkuat pertahanan keamanan sistem.",
            "Meningkatkan kepercayaan pengguna."
        ]
    },
    "Macam-Macam Virus": {
        caraKerja: "Virus adalah program berbahaya yang mereplikasi dirinya sendiri dan menyebar ke perangkat lain. Virus sering menyusup melalui file yang terinfeksi dan mengubah atau merusak data sistem.",
        caraMengatasi: [
            "Gunakan software antivirus yang andal dan perbarui secara rutin.",
            "Jangan unduh file atau lampiran dari sumber yang tidak dikenal.",
            "Lakukan pemindaian sistem secara berkala.",
            "Hindari penggunaan perangkat eksternal yang tidak aman."
        ],
        contoh: [
            "Virus Boot Sector: Menyerang sektor boot perangkat penyimpanan.",
            "Macro Virus: Menginfeksi file dokumen seperti Word dan Excel."
        ],
        dampak: [
            "Kerusakan atau kehilangan data penting.",
            "Komputer berjalan lambat atau tidak stabil.",
            "Kerugian finansial akibat kerusakan sistem."
        ],
        kelebihan: [
            "Memberi wawasan tentang ancaman perangkat.",
            "Mendorong penggunaan perangkat lunak keamanan.",
            "Meningkatkan kesadaran akan file mencurigakan."
        ]
    },
    "Jenis-Jenis Deface": {
        caraKerja: "Deface adalah jenis serangan di mana penyerang mengubah tampilan halaman web secara tidak sah. Serangan ini biasanya dilakukan dengan mengeksploitasi kerentanan di sistem web untuk mendapatkan akses.",
        caraMengatasi: [
            "Perbarui CMS (Content Management System) dan plugin secara teratur.",
            "Gunakan kata sandi yang kuat untuk akun admin.",
            "Gunakan WAF (Web Application Firewall) untuk memblokir akses berbahaya.",
            "Lakukan backup website secara berkala."
        ],
        contoh: [
            "Full Deface: Seluruh halaman web diganti dengan konten yang tidak sah.",
            "Partial Deface: Hanya sebagian konten diubah, seperti menambah teks atau gambar."
        ],
        dampak: [
            "Kehilangan kepercayaan pengguna terhadap situs web.",
            "Dampak reputasi negatif bagi perusahaan.",
            "Biaya pemulihan dan perbaikan situs yang signifikan."
        ],
        kelebihan: [
            "Meningkatkan fokus pada keamanan aplikasi web.",
            "Memotivasi penggunaan WAF untuk perlindungan."
        ]
    },
    "Macam-Macam Malware Lainnya": {
        caraKerja: "Malware adalah istilah umum untuk perangkat lunak berbahaya yang dirancang untuk merusak, mencuri, atau memata-matai data. Jenis-jenis malware mencakup virus, trojan, ransomware, spyware, dan lainnya.",
        caraMengatasi: [
            "Instal anti-malware dan lakukan pemindaian rutin.",
            "Hindari mengunduh aplikasi dari sumber yang tidak tepercaya.",
            "Aktifkan firewall untuk mencegah akses tidak sah.",
            "Pendidikan keamanan kepada pengguna untuk mengenali ancaman."
        ],
        contoh: [
            "Ransomware: Mengunci file pengguna dan meminta tebusan.",
            "Spyware: Memata-matai aktivitas pengguna dan mencuri data sensitif."
        ],
        dampak: [
            "Pencurian data pribadi dan finansial.",
            "Kerugian finansial karena pembayaran tebusan atau kerusakan sistem.",
            "Penggunaan perangkat untuk aktivitas ilegal tanpa sepengetahuan pemilik."
        ],
        kelebihan: [
            "Memberikan wawasan jenis ancaman malware.",
            "Meningkatkan langkah pencegahan pengguna."
        ]
    },
    "Enkripsi dan Dekripsi": {
        caraKerja: "Enkripsi adalah proses mengubah data menjadi format yang tidak dapat dibaca (ciphertext) menggunakan algoritma dan kunci tertentu. Dekripsi adalah kebalikan dari enkripsi, yaitu mengembalikan data terenkripsi ke bentuk aslinya (plaintext) menggunakan kunci yang benar.",
        caraMengatasi: [
            "Gunakan algoritma enkripsi yang kuat seperti AES atau RSA.",
            "Jaga keamanan kunci enkripsi dengan metode penyimpanan yang aman.",
            "Aktifkan enkripsi ujung-ke-ujung untuk komunikasi penting.",
            "Perbarui perangkat lunak enkripsi secara rutin untuk mengatasi kerentanan."
        ],
        contoh: [
            "HTTPS: Menggunakan enkripsi SSL/TLS untuk melindungi data saat bertransaksi online.",
            "Pesan WhatsApp: Menggunakan enkripsi ujung-ke-ujung untuk melindungi pesan.",
            "BitLocker: Alat enkripsi bawaan Windows untuk mengenkripsi hard disk."
        ],
        dampak: [
            "Meningkatkan keamanan data dan privasi.",
            "Mengurangi risiko pencurian data saat transmisi.",
            "Kehilangan akses data jika kunci enkripsi hilang."
        ],
        kelebihan: [
            "Melindungi data sensitif dari akses tidak sah.",
            "Meningkatkan kepercayaan dalam komunikasi digital.",
            "Mengurangi risiko kebocoran data selama transmisi.",
            "Memenuhi standar keamanan dan privasi global seperti GDPR dan HIPAA."
        ]
    },
    "Pengertian Cyber Security": {
        caraKerja: "Cyber Security adalah praktik melindungi sistem, jaringan, perangkat keras, perangkat lunak, dan data dari ancaman digital seperti serangan siber, pencurian data, dan penyusupan jaringan.",
        caraMengatasi: [
            "Implementasi sistem keamanan yang berlapis, seperti firewall dan antivirus.",
            "Pendidikan pengguna mengenai praktik keamanan yang baik.",
            "Audit dan uji coba keamanan secara berkala.",
            "Gunakan autentikasi multifaktor (MFA) untuk akses sistem."
        ],
        contoh: [
            "Penggunaan VPN untuk melindungi data selama koneksi internet.",
            "Penerapan firewall untuk memblokir akses yang mencurigakan."
        ],
        dampak: [
            "Melindungi aset digital dan informasi pribadi dari pencurian.",
            "Mengurangi risiko serangan siber yang dapat merugikan finansial.",
            "Meningkatkan kepercayaan pengguna terhadap sistem dan layanan digital."
        ],
        kelebihan: [
            "Memberikan perlindungan menyeluruh terhadap ancaman digital.",
            "Meningkatkan keamanan transaksi online dan komunikasi.",
            "Mendukung kelangsungan bisnis dengan mencegah kerugian akibat serangan siber.",
            "Mematuhi peraturan privasi dan keamanan yang berlaku, seperti GDPR."
        ]
    },
    "Pengertian Kerentanan": {
        caraKerja: "Kerentanan adalah kelemahan dalam sistem, jaringan, atau perangkat lunak yang dapat dieksploitasi oleh penyerang untuk mendapatkan akses tidak sah atau merusak sistem.",
        caraMengatasi: [
            "Lakukan audit keamanan secara berkala untuk mengidentifikasi kerentanan.",
            "Perbarui perangkat lunak dan aplikasi untuk menambal celah keamanan.",
            "Gunakan alat deteksi kerentanan seperti Nessus atau OpenVAS.",
            "Terapkan prinsip keamanan seperti 'least privilege' untuk membatasi akses."
        ],
        contoh: [
            "Bug dalam perangkat lunak yang memungkinkan injeksi SQL.",
            "Konfigurasi server yang salah sehingga memungkinkan akses anonim."
        ],
        dampak: [
            "Menyebabkan kehilangan data jika dieksploitasi oleh penyerang.",
            "Potensi kerusakan sistem atau pengambilalihan kendali oleh pihak yang tidak sah.",
            "Risiko pencurian identitas atau penyalahgunaan data pribadi."
        ],
        kelebihan: [
            "Memberikan wawasan tentang kelemahan sistem.",
            "Mendorong pengembangan sistem yang lebih aman.",
            "Memotivasi organisasi untuk memperkuat langkah keamanan."
        ]
    },
    "Skill Cyber Security": {
        caraKerja: "Skill dalam keamanan siber mencakup kemampuan teknis dan analitis untuk melindungi sistem dari serangan siber, mengidentifikasi kerentanan, dan merespons insiden dengan cepat.",
        caraMengatasi: [
            "Pelajari dasar-dasar jaringan dan protokol keamanan.",
            "Kuasai alat dan teknik pentesting seperti Wireshark dan Metasploit.",
            "Pahami enkripsi dan mekanisme autentikasi.",
            "Terus belajar tentang ancaman siber terbaru dan teknik mitigasinya."
        ],
        contoh: [
            "Analisis lalu lintas jaringan untuk mendeteksi aktivitas mencurigakan.",
            "Pengujian penetrasi untuk menemukan kerentanan dalam sistem."
        ],
        dampak: [
            "Kemampuan untuk melindungi infrastruktur IT dari serangan.",
            "Mampu mengidentifikasi dan merespons insiden keamanan secara efektif.",
            "Meningkatkan peluang karir di bidang keamanan siber yang semakin diminati."
        ],
        kelebihan: [
            "Meningkatkan peluang karir di bidang keamanan.",
            "Kemampuan untuk melindungi aset digital secara proaktif.",
            "Memungkinkan organisasi lebih tanggap terhadap ancaman."
        ]
    },
    "Keamanan Data Pribadi": {
        caraKerja: "Keamanan data pribadi berfokus pada perlindungan informasi pribadi dari akses yang tidak sah dan penggunaan yang tidak sah, melalui pengamanan data secara teknis dan regulasi yang ketat.",
        caraMengatasi: [
            "Gunakan enkripsi untuk melindungi data saat disimpan atau ditransmisikan.",
            "Hindari membagikan data pribadi di platform yang tidak tepercaya.",
            "Gunakan pengaturan privasi yang ketat di aplikasi dan media sosial.",
            "Lakukan backup data pribadi secara berkala di tempat yang aman."
        ],
        contoh: [
            "Menggunakan password manager untuk menyimpan kata sandi dengan aman.",
            "Mengaktifkan verifikasi dua langkah untuk akun online."
        ],
        dampak: [
            "Mencegah pencurian identitas dan penyalahgunaan data.",
            "Melindungi informasi sensitif seperti data keuangan dan kesehatan.",
            "Mengurangi risiko terkena serangan sosial engineering."
        ],
        kelebihan: [
            "Melindungi individu dari pencurian identitas.",
            "Meningkatkan kepercayaan pengguna terhadap layanan digital.",
            "Mematuhi regulasi perlindungan data, seperti GDPR atau UU PDP di Indonesia."
        ]
    },
};

// Function to open the selected module
function bukaModul(topik) {
    const materiContent = document.getElementById('materi-content');
    const materiDetail = materi[topik];

    if (materiDetail) {
        const htmlContent = `
            <h2>${topik}</h2>
            <h3>Cara Kerja</h3>
            <p>${materiDetail.caraKerja}</p>
            <h3>Cara Mengatasi</h3>
            <ul>
                ${materiDetail.caraMengatasi.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Contoh</h3>
            <ul>
                ${materiDetail.contoh.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Dampak</h3>
            <ul>
                ${materiDetail.dampak.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Kelebihan</h3>
            <ul>
              ${materiDetail.kelebihan.map(item => `<li>${item}</li>`).join('')}
            </ul>

        `;
        // Inject content and toggle visibility
        materiContent.innerHTML = htmlContent;
        document.getElementById('modul').classList.add('hidden');
        document.getElementById('materi-container').classList.remove('hidden');
    }
}

// Function to go back to the module list
function kembaliKeModul() {
    document.getElementById('modul').classList.remove('hidden');
    document.getElementById('materi-container').classList.add('hidden');
}
