/**
 * PORTOFOLIO DIGITAL REFLEKSI PEMBELAJARAN - SEMINAR PPG
 * Universitas Kristen Satya Wacana (UKSW)
 * Mahasiswa: Anisa Nur Azizah, S.Kom
 * Dosen Pengampu: Hanita Yulia, M.Pd
 */

// Bank Data Refleksi Mata Kuliah Lengkap (Semester 1 & Semester 2)
const reflectionData = {
  // === SEMESTER 1 ===
  'pma-1': {
    code: 'PPG-101',
    semester: 'Semester 1',
    category: 'Mata Kuliah Inti',
    title: 'PMAD (Pembelajaran Mendalam dan Asesmen Dasar)',
    subtitle: 'Pendekatan Teaching at The Right Level (TaRL) & Understanding by Design (UbD)',
    sks: '3 SKS',
    icon: 'book-open',
    color: 'blue',
    pdfUrl: 'https://drive.google.com/file/d/1R7AnypeddHcDwjavbtY9u2HFgwsPrroy/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah Pembelajaran Mendalam dan Asesmen Dasar mendalami perancangan kurikulum berbasis backward design (Understanding by Design) dan asesmen diagnostik yang responsif terhadap kesiapan belajar siswa melalui pendekatan Teaching at The Right Level (TaRL). Sebagai calon guru Informatika, saya merancang modul ajar logika pemrograman dan algoritma dengan pemetaan awal kesiapan kognitif peserta didik.',
      
      evaluation: 'Penerapan modul ajar berbasis UbD pada siklus pembelajaran awal sangat berhasil membantu siswa memahami "Big Ideas" algoritma, bukan sekadar menghafal sintaks kode. Namun, tantangan muncul dalam menyusun rubrik asesmen autentik yang mencakup ragam diferensiasi konten dan produk bagi siswa yang belum memiliki perangkat laptop mandiri.',
      analysis: 'Keberhasilan asesmen sangat bergantung pada ketepatan asesmen diagnostik non-kognitif dan kognitif awal. Ketika guru mengenali baseline kompetensi siswa, desain pembelajaran tidak lagi one-size-fits-all, melainkan bertransformasi menjadi pengalaman belajar yang personal, bermakna, dan inklusif.',
      conclusion: 'Prinsip pengajaran yang efektif selalu menempatkan capaian pemahaman mendalam di awal perencanaan (desired results), diikuti bukti asesmen yang valid (evidence), baru kemudian rangkaian aktivitas belajar (learning experiences).',
      actionPlan: 'Saya akan secara konsisten menerapkan asesmen diagnostik berkala di setiap awal materi informatika dan mengintegrasikan rubrik analitik berbasis performa proyek untuk mengukur kompetensi problem-solving peserta didik.'
    },
    artifacts: [
      { name: 'Modul Ajar Informatika Berbasis UbD (Algoritma & Pemrograman)', type: 'PDF / Dokumen Modul', size: '2.4 MB' },
      { name: 'Instrumen Asesmen Diagnostik Kognitif & Non-Kognitif Berbasis Google Form', type: 'Spreadsheet & Kuis', size: '1.1 MB' },
      { name: 'Rubrik Penilaian Unjuk Kerja Proyek Scratch / Blockly', type: 'Matriks Penilaian', size: '850 KB' }
    ]
  },

  'filosofi': {
    code: 'PPG-102',
    semester: 'Semester 1',
    category: 'Mata Kuliah Dasar Kependidikan',
    title: 'Filosofi Pendidikan Indonesia',
    subtitle: 'Meneladani Konsep Among Ki Hadjar Dewantara Menuju Profil Pelajar Pancasila',
    sks: '2 SKS',
    icon: 'compass',
    color: 'amber',
    pdfUrl: '',
    gibbs: {
      description: 'Mata kuliah ini mengkaji landasan historis, sosiologis, dan filosofis pendidikan nasional Indonesia dengan rujukan utama pemikiran Ki Hadjar Dewantara, sistem Among (Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani), serta prinsip kodrat alam dan kodrat zaman.',
      feeling: 'Saya merasakan pergeseran paradigma (paradigm shift) yang sangat mendalam. Sebagai sarjana komputer, orientasi saya sebelumnya kerap terfokus pada ketepatan teknis dan logika biner. Filosofi KHD menyadarkan saya bahwa mengajar adalah memerdekakan dan "menuntun" segala kodrat yang ada pada anak, bukan menuntut atau memaksa.',
      evaluation: 'Konsep kodrat zaman sangat selaras dengan pembelajaran Informatika abad 21. Namun, tantangannya adalah bagaimana menjaga kearifan lokal dan karakter moral peserta didik di tengah derasnya arus digitalisasi dan ketergantungan media sosial.',
      analysis: 'Pendidikan yang berpihak pada anak mengartikan bahwa setiap murid lahir dengan potensinya masing-masing yang unik (bukan tabularasa). Guru bertindak laksana petani yang menyemai benih: padi dirawat dengan perlakuan padi, jagung dirawat selayaknya jagung. Di kelas teknologi, kebebasan berekspresi secara digital harus dipayungi etika digital (cyber wellness).',
      conclusion: 'Pendidik sejati bukan sekadar penyampai materi pelajaran, melainkan teladan pembentukan budi pekerti luhur yang memerdekakan lahir dan batin peserta didik.',
      actionPlan: 'Menjadikan ruang kelas informatika sebagai laboratorium kemerdekaan belajar yang humanis, membimbing murid memanfaatkan teknologi kecerdasan buatan dan coding untuk kebajikan sosial, bukan sekadar mengejar nilai akademis.'
    },
    artifacts: [
      { name: 'Aksi Nyata: Konsep Menuntun Kodrat Zaman pada Pembelajaran Literasi Digital', type: 'Esai Kritis & Video', size: '3.1 MB' },
      { name: 'Infografis Filosofis: Sistem Among dalam Era Revolusi Industri 4.0', type: 'Desain Infografis', size: '1.8 MB' },
      { name: 'Jurnal Reflektif: Dari Guru Teknis Menjadi Pamong Edukasi Humanis', type: 'Dokumen Jurnal', size: '920 KB' }
    ]
  },

  'ct': {
    code: 'PPG-103',
    semester: 'Semester 1',
    category: 'Mata Kuliah Selektif/Inti',
    title: 'CT (Computational Thinking)',
    subtitle: 'Integrasi 4 Pilar Berpikir Komputasional dalam Kurikulum Pembelajaran',
    sks: '2 SKS',
    icon: 'cpu',
    color: 'teal',
    pdfUrl: '',
    gibbs: {
      description: 'Mata kuliah Computational Thinking (CT) melatih penerapan 4 pilar dekonstruksi masalah: Dekomposisi, Pengenalan Pola (Pattern Recognition), Abstraksi, dan Perancangan Algoritma. Materi mencakup pemecahan soal Bebras, integrasi CT unplugged maupun plugged dalam berbagai mata pelajaran.',
      feeling: 'Materi ini merupakan habitat keilmuan saya sebagai S.Kom, sehingga saya merasa sangat antusias dan percaya diri. Namun, tantangan terbesar adalah bagaimana mendemistifikasi konsep abstrak CT agar dapat dipahami dan dipraktikkan dengan mudah oleh murid SMP/SMA tanpa beban sintaksis yang rumit.',
      evaluation: 'Eksperimen kegiatan "CT Unplugged" menggunakan teka-teki logika kartu dan permainan papan terbukti menaikkan antusiasme partisipasi murid hingga 95%. Siswa yang mulanya takut matematika/koding menjadi sangat aktif berdiskusi.',
      analysis: 'CT bukanlah sekadar coding atau belajar komputer, melainkan metode pemecahan masalah (problem-solving methodology) lintas disiplin ilmu. Menguasai CT membekali peserta didik dengan kecakapan bernalar kritis (critical thinking) dan metakognisi untuk memecahkan persoalan dunia nyata.',
      conclusion: 'Pengenalan CT paling efektif dilakukan melalui pendekatan kontekstual dan bermain bermakna (gamified learning) sebelum beralih ke implementasi program perangkat lunak.',
      actionPlan: 'Menyusun lembar kerja peserta didik (LKPD) berbasis tantangan Bebras dan membimbing guru-guru di sekolah mitra PPL dalam mengintegrasikan pola pikir komputasional ke dalam mata pelajaran sains dan IPS.'
    },
    artifacts: [
      { name: 'Paket Modul CT Unplugged: Pemecahan Masalah Sehari-hari untuk Siswa', type: 'Modul Interaktif', size: '4.2 MB' },
      { name: 'Analisis Bank Soal Bebras Challenge untuk Tingkat Menengah', type: 'Dokumen Analisis', size: '1.5 MB' },
      { name: 'Video Simulasi Algoritma Sorting Menggunakan Tari & Kartu Interaktif', type: 'Media Video', size: '15.3 MB' }
    ]
  },

  'growth-mindset': {
    code: 'PPG-104',
    semester: 'Semester 1',
    category: 'Mata Kuliah Pengembangan',
    title: 'Growth Mindset & Karakteristik Siswa',
    subtitle: 'Membangun Ketangguhan Belajar & Pola Pikir Berkembang dalam Pendidikan',
    sks: '2 SKS',
    icon: 'trending-up',
    color: 'emerald',
    pdfUrl: '',
    gibbs: {
      description: 'Mengkaji teori psikologi Carol Dweck mengenai Fixed Mindset vs Growth Mindset, neuroplastisitas otak, kekuatan kata "Belum" (The Power of Yet), serta strategi umpan balik yang mengapresiasi proses usaha dan ketekunan (effort-based praise) daripada bakat bawaan.',
      feeling: 'Saya terkesiap menyadari betapa seringnya kita sebagai orang dewasa tanpa sadar menanamkan fixed mindset kepada siswa dengan ucapan seperti "kamu memang pintar dari lahir" atau membiarkan siswa berkata "saya tidak punya bakat di bidang komputer".',
      evaluation: 'Ketika saya menerapkan budaya "The Power of Yet" di lab komputer—misal saat program mengalami bug, siswa dilatih mengatakan "koding saya belum berjalan, saya perlu menelusuri log error"—terjadi penurunan drastis pada tingkat frustrasi siswa.',
      analysis: 'Kegagalan dalam koding atau belajar adalah data, bukan identitas diri. Membangun growth mindset menumbuhkan rasa percaya diri, resiliensi akademis, dan kemauan untuk menerima kritik konstruktif.',
      conclusion: 'Pola pikir berkembang dapat dipupuk secara sistematis melalui pembiasaan bahasa kelas, pemberian kesempatan revisi tugas, dan perayaan proses belajar.',
      actionPlan: 'Merancang lembar refleksi diri siswa "My Coding Journey" yang fokus mencatat perkembangan pemahaman dari "belum paham" menjadi "paham", serta menata poster dinding motivasi growth mindset di ruang kelas.'
    },
    artifacts: [
      { name: 'Panduan Praktik Umpan Balik Guru Berbasis Growth Mindset', type: 'Dokumen Panduan', size: '1.2 MB' },
      { name: 'Lembar Refleksi Metakognitif Siswa: Dari Kesalahan Menuju Solusi', type: 'Form Refleksi', size: '640 KB' },
      { name: 'Kajian Mini Riset: Pengaruh Resiliensi Terhadap Ketahanan Debugging Siswa', type: 'Kertas Kerja', size: '2.1 MB' }
    ]
  },

  'ppl-1': {
    code: 'PPG-105',
    semester: 'Semester 1',
    category: 'Praktik Lapangan Terbimbing',
    title: 'PPL (Praktik Pengalaman Lapangan I)',
    subtitle: 'Observasi Lingkungan Belajar, Asistensi Mengajar, & Praktik Pembelajaran Terbimbing',
    sks: '6 SKS',
    icon: 'users',
    color: 'indigo',
    pdfUrl: '',
    gibbs: {
      description: 'PPL I di sekolah mitra mencakup orientasi lingkungan sekolah, observasi karakteristik peserta didik, manajemen kelas, asistensi mengajar bersama guru pamong, dan pelaksanaan 3 siklus pembelajaran terbimbing dengan format lesson study.',
      feeling: 'Ada degup rasa gugup bercampur antusias ketika pertama kali berdiri di hadapan 36 siswa di kelas nyata. Teori yang dipelajari di bangku kuliah UKSW langsung diuji dengan dinamika riil lapangan: perbedaan kecepatan belajar, masalah perangkat, dan manajemen waktu jam pelajaran.',
      evaluation: 'Dukungan intensif dari Dosen Pembimbing (Ibu Hanita Yulia, M.Pd) dan Guru Pamong sangat krusial. Siklus 1 masih terasa kaku dalam alokasi waktu, namun di Siklus 2 dan 3, transisi aktivitas belajar kelompok dan presentasi siswa berlangsung sangat mengalir.',
      analysis: 'Kunci kesuksesan manajemen kelas adalah relasi empatik yang dibangun sejak menit pertama. Siswa mau belajar bukan karena takut sanksi, melainkan karena merasa dihargai, dilibatkan, dan materi yang disampaikan relevan dengan kehidupan mereka.',
      conclusion: 'Praktik langsung di sekolah mengonversi pengetahuan teoretis menjadi intuisi pedagogis nyata yang tidak ternilai harganya.',
      actionPlan: 'Mendokumentasikan seluruh jurnal refleksi harian PPL I dan memperkaya bank asesmen formatif untuk persiapan PPL II mandiri.'
    },
    artifacts: [
      { name: 'Laporan Komprehensif Observasi Manajemen & Iklim Sekolah Mitra', type: 'Laporan Lengkap', size: '5.6 MB' },
      { name: 'Rencana Pelaksanaan Pembelajaran (RPP) Siklus 1, 2, & 3 Terbimbing', type: 'Perangkat Ajar', size: '3.8 MB' },
      { name: 'Video Dokumentasi Praktik Pembelajaran Terbimbing Siklus 3', type: 'Tautan Rekaman PPL', size: 'Video Drive' }
    ]
  },

  'ppdp': {
    code: 'PPG-106',
    semester: 'Semester 1',
    category: 'Mata Kuliah Inti',
    title: 'PPDP (Pemahaman tentang Peserta Didik & Pembelajarannya)',
    subtitle: 'Teori Perkembangan Kognitif, Sosio-Emosional, & Profiling Karakteristik Belajar',
    sks: '3 SKS',
    icon: 'heart-handshake',
    color: 'sky',
    pdfUrl: 'https://drive.google.com/file/d/1R7AnypeddHcDwjavbtY9u2HFgwsPrroy/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah ini memperdalam teori perkembangan psikologis (Piaget, Vygotsky, Erikson, Bronfenbrenner), konsep Developmentally Appropriate Practice (DAP), Culturally Responsive Teaching (CRT), dan penyusunan instrumen profiling peserta didik.',
      feeling: 'Saya merasa tercerahkan karena kini memandang perilaku siswa di kelas bukan sebagai "kenakalan" melainkan sebagai manifestasi tahap perkembangan emosi atau respons terhadap lingkungan mikrosistem keluarganya.',
      evaluation: 'Penyusunan profil belajar siswa kelas X membantu saya mengidentifikasi beragam gaya belajar (kinestetik, visual, auditori) dan tingkat kemandirian belajar digital yang sangat variatif.',
      analysis: 'Pembelajaran yang berpusat pada murid menuntut guru memiliki kepekaan sosio-kultural. Integrasi budaya lokal (CRT) dalam topik Informatika—misal studi kasus digitalisasi UMKM daerah sekitar UKSW—meningkatkan rasa relevansi belajar murid.',
      conclusion: 'Memahami siapa yang kita ajar sama pentingnya, bahkan lebih mendasar, daripada materi apa yang kita ajarkan.',
      actionPlan: 'Melakukan profiling komprehensif di awal setiap tahun ajaran dan menyusun sosiogram kelas guna merancang kelompok belajar yang kolaboratif dan saling melengkapi.'
    },
    artifacts: [
      { name: 'Laporan Hasil Profiling Karakteristik & Gaya Belajar Peserta Didik', type: 'Laporan Analitik', size: '3.4 MB' },
      { name: 'Modul Pembelajaran Bermuatan Culturally Responsive Teaching (CRT)', type: 'Perangkat Modul', size: '2.7 MB' },
      { name: 'Panduan Observasi Perkembangan Sosio-Emosional Remaja Usia Sekolah Menengah', type: 'Rubrik Panduan', size: '950 KB' }
    ]
  },

  // === SEMESTER 2 ===
  'pse': {
    code: 'PPG-201',
    semester: 'Semester 2',
    category: 'Mata Kuliah Inti',
    title: 'PSE (Pembelajaran Sosial dan Emosional)',
    subtitle: 'Implementasi 5 Kompetensi CASEL & Mindfulness (Kesadaran Penuh) di Kelas',
    sks: '3 SKS',
    icon: 'smile',
    color: 'emerald',
    pdfUrl: '',
    gibbs: {
      description: 'Mata kuliah PSE berfokus pada 5 kompetensi sosial-emosional menurut kerangka CASEL: Self-awareness, Self-management, Social awareness, Relationship skills, dan Responsible decision-making, serta teknik STOP (Stop, Take a breath, Observe, Proceed).',
      feeling: 'Sangat melegakan dan transformatif. Bukan hanya untuk siswa, teknik mindfulness juga membantu saya sebagai guru dalam mengelola stres, kelelahan mental, dan menjaga ketenangan emosional saat menghadapi situasi kelas yang menantang.',
      evaluation: 'Penerapan "Roda Emosi" di awal pelajaran informatika dan jeda 2 menit teknik STOP sebelum ujian praktik coding terbukti menurunkan kecemasan siswa dan menaikkan fokus hingga 80%.',
      analysis: 'Emosi adalah pintu gerbang kognisi. Otak yang berada dalam keadaan terancam atau stres tinggi (amygdala hijack) tidak akan mampu menyerap logika pemrograman yang kompleks. Suasana kelas yang aman secara emosional (psychological safety) adalah prasyarat mutlak terjadinya pembelajaran efektif.',
      conclusion: 'Kompetensi sosial-emosional bukan sekadar pelengkap kurikulum, melainkan fondasi utama pembentukan karakter unggul dan kecerdasan seutuhnya.',
      actionPlan: 'Mengintegrasikan rutinitas check-in emosi harian melalui aplikasi interaktif digital dan mengajarkan etika komunikasi daring yang berempati.'
    },
    artifacts: [
      { name: 'Modul Integrasi 5 Kompetensi CASEL dalam Pembelajaran Informatika', type: 'Modul Pedagogik', size: '2.9 MB' },
      { name: 'Lembar Panduan Praktik Teknik STOP & Latihan Kesadaran Penuh', type: 'Panduan Saku', size: '780 KB' },
      { name: 'Aksi Nyata: Budaya Positif & Lingkungan Belajar Inklusif Bebas Bullying', type: 'Laporan Aksi Nyata', size: '2.1 MB' }
    ]
  },

  'pma-2': {
    code: 'PPG-202',
    semester: 'Semester 2',
    category: 'Mata Kuliah Inti',
    title: 'PMA Lanjut (Prinsip Pengajaran & Asesmen II)',
    subtitle: 'Diferensiasi Pembelajaran Lanjut, Asesmen Autentik Portofolio, & Refleksi Berkelanjutan',
    sks: '3 SKS',
    icon: 'layers',
    color: 'blue',
    pdfUrl: '',
    gibbs: {
      description: 'Melanjutkan PMA I, mata kuliah ini menekankan diferensiasi mendalam (konten, proses, produk, lingkungan belajar), asesmen autentik berbasis portofolio karya digital, serta perbaikan berkelanjutan berbasis siklus reflektif.',
      feeling: 'Saya merasa tertantang merancang diferensiasi produk di mana siswa boleh memilih menunjukkan kompetensi algoritmanya lewat pembuatan aplikasi web, animasi interaktif, atau infografis arsitektur sistem.',
      evaluation: 'Tingkat keterlibatan murid melonjak tajam karena mereka merasa memiliki otonomi (agency) atas karya mereka. Penilaian memerlukan waktu lebih banyak, namun hasil karya siswa melebihi ekspektasi standar kurikulum.',
      analysis: 'Diferensiasi bukanlah memperlakukan setiap anak dengan tugas yang berbeda secara individual, melainkan menyediakan beberapa jalur pencapaian kompetensi yang berkeadilan sesuai minat dan kesiapan mereka.',
      conclusion: 'Asesmen portofolio digital memberikan gambaran menyeluruh tentang perjalanan pertumbuhan kompetensi siswa, bukan sekadar potret angka sesaat.',
      actionPlan: 'Membangun rubrik penilaian bertingkat (tiered rubrics) dan memanfaatkan sistem e-portofolio bagi siswa untuk memamerkan proyek karya digital mereka sepanjang semester.'
    },
    artifacts: [
      { name: 'Rancangan Pembelajaran Berdiferensiasi 4 Dimensi pada Materi Web Development', type: 'Modul Diferensiasi', size: '3.6 MB' },
      { name: 'Rubrik Penilaian Portofolio Digital Karya Siswa Tingkat Lanjut', type: 'Rubrik Evaluasi', size: '1.3 MB' },
      { name: 'Laporan Evaluasi Efektivitas Model Pembelajaran Project-Based Learning Berdiferensiasi', type: 'Kertas Kerja', size: '2.5 MB' }
    ]
  },

  'project-kepemimpinan': {
    code: 'PPG-203',
    semester: 'Semester 2',
    category: 'Mata Kuliah Praktik Kolaboratif',
    title: 'Project Kepemimpinan',
    subtitle: 'Service Learning: Program Pengabdian Masyarakat & Inovasi Digital Edukasi Berkelanjutan',
    sks: '2 SKS',
    icon: 'flag',
    color: 'rose',
    pdfUrl: '',
    gibbs: {
      description: 'Merancang, mengeksekusi, dan mengevaluasi proyek kepemimpinan sosial berbasis komunitas (Service Learning) dengan kerangka SMART dan metodologi manajemen proyek modern guna menjawab permasalahan nyata di masyarakat sekitar Salatiga.',
      feeling: 'Rasa bangga dan haru yang luar biasa. Bersama tim mahasiswa PPG UKSW, kami berhasil melatih literasi keamanan siber dan dasar pemrograman bagi anak-anak di panti asuhan lokal Salatiga.',
      evaluation: 'Program berjalan sukses dengan tingkat kepuasan mitra 98%. Kendala terbesar adalah sinkronisasi jadwal antaranggota tim dan ketersediaan sarana komputer di lokasi, yang kami atasi dengan metode rotasi laptop mandiri mahasiswa.',
      analysis: 'Kepemimpinan guru abad 21 tidak dibatasi oleh dinding ruang kelas. Seorang pendidik adalah agen transformasi sosial yang mampu memobilisasi sumber daya dan menginspirasi perubahan positif di komunitas.',
      conclusion: 'Kolaborasi lintas keahlian dan kepemimpinan yang melayani (servant leadership) adalah katalis utama keberhasilan proyek kemasyarakatan.',
      actionPlan: 'Menjalin kemitraan berkelanjutan dengan komunitas pemuda dan sekolah marginal untuk program ekstrakurikuler coding gratis pasca kelulusan PPG.'
    },
    artifacts: [
      { name: 'Proposal & Masterplan Proyek Kepemimpinan: Literasi Digital Anak Bangsa', type: 'Dokumen Proyek', size: '4.8 MB' },
      { name: 'Laporan Akuntabilitas & Evaluasi Dampak Sosial Program di Salatiga', type: 'Laporan Akhir', size: '5.2 MB' },
      { name: 'Dokumentasi Galeri & Testimoni Mitra Sasaran Pelatihan', type: 'Media Album', size: 'Album Foto' }
    ]
  },

  'daring-bauran': {
    code: 'PPG-204',
    semester: 'Semester 2',
    category: 'Mata Kuliah Pilihan/Inti',
    title: 'Pembelajaran Daring dan Bauran',
    subtitle: 'Optimalisasi Model Flipped Classroom, LMS Modern, & Pedagogi TPACK',
    sks: '2 SKS',
    icon: 'monitor',
    color: 'violet',
    pdfUrl: '',
    gibbs: {
      description: 'Mengeksplorasi desain blended learning, integrasi framework TPACK (Technological Pedagogical Content Knowledge), pemanfaatan Learning Management System (LMS Moodle/Google Classroom), synchronous vs asynchronous delivery, dan interaktivitas multimedia.',
      feeling: 'Sebagai sarjana ilmu komputer, mata kuliah ini terasa sangat natural. Namun saya belajar bahwa kecanggihan teknologi sama sekali tidak bermakna tanpa desain pedagogis yang kuat di belakangnya.',
      evaluation: 'Penerapan model Flipped Classroom pada materi Basis Data memungkinkan jam tatap muka di lab digunakan sepenuhnya untuk problem-solving dan kolaborasi, bukan sekadar ceramah teori.',
      analysis: 'Teknologi harus berfungsi memperkuat hubungan manusia dan memperdalam pemahaman konsep (amplification of human learning), bukan sekadar menggantikan buku teks fisik menjadi lembar PDF digital.',
      conclusion: 'Keseimbangan antara aktivitas asinkron mandiri yang fleksibel dengan pertemuan tatap muka interaktif adalah formula utama keberhasilan pembelajaran bauran.',
      actionPlan: 'Mengembangkan kursus mini interaktif berbasis microlearning dengan video animasi dan kuis adaptif untuk pengayaan belajar mandiri siswa.'
    },
    artifacts: [
      { name: 'Desain Alur Belajar Blended Learning (Synchronous & Asynchronous Flow)', type: 'Bagan Blueprint', size: '2.3 MB' },
      { name: 'Struktur Course LMS Interaktif Materi Informatika Kelas XI', type: 'Arsip Backup LMS', size: '8.4 MB' },
      { name: 'Video Pembelajaran Mikro (Microlearning) Konsep Struktur Data', type: 'Video Pembelajaran', size: 'Video Drive' }
    ]
  },

  'seminar-ppg': {
    code: 'PPG-205',
    semester: 'Semester 2',
    category: 'Mata Kuliah Puncak (Capstone)',
    title: 'Seminar PPG',
    subtitle: 'Penyusunan & Pengujian Portofolio Digital Reflektif Calon Guru Profesional UKSW',
    sks: '2 SKS',
    icon: 'award',
    color: 'amber',
    // Tempel URL PDF/Google Docs di sini, contoh: 'https://drive.google.com/...'
    pdfUrl: '',
    gibbs: {
      description: 'Mata kuliah kulminasi yang menuntut mahasiswa menyintesiskan seluruh artefak pembelajaran, menarasikan refleksi kritis komprehensif, dan mempresentasikan transformasi diri sebagai calon guru profesional di hadapan Dosen Pembimbing dan Dewan Penguji.',
      feeling: 'Penuh rasa syukur, haru, dan kepuasan intelektual. Melihat kembali portofolio dari awal Semester 1 hingga Semester 2 memperlihatkan betapa besarnya metamorfosis diri saya dari seorang teknisi komputer murni menjadi pendidik yang berjiwa pamong.',
      evaluation: 'Bimbingan terstruktur bersama Ibu Hanita Yulia, M.Pd memberikan ketajaman analisis kritis terhadap artefak portofolio sehingga narasi refleksi memiliki kedalaman akademik yang kokoh.',
      analysis: 'Guru profesional adalah pembelajar sepanjang hayat (reflective practitioner). Guru yang berhenti berefleksi adalah guru yang berhenti bertumbuh.',
      conclusion: 'Portofolio digital ini bukan sekadar syarat kelulusan sertifikasi pendidik, melainkan kompas arah dan peta jalan dedikasi seumur hidup dalam memajukan dunia pendidikan Indonesia.',
      actionPlan: 'Menjadikan portofolio digital ini terus diperbarui (living document) sepanjang perjalanan karier mengajar dan membagikan praktik baik kepada komunitas MGMP Informatika.'
    },
    artifacts: [
      { name: 'Dokumen Narasi Refleksi Holistik Portofolio Digital PPG Prajabatan', type: 'Naskah Komprehensif', size: '6.7 MB' },
      { name: 'Slide Presentasi Ujian Seminar Portofolio di Hadapan Penguji', type: 'Slide Presentasi', size: '7.1 MB' },
      { name: 'Lembar Verifikasi Kelengkapan Artefak Pembelajaran FKIP UKSW', type: 'Lembar Validasi', size: '1.1 MB' }
    ]
  },

  'ppl-2': {
    code: 'PPG-206',
    semester: 'Semester 2',
    category: 'Praktik Lapangan Mandiri',
    title: 'PPL (Praktik Pengalaman Lapangan II)',
    subtitle: 'Praktik Mengajar Mandiri, Penelitian Tindakan Kelas (PTK), & Uji Kinerja (UKin)',
    sks: '8 SKS',
    icon: 'briefcase',
    color: 'indigo',
    pdfUrl: '',
    gibbs: {
      description: 'PPL II merupakan fase pematangan kemandirian mengajar penuh (full teaching load), pelaksanaan siklus PTK kolaboratif, kegiatan ekstrakurikuler sekolah, administrasi persekolahan, serta perekaman video Uji Kinerja (UKin) pembelajaran.',
      feeling: 'Merasa seutuhnya menjadi seorang guru sejati. Kedekatan batin dengan para siswa, kolaborasi dengan rekan sejawat guru di ruang guru, dan tantangan mengajar harian memvalidasi panggilan jiwa saya di dunia keguruan.',
      evaluation: 'Penerapan PTK model Problem-Based Learning berbantuan media koding visual terbukti berhasil meningkatkan ketuntasan hasil belajar siswa dari 58% menjadi 88% pada siklus kedua.',
      analysis: 'Pengelolaan kelas yang kondusif lahir dari persiapan matang, ekspektasi yang jelas, serta kemampuan guru membaca dinamika psikologis kelas secara realtime.',
      conclusion: 'PPL II mengukuhkan kematangan pedagogik, kepribadian, sosial, dan profesional saya sebagai pendidik berintegritas.',
      actionPlan: 'Mempublikasikan hasil Penelitian Tindakan Kelas ke jurnal pendidikan nasional dan terus mengembangkan inovasi pembelajaran di sekolah penugasan.'
    },
    artifacts: [
      { name: 'Laporan Lengkap Penelitian Tindakan Kelas (PTK) Kolaboratif', type: 'Laporan PTK', size: '5.9 MB' },
      { name: 'Perangkat Uji Kinerja (UKin) Modul Ajar, Bahan Ajar, & Asesmen', type: 'Perangkat Lengkap', size: '4.5 MB' },
      { name: 'Rekaman Video Praktik Pembelajaran Mandiri UKin Terstandar', type: 'Tautan Video UKin', size: 'Video UKin' }
    ]
  }
};

// State Aplikasi
let currentView = 'dashboard'; // 'dashboard' atau key mata kuliah
let activeGibbsTab = 'description';

// Inisialisasi Aplikasi Saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  renderCourseCardsGrid();
  lucide.createIcons();
});

// Sistem Tema (Light / Dark Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcons();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const moonIcons = document.querySelectorAll('.theme-icon-moon');
  const sunIcons = document.querySelectorAll('.theme-icon-sun');
  
  moonIcons.forEach(el => el.classList.toggle('hidden', isDark));
  sunIcons.forEach(el => el.classList.toggle('hidden', !isDark));
}

// Event Listeners Navigasi & Interaksi
function setupEventListeners() {
  // Theme Toggle Buttons
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('mobile-theme-toggle')?.addEventListener('click', toggleTheme);

  // Mobile Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  function openDrawer() {
    mobileDrawer.classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('drawer-content').classList.remove('-translate-x-full');
    }, 10);
  }

  function closeDrawer() {
    document.getElementById('drawer-content').classList.add('-translate-x-full');
    setTimeout(() => {
      mobileDrawer.classList.add('hidden');
    }, 250);
  }

  mobileMenuBtn?.addEventListener('click', openDrawer);
  closeDrawerBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  // Navigasi Link Event Handlers (Desktop & Mobile)
  document.querySelectorAll('[data-nav-target]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-nav-target');
      navigateTo(target);
      closeDrawer();
    });
  });

  // Presentation Mode Toggle
  document.getElementById('btn-present')?.addEventListener('click', () => {
    window.print();
  });
}

// Navigasi Tampilan
function navigateTo(target) {
  currentView = target;
  
  const dashboardView = document.getElementById('dashboard-view');
  const reflectionDetailView = document.getElementById('reflection-detail-view');
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');

  // Scroll to top of main content
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (target === 'dashboard') {
    dashboardView.classList.remove('hidden');
    reflectionDetailView.classList.add('hidden');
    breadcrumbCurrent.textContent = 'Dashboard Utama';
    updateActiveNavClasses('dashboard');
  } else if (reflectionData[target]) {
    dashboardView.classList.add('hidden');
    reflectionDetailView.classList.remove('hidden');
    renderReflectionDetail(reflectionData[target], target);
    breadcrumbCurrent.textContent = reflectionData[target].title;
    updateActiveNavClasses(target);
  }

  // Refresh icons
  setTimeout(() => lucide.createIcons(), 50);
}

// Update Active Menu Highlighting
function updateActiveNavClasses(activeTarget) {
  document.querySelectorAll('[data-nav-target]').forEach(item => {
    const target = item.getAttribute('data-nav-target');
    if (target === activeTarget) {
      item.classList.add('text-blue-600', 'dark:text-blue-400', 'font-semibold');
    } else {
      item.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-semibold');
    }
  });
}

// Render Card Preview di Dashboard
function renderCourseCardsGrid() {
  const sem1Container = document.getElementById('sem1-cards-container');
  const sem2Container = document.getElementById('sem2-cards-container');

  if (!sem1Container || !sem2Container) return;

  const sem1Keys = ['pma-1', 'filosofi', 'ct', 'growth-mindset', 'ppl-1', 'ppdp'];
  const sem2Keys = ['pse', 'pma-2', 'project-kepemimpinan', 'daring-bauran', 'seminar-ppg', 'ppl-2'];

  sem1Container.innerHTML = sem1Keys.map(k => createCourseCardHtml(k, reflectionData[k])).join('');
  sem2Container.innerHTML = sem2Keys.map(k => createCourseCardHtml(k, reflectionData[k])).join('');

  // Attach click listeners to cards
  document.querySelectorAll('[data-card-target]').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-card-target');
      navigateTo(target);
    });
  });
}

function createCourseCardHtml(key, course) {
  return `
    <div data-card-target="${key}" class="interactive-card rounded-2xl p-5 cursor-pointer group flex flex-col justify-between relative overflow-hidden">
      <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-blue-400/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/40">
            ${course.code}
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${course.sks}</span>
        </div>
        <h4 class="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
          ${course.title}
        </h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
          ${course.subtitle}
        </p>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400">
        <span class="inline-flex items-center gap-1.5">
          <i data-lucide="file-check" class="w-3.5 h-3.5"></i>
          ${course.artifacts.length} Artefak
        </span>
        <span class="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Buka Refleksi <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>
    </div>
  `;
}


// Render Halaman Detail Refleksi Mata Kuliah
function renderReflectionDetail(course, key) {
  const container = document.getElementById('reflection-detail-view');
  if (!container) return;

  activeGibbsTab = 'description';

  container.innerHTML = `
    <!-- Top Action Bar -->
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <button onclick="navigateTo('dashboard')" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:-translate-x-1">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
        Kembali ke Dashboard
      </button>
      <div class="flex items-center gap-2">
        <button onclick="window.print()" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors">
          <i data-lucide="printer" class="w-4 h-4"></i>
          Cetak Refleksi
        </button>
      </div>
    </div>

    <!-- Course Header Banner -->
    <div class="interactive-card rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/40 dark:from-slate-900 dark:to-slate-850">
      <div class="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/10 via-teal-500/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>
      <div class="relative z-10">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm">
            ${course.semester}
          </span>
          <span class="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            ${course.code} • ${course.sks}
          </span>
          <span class="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40">
            ${course.category}
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          ${course.title}
        </h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          ${course.subtitle}
        </p>
      </div>
    </div>

    <!-- Bagian 1: Refleksi Pengalaman Belajar dalam Konteks Calon Guru -->
    <div class="interactive-card rounded-3xl p-6 sm:p-8 mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">1</div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Refleksi Pengalaman Belajar</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Refleksi pengalaman belajar dalam konteks sebagai calon guru</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${[
          ['Connection', 'book-open', course.gibbs.description],
          ['Challenge', 'circle-help', course.gibbs.evaluation],
          ['Concept', 'lightbulb', course.gibbs.analysis],
          ['Change', 'refresh-cw', course.gibbs.actionPlan]
        ].map(([label, icon, text]) => `
          <article class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80">
            <div class="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
              <i data-lucide="${icon}" class="w-4 h-4"></i>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">${label}</h4>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${text || course.gibbs.feeling || 'Belum ada narasi refleksi.'}</p>
          </article>
        `).join('')}
      </div>
    </div>

    <!-- Bagian 2: Analisis Artefak Pembelajaran -->
    <div class="interactive-card rounded-3xl p-6 sm:p-8 mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">2</div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Analisis Artefak Pembelajaran</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Bukti pendukung hasil refleksi pengalaman belajar</p>
        </div>
      </div>
      <div class="space-y-4">
        ${course.artifacts.map((art, idx) => `
          <article class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80">
            <h4 class="font-bold text-sm text-slate-900 dark:text-white mb-3">${idx + 1}. ${art.name}</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm leading-relaxed">
              <p class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Bukti refleksi:</strong> Artefak ini menjadi bukti konkret penerapan dan perkembangan kompetensi pembelajaran.</p>
              <p class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Alasan dipilih:</strong> Relevan dengan pengalaman, tantangan, dan perubahan yang direfleksikan.</p>
              <p class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Bagian pendukung:</strong> Isi, proses penyusunan, dan hasil artefak menunjukkan keterkaitan langsung dengan refleksi.</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>

    <!-- Bagian 3: Preview PDF Artefak -->
    <div class="interactive-card rounded-3xl p-6 sm:p-8 mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-9 h-9 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold">3</div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Preview Dokumen PDF</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Tampilan dokumen langsung dari URL Google Docs atau URL PDF</p>
        </div>
      </div>
      ${course.pdfUrl ? `
        <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
          <iframe
            src="${getPdfViewerUrl(course.pdfUrl)}"
            title="Preview PDF ${course.title}"
            class="w-full h-[600px] sm:h-[750px]"
            loading="lazy"
            allow="fullscreen"
          ></iframe>
        </div>
        <a href="${course.pdfUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          Buka PDF di tab baru <i data-lucide="external-link" class="w-4 h-4"></i>
        </a>
      ` : `
        <div class="p-6 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-dashed border-slate-300 dark:border-slate-600">
          <p class="text-sm text-slate-500 dark:text-slate-400">Tambahkan URL PDF pada properti <code class="font-mono">pdfUrl</code> data mata kuliah untuk menampilkan preview.</p>
        </div>
      `}
    </div>
  `;

  // Attach Tab Switcher Events
  document.querySelectorAll('[data-gibbs-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-gibbs-tab');
      activeGibbsTab = tab;
      
      // Update buttons
      document.querySelectorAll('[data-gibbs-tab]').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');

      // Update Panel Content
      const panel = document.getElementById('gibbs-content-panel');
      panel.innerHTML = renderGibbsContent(course.gibbs[tab]);
      lucide.createIcons();
    });
  });

  lucide.createIcons();
}

// Membungkus URL PDF dengan Google Docs Viewer agar dapat dipratinjau di iframe.
function getPdfViewerUrl(url) {
  // Google Drive memiliki endpoint preview native yang lebih stabil daripada
  // meneruskan URL Drive ke Google Docs Viewer. File harus dapat diakses oleh
  // siapa pun yang memiliki tautan.
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  // Dukungan untuk URL Google Drive berbentuk open?id=... atau uc?id=....
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes('drive.google.com')) {
      const fileId = parsedUrl.searchParams.get('id');
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
  } catch (error) {
    // Gunakan viewer umum jika URL tidak valid atau bukan URL Drive.
  }

  return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`;
}

function renderGibbsTabButton(key, label, icon) {
  const isActive = key === activeGibbsTab;
  return `
    <button data-gibbs-tab="${key}" class="px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border border-slate-200/70 dark:border-slate-700 ${isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750'}">
      <i data-lucide="${icon}" class="w-3.5 h-3.5"></i>
      <span>${label}</span>
    </button>
  `;
}

function renderGibbsContent(text) {
  return `
    <div class="animate-fadeIn">
      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
        ${text}
      </p>
    </div>
  `;
}



// Global helper untuk navigasi
window.navigateTo = navigateTo;
