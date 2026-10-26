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
    subtitle: 'Mengembangkan pembelajaran yang bermakna, berkesadaran, dan menyenangkan, serta memahami dasar-dasar asesmen untuk memantau perkembangan belajar siswa.',
    sks: '3 SKS',
    icon: 'book-open',
    color: 'blue',
    pdfUrl: 'https://drive.google.com/file/d/1pUY5TLHIiJy_6PqIymALldRtU8DNYKGF/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah ini berkaitan erat dengan peran saya saat mengajarkan materi percabangan dan perulangan Bahasa C di SMAN 3 Salatiga. Saat mempraktikkan pembelajaran mendalam, saya menyadari bahwa daya tangkap logika siswa sangat beragam: sebagian cepat belajar mandiri, sementara sebagian lain membutuhkan contoh konkret berulang. Pengalaman ini menegaskan bahwa calon guru perlu peka terhadap kondisi nyata di kelas dan mampu menyelaraskan perancangan pembelajaran secara fleksibel dengan dinamika pemahaman murid.',
      
      evaluation: 'Saya memahami bahwa pembelajaran mendalam tidak cukup dengan mencantumkan rencana diferensiasi di Modul Ajar. Dalam praktik mengajar koding, proses debugging dan perbaikan error membutuhkan waktu lebih lama bagi siswa yang mengalami kesulitan. Saya menyadari bahwa sebelumnya saya terlalu berorientasi pada ketuntasan penyampaian materi sehingga mengurangi waktu eksplorasi dan kesempatan siswa untuk bertanya secara mendalam.',
      analysis: 'Pembelajaran menjadi bermakna ketika konsep abstrak, seperti percabangan dan perulangan, dihubungkan dengan situasi nyata, misalnya syarat usia untuk memperoleh KTP atau kriteria kelulusan. Asesmen diagnostik, formatif, dan sumatif bukan sekadar alat pemeringkatan, melainkan instrumen untuk memetakan kesiapan dan mengukur proses belajar murid. Kesadaran reflektif juga penting agar guru terus meninjau efektivitas strategi mengajar dan alokasi waktu.',
      conclusion: 'Pembelajaran mendalam menuntut guru untuk adaptif terhadap kebutuhan murid, memberi ruang bagi proses eksplorasi dan perbaikan, serta menggunakan asesmen dan refleksi untuk memperbaiki pembelajaran.',
      actionPlan: 'Saya akan menggeser fokus dari sekadar menuntaskan materi menjadi menciptakan pengalaman belajar yang realistis dan bermakna. Saya akan menyediakan scaffolding konkret, seperti panduan sintaks dasar dan latihan pemrograman bertahap, serta menerapkan pair programming agar siswa dapat saling membantu saat menghadapi error. Saya juga akan mengelola waktu dengan lebih disiplin agar tersedia kesempatan untuk mengeksplorasi kode, berdiskusi, dan belajar dari kesalahan.'
    },
    artifacts: [
      {
        name: 'Laporan Kegiatan Praktik Mengajar',
        type: 'PDF / Laporan Praktik Mengajar',
        size: 'Dokumen praktik mengajar',
        evidence: 'Laporan ini merekam analisis pelaksanaan pembelajaran mendalam di kelas, kendala koding yang dialami siswa, evaluasi alokasi waktu, serta rancangan perbaikan pembelajaran.',
        reason: 'Saya memilih laporan ini karena memuat gambaran nyata mengenai kesenjangan antara perencanaan Modul Ajar dan dinamika pembelajaran di lapangan. Laporan ini merekam evaluasi kritis saya saat menghadapi kendala debugging dan keterbatasan waktu, sekaligus menunjukkan upaya refleksi diri.',
        support: 'Subbab Analisis Kelemahan dan Refleksi Diri menguraikan kesulitan siswa memahami logika percabangan dan perulangan serta ketergesaan saya mengejar ketuntasan materi. Rencana tindak lanjut berupa panduan sintaks dan pair programming mendukung komitmen saya untuk menjadi guru yang lebih adaptif dan realistis.',
        url: 'https://drive.google.com/file/d/1YmMJSW0pRqD933pwOCPWJD_q8EajCA9l/view?usp=drive_link'
      }
    ]
  },

  'filosofi': {
    code: 'PPG-102',
    semester: 'Semester 1',
    category: 'Mata Kuliah Dasar Kependidikan',
    title: 'Filosofi Pendidikan dan Pendidikan Nilai',
    subtitle: 'Merenungkan hakikat dan tujuan pendidikan serta menanamkan nilai-nilai moral dan kebangsaan sebagai landasan sikap dan praktik mengajar seorang guru.',
    sks: '2 SKS',
    icon: 'compass',
    color: 'amber',
    pdfUrl: 'https://drive.google.com/file/d/1ej9N8f-pdA5Z9v6YBexj-9nIcDtta5m3/view?usp=sharing',
    gibbs: {
      description: 'Melalui mata kuliah FPPN, saya memahami bahwa peran guru bukan hanya menyampaikan materi, tetapi juga menuntun peserta didik mengembangkan potensi dan karakternya sesuai pemikiran Ki Hadjar Dewantara. Pengalaman menghadapi peserta didik yang tidur, mengobrol, bermain gim, atau meninggalkan kelas menyadarkan saya untuk memahami penyebab perilaku mereka dan mencari pendekatan yang tepat agar mereka lebih terlibat serta bertanggung jawab.',
      evaluation: 'Materi FPPN menantang cara saya memandang peserta didik dan menghadapi perilaku mereka. Sebelumnya, saya cenderung menganggap peserta didik yang tidak fokus sebagai masalah kedisiplinan yang perlu ditegur. Kini saya menyadari bahwa guru perlu memahami karakteristik dan kebutuhan mereka serta memberikan tuntunan yang sesuai, bukan hanya menuntut mereka mengikuti aturan.',
      analysis: 'Konsep yang paling membekas adalah pemikiran Ki Hadjar Dewantara bahwa pendidikan merupakan proses menuntun kodrat anak agar berkembang sesuai potensi dan karakteristiknya. Guru bukan sekadar pemberi materi atau hukuman, melainkan pendidik yang memberi teladan, membangun kebiasaan positif, dan menanamkan nilai melalui tindakan nyata. Setiap perilaku perlu dihadapi secara mendidik tanpa mengabaikan kedisiplinan dan tanggung jawab.',
      conclusion: 'Refleksi ini menguatkan pemahaman saya bahwa pendidikan perlu memerdekakan sekaligus menuntun peserta didik dengan memperhatikan potensi, kebutuhan, dan nilai-nilai yang mereka kembangkan.',
      actionPlan: 'Saya ingin memahami penyebab perilaku peserta didik sebelum menentukan tindakan. Saat mereka tidak fokus, saya akan menggunakan aktivitas yang lebih menarik, mengajak mereka berdiskusi, dan membangun kesepakatan kelas yang menumbuhkan tanggung jawab. Saya juga akan memberi teladan serta menanamkan nilai kejujuran, kedisiplinan, dan etika dalam pembelajaran Informatika dan KKA.'
    },
    artifacts: [
      {
        name: 'Aktivitas 1.4: Diskusi Kelompok Pemecahan Kasus',
        type: 'Diskusi Kelompok & Bermain Peran',
        size: 'Artefak pembelajaran',
        evidence: 'Analisis faktor penyebab Ali mogok sekolah setelah pindah tempat tinggal menunjukkan bahwa perilaku peserta didik perlu dipahami dari berbagai sudut pandang.',
        reason: 'Saya memilih artefak ini karena kegiatan pemecahan kasus mengajarkan saya untuk tidak langsung menilai perilaku peserta didik, tetapi mencari latar belakangnya dan mempertimbangkan dukungan dari guru, orang tua, teman, kepala sekolah, serta guru BK.',
        support: 'Analisis kasus Ali dan bermain peran sebagai guru, orang tua, teman, kepala sekolah, serta guru BK menguatkan refleksi saya untuk memahami kondisi peserta didik sebelum bertindak. Pengalaman ini relevan dengan cara saya akan menghadapi peserta didik yang kurang fokus di kelas.',
        url: 'https://drive.google.com/file/d/1ej9N8f-pdA5Z9v6YBexj-9nIcDtta5m3/view?usp=sharing',
        
      }
    ]
  },

  'ct': {
    code: 'PPG-103',
    semester: 'Semester 1',
    category: 'Mata Kuliah Selektif/Inti',
    title: 'CT (Computational Thinking)',
    subtitle: 'Melatih cara berpikir sistematis dalam memecahkan masalah melalui dekomposisi, pengenalan pola, abstraksi, dan algoritma, serta mengintegrasikannya dalam pembelajaran.',
    sks: '2 SKS',
    icon: 'cpu',
    color: 'teal',
    pdfUrl: 'https://drive.google.com/file/d/1rO0GYhksun3GZo1R4tSnyNIzeBCInmxv/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah Computational Thinking melatih saya menyelesaikan masalah dengan empat fondasi berpikir komputasional: dekomposisi, pengenalan pola, abstraksi, dan algoritma. Sebagai guru Informatika dan KKA, cara berpikir ini membantu saya merancang pembelajaran dengan memecah topik menjadi tujuan kecil, mengenali pola kesulitan siswa, memilih konsep inti, dan menyusun alur kegiatan yang runtut.',
      evaluation: 'Sebelumnya saya memulai pembelajaran dari urutan buku teks, sehingga materi sering terlalu padat dan tujuan belajar kurang jelas. Saya juga cenderung memandang CT sebagai kemampuan menulis kode. Perkuliahan ini mengubah pemahaman saya bahwa masalah perlu diurai sebelum dicari solusinya dan CT dapat dilatih tanpa komputer.',
      analysis: 'Dekomposisi memecah masalah besar menjadi bagian kecil; pengenalan pola menemukan kesamaan; abstraksi berfokus pada hal esensial; dan algoritma menyusun langkah yang jelas serta dapat diulang. Keempat pilar saling melengkapi, tidak harus digunakan secara berurutan, dan dapat dilatihkan melalui aktivitas unplugged.',
      conclusion: 'CT merupakan cara berpikir sistematis yang dapat digunakan untuk merancang pembelajaran sekaligus membantu siswa memecahkan masalah, baik di dalam maupun di luar pelajaran Informatika.',
      actionPlan: 'Saya akan menggunakan CT untuk menguraikan capaian menjadi tujuan kecil, mengidentifikasi pola miskonsepsi, memilih konsep inti, dan menyusun alur kegiatan. Saya juga akan memulai topik dengan masalah nyata serta aktivitas tanpa komputer sebelum siswa menulis kode.'
    },
    artifacts: [
      {
        name: 'Tugas Modifikasi Materi Ajar dengan Integrasi Computational Thinking pada Algoritma dan Pemrograman Kelas X Fase E',
        type: 'Lembar Kerja 16 / Dokumen',
        size: 'Artefak pembelajaran',
        evidence: 'Dokumen memuat perbandingan pembelajaran sebelum dan sesudah integrasi CT, contoh penerapan empat fondasi CT, serta perubahan aktivitas dan evaluasi pembelajaran.',
        reason: 'Saya memilih Lembar Kerja 16 karena memperlihatkan perubahan rancangan dari menjelaskan sintaks dan meminta siswa menyalin kode menjadi pembelajaran yang dimulai dari masalah dan menggunakan empat fondasi CT. Materi ini saya ajarkan sendiri sebagai guru Informatika dan KKA.',
        support: 'Tabel perbandingan dan deskripsi penyampaian materi menunjukkan urutan studi kasus, analisis dengan empat fondasi CT, pseudocode dan flowchart, penulisan kode, lalu evaluasi melalui uji kasus. Deskripsi sebelum integrasi menunjukkan kebiasaan lama, sedangkan penjelasan konsep memuat empat fondasi CT beserta contohnya.',
        url: 'https://docs.google.com/document/d/1Ized1F2P-ybgPCrxy61YrsHX893zqiDO/edit'
      }
    ]
  },

  'growth-mindset': {
    code: 'PPG-104',
    semester: 'Semester 1',
    category: 'Mata Kuliah Pengembangan',
    title: 'Growth Mindset (PolaPikir Bertumbuh))',
    subtitle: 'Memahami bahwa kemampuan dapat berkembang melalui usaha dan strategi belajar yang tepat, serta menumbuhkan pola pikir bertumbuh pada diri sendiri dan peserta didik.',
    sks: '2 SKS',
    icon: 'trending-up',
    color: 'emerald',
    pdfUrl: 'https://drive.google.com/file/d/1eSR1ZkN6LIbgBxJmDD51Yb6C2BhcX4V8/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah Growth Mindset menyadarkan saya bahwa proses menjadi guru profesional membutuhkan waktu, usaha, dan kemauan untuk terus belajar, terlebih saya berasal dari latar belakang pendidikan nonkeguruan. Kesalahan saat praktik mengajar menjadi bagian dari proses belajar, bukan tanda bahwa saya tidak mampu menjadi guru.',
      evaluation: 'Tantangan saya adalah mengatasi rasa kurang percaya diri ketika praktik tidak berjalan sesuai harapan dan beradaptasi dengan pengetahuan pedagogis serta keterampilan mengelola kelas. Saya belajar agar tidak takut melakukan kesalahan, tetapi berani mencoba, menerima masukan, dan memperbaiki kekurangan secara bertahap.',
      analysis: 'Konsep yang paling membekas adalah growth mindset dan neuroplastisitas, yaitu kemampuan otak membentuk serta memperkuat koneksi antarsel saraf ketika belajar dan berlatih. Keterbatasan kemampuan saat ini bukan berarti saya tidak mampu berkembang; kesulitan selama PPG dapat menjadi kesempatan untuk membangun kompetensi.',
      conclusion: 'Kemampuan mengajar dapat terus berkembang melalui proses belajar berulang, latihan, keterbukaan terhadap masukan, dan kemauan mencoba strategi baru.',
      actionPlan: 'Saya akan tekun menjalani proses menjadi guru profesional, menjadikan kesalahan sebagai bahan refleksi, aktif mempelajari strategi pembelajaran, menerima masukan dari guru pamong dan rekan sejawat, serta menerapkannya pada pembelajaran berikutnya.'
    },
    artifacts: [
      {
        name: 'LK 4.2: Mengubah Responmu untuk Kelas Bertumbuh',
        type: 'Dokumen Lembar Kerja',
        size: 'Artefak pembelajaran',
        evidence: 'Dokumen ini memuat analisis 10 situasi nyata dinamika kelas dan rancangan respons guru yang menekankan proses, usaha, serta pemilihan strategi belajar, bukan hanya hasil akhir.',
        reason: 'Saya memilih artefak ini sebagai bukti praktik growth mindset. LK 2.2 Belajar dari Cara Otak Belajar juga membantu saya memahami bahwa kemampuan berkembang melalui latihan dan proses berkelanjutan, sehingga kesulitan selama PPG menjadi bagian dari pengembangan kompetensi diri.',
        support: 'Tabel Dampak Neuroplastisitas dalam Pembelajaran, terutama bagian tentang umpan balik positif terhadap proses, mencoba strategi belajar berbeda, dan dampak latihan berulang, mendukung komitmen saya untuk mengevaluasi kesalahan, menerima umpan balik guru pamong, dan terus berlatih.',
        url: 'https://drive.google.com/file/d/1ZJiTKWHT3b1J62EhiP97eN6eDLbVvfbS/view?usp=sharing'
      }
    ]
  },

  'ppl-1': {
    code: 'PPG-105',
    semester: 'Semester 1',
    category: 'Praktik Pengalaman Lapangan Terbimbing',
    title: 'Praktik Pengalaman Lapangan Terbimbing',
    subtitle: 'Menerapkan teori perkuliahan dalam pembelajaran Informatika dan KKA serta mengembangkan kompetensi mengajar melalui praktik, evaluasi, dan refleksi.',
    sks: '6 SKS',
    icon: 'users',
    color: 'indigo',
    pdfUrl: '',
    gibbs: {
      description: 'Melalui PPL Terbimbing di SMA Negeri 3 Salatiga, saya memperoleh pengalaman nyata dalam menerapkan teori yang telah dipelajari selama perkuliahan ke dalam pembelajaran Informatika dan KKA di kelas X-2. Saya belajar bahwa menjadi guru bukan hanya tentang menguasai materi, tetapi juga merancang pembelajaran, mengelola kelas, memahami karakteristik peserta didik, dan mengevaluasi proses pembelajaran. Pengalaman menyusun perangkat ajar, melaksanakan praktik mengajar, serta menerima penilaian dari guru pamong membantu saya memahami tanggung jawab dan kompetensi yang perlu dikembangkan untuk menjadi guru profesional.',
      evaluation: 'Tantangan yang saya rasakan selama PPL Terbimbing adalah menyesuaikan rancangan pembelajaran dengan kondisi nyata di kelas. Perangkat pembelajaran yang telah disusun belum tentu dapat diterapkan sepenuhnya sesuai rencana karena respons, keterlibatan, dan kebutuhan peserta didik beragam. Saya perlu belajar mengelola waktu, memilih aktivitas yang sesuai, serta menjaga keterlibatan peserta didik selama pembelajaran Informatika dan KKA. Pengalaman ini menyadarkan saya bahwa guru perlu fleksibel dalam menerapkan rencana pembelajaran dan terbuka terhadap masukan untuk memperbaiki praktik mengajarnya.',
      analysis: 'Konsep yang paling membekas bagi saya adalah pentingnya refleksi berkelanjutan sebagai bagian dari pengembangan profesional guru. Melalui penyusunan perangkat pembelajaran, praktik mengajar dalam tiga siklus, penilaian guru pamong, dan diskusi refleksi akhir, saya memahami bahwa kemampuan mengajar tidak terbentuk hanya melalui teori, tetapi juga melalui praktik, evaluasi, dan perbaikan. Saya belajar bahwa umpan balik bukan sekadar penilaian terhadap kekurangan, melainkan dasar untuk menentukan langkah perbaikan agar pembelajaran berikutnya lebih efektif dan sesuai dengan kebutuhan peserta didik.',
      conclusion: 'PPL Terbimbing membantu saya memahami bahwa guru profesional terus belajar melalui praktik, refleksi, evaluasi, dan perbaikan yang berkelanjutan.',
      actionPlan: 'Setelah menjalani PPL Terbimbing, saya ingin lebih cermat dalam merancang pembelajaran, menyesuaikan aktivitas dengan kondisi kelas, dan mengevaluasi keterlibatan peserta didik selama pembelajaran Informatika dan KKA. Saya juga akan memanfaatkan masukan guru pamong untuk memperbaiki perangkat ajar, pengelolaan kelas, dan strategi pembelajaran pada tahap PPL Mandiri. Selain itu, saya ingin membiasakan diri mendokumentasikan pengalaman, mengevaluasi kekurangan, dan merumuskan tindak lanjut secara konkret agar dapat berkembang menjadi guru yang reflektif, adaptif, dan bertanggung jawab.'
    },
    artifacts: [
      {
        name: 'E-Portofolio 1 dan 2 (UTS dan UAS)',
        type: 'E-Portofolio',
        size: 'Artefak pembelajaran',
        evidence: 'E-Portofolio 1 dan 2 mendokumentasikan perjalanan PPL Terbimbing, mulai dari mengenali karakter dan tujuan sebagai calon guru, merancang perangkat pembelajaran, melaksanakan praktik mengajar, hingga mengevaluasi dan merumuskan filosofi mengajar.',
        reason: 'Saya memilih E-Portofolio 1 (UTS) dan E-Portofolio 2 (UAS) karena keduanya menggambarkan perjalanan perkembangan saya selama PPL Terbimbing. Kedua artefak ini memperlihatkan proses belajar secara berkelanjutan, bukan hanya hasil akhir, sehingga relevan untuk merefleksikan perkembangan kompetensi dan kesiapan saya menjadi guru profesional.',
        support: 'Refleksi pada tiap siklus dan penilaian dari guru pamong menunjukkan bagaimana masukan digunakan untuk memperbaiki perangkat ajar, pengelolaan waktu, dan keterlibatan peserta didik pada siklus berikutnya. Bagian ini menguatkan pemahaman saya bahwa umpan balik menjadi dasar untuk menentukan langkah perbaikan dan mendukung komitmen saya untuk memanfaatkan masukan guru pamong pada PPL Mandiri semester berikutnya.',
        url: 'https://anisa-nur-azizah-e-portofolio.vercel.app/'
      }
    ]
  },

  'ppdp': {
    code: 'PPG-106',
    semester: 'Semester 1',
    category: 'Mata Kuliah Inti',
    title: 'PPDP (Pemahaman tentang Peserta Didik & Pembelajarannya)',
    subtitle: 'Mengenali karakteristik, kebutuhan, dan latar belakang peserta didik sebagai dasar merancang pembelajaran yang tepat dan berpusat pada murid.',
    sks: '3 SKS',
    icon: 'heart-handshake',
    color: 'sky',
    pdfUrl: 'https://drive.google.com/file/d/1R7AnypeddHcDwjavbtY9u2HFgwsPrroy/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah ini sangat relevan dengan peran saya saat mengajar Algoritma dan Pemrograman di SMA Salatiga. Saat mengajarkan sintaks dasar Bahasa C seperti printf() dan scanf() hingga logika percabangan, saya menghadapi tingkat pemahaman dan daya tangkap siswa yang beragam. Saya memahami bahwa guru Informatika perlu mengenali latar belakang, minat, dan cara belajar siswa agar pembelajaran berpihak pada kebutuhan mereka.',
      evaluation: 'Sebelumnya saya cenderung menggunakan ceramah dan praktik seragam dengan asumsi semua siswa dapat mengikuti alur koding yang sama. Di kelas, ada siswa yang cepat memahami logika pemrograman dan ada yang masih kesulitan. Ketertinggalan bukan langsung berarti ketidakmampuan, melainkan sinyal untuk menyesuaikan strategi berdasarkan kesiapan belajar.',
      analysis: 'Pemetaan karakteristik, kesiapan belajar, serta aspek sosial-emosional siswa menjadi pijakan keputusan pedagogis. Mengenali peserta didik adalah proses observasi dan evaluasi berkelanjutan. Dalam pembelajaran Bahasa C, pemetaan ini membantu saya memberi pendampingan yang tepat sekaligus menyediakan tantangan bagi siswa yang lebih siap.',
      conclusion: 'Pembelajaran yang berpihak pada murid perlu berangkat dari pemahaman terhadap kondisi, kebutuhan, minat, dan kesiapan masing-masing peserta didik.',
      actionPlan: 'Saya akan melakukan asesmen awal sebelum materi pemrograman kompleks dan menerapkan pembelajaran berdiferensiasi berbasis proyek. Siswa mahir mendapat tantangan logika lanjutan, sedangkan siswa yang masih kesulitan memperoleh panduan bertahap. Saya juga memastikan tugas dapat diselesaikan di kelas agar tidak membebani siswa dengan keterbatasan waktu atau fasilitas di rumah.'
    },
    artifacts: [
      {
        name: 'LK Aktivitas 4a: Profiling Peserta Didik',
        type: 'Instrumen Observasi dan Analisis Profil',
        size: 'Artefak pembelajaran',
        evidence: 'Dokumen mencakup instrumen observasi, pemetaan karakteristik individu dan minat, gaya belajar, serta analisis kesiapan kognitif siswa SMAN 3 Salatiga.',
        reason: 'Artefak ini menjadi bukti konkret proses mengenali dan memetakan latar belakang, karakteristik, minat, serta gaya belajar siswa. Data riil yang dikumpulkan dan diolah menjadi landasan sebelum merancang pembelajaran, bukan asumsi sepihak.',
        support: 'Lembar pemetaan hasil analisis karakteristik dan kebutuhan belajar memperlihatkan variasi kemampuan serta minat di kelas yang heterogen. Data ini menguatkan perubahan pandangan saya bahwa pembelajaran Informatika perlu dirancang berdasarkan asesmen profil peserta didik, bukan sekadar mengejar target materi.',
        url: 'https://drive.google.com/file/d/1GunIvWMzy_x4NLe1tTBLpXJ5a2KjZkR8/view?usp=sharing'
      }
    ]
  },

  // === SEMESTER 2 ===
  
  'pse': {
    code: 'PPG-201',
    semester: 'Semester 2',
    category: 'Mata Kuliah Inti',
    title: 'PSE (Pembelajaran Sosial dan Emosional)',
    subtitle: 'Mengembangkan kesadaran diri, pengelolaan emosi, empati, dan keterampilan relasi untuk menciptakan lingkungan belajar yang aman dan suportif.',
    sks: '3 SKS',
    icon: 'smile',
    color: 'emerald',
    pdfUrl: 'https://drive.google.com/file/d/1FvzIT7vw__ounzjqos7xn1FDMvrWiJwU/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah ini mengingatkan saya bahwa guru tidak hanya mengajar materi, tetapi juga hadir sebagai manusia yang dilihat dan ditiru siswa setiap hari. Di kelas X, suasana belajar sangat dipengaruhi suasana hati saya. Kalau saya datang dengan emosi yang kacau, kelas ikut tegang. Kalau saya tenang, siswa lebih berani bertanya dan mencoba. Karena itu, kesiapan emosi menjadi bagian dari kesiapan saya sebagai calon guru, sama pentingnya dengan kesiapan materi.',
      feeling: 'Dulu, ketika kelas ramai dan siswa tidak mengerjakan tugas, saya cenderung langsung menegur dengan nada tinggi atau menghentikan pelajaran karena kesal. Saya menganggap emosi itu wajar karena “siswanya yang salah”, dan jarang bertanya apa yang terjadi pada mereka. Di perkuliahan ini saya belajar bahwa reaksi saya justru bisa memperburuk suasana, dan bahwa guru perlu mengenali serta mengelola emosinya terlebih dahulu sebelum menangani kelas. Hal itu berbeda dari kebiasaan saya.',
      evaluation: 'Konsep yang paling mengena bagi saya adalah bahwa guru harus selesai dengan emosinya sebelum mengajar. Konsep ini berkaitan dengan lima kompetensi sosial emosional dari CASEL (kesadaran diri, manajemen diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab), dengan peran guru sebagai teladan, dan dengan school well-being. Saya memahami bahwa siswa belajar mengelola emosi dengan melihat bagaimana gurunya bersikap, terutama saat kelas tidak kondusif. Pembelajaran juga lebih efektif bila siswa mengalaminya langsung lewat experiential learning, bukan sekadar mendengar nasihat.',
      analysis: 'Kesiapan emosi guru memengaruhi suasana belajar dan keberanian siswa untuk bertanya serta mencoba. Mengenali emosi sebelum merespons membantu saya memilih tindakan yang lebih tenang dan menjaga kelas tetap aman.',
      conclusion: 'Sebelum masuk kelas, saya akan mengecek kondisi emosi, misalnya dengan menarik napas dalam dan melepaskan hal yang mengganggu dari luar kelas. Ketika kelas ramai, saya akan berhenti sejenak, menenangkan diri, lalu bertanya kepada siswa dengan nada tenang, bukan langsung menegur. Saya juga ingin menyediakan waktu singkat di awal pelajaran untuk melihat suasana hati siswa, supaya kelas menjadi ruang yang aman. Saya sadar ini membutuhkan latihan, sehingga saya akan menerapkannya sedikit demi sedikit dan mengevaluasinya setiap pertemuan.',
      actionPlan: 'Artefak yang saya pilih adalah Lembar Kerja dari 1.C. Studi Kasus Terpadu: Strategi Mengelola Emosi Dan Relasi di Kelas.',
    },
    artifacts: [
      { name: '1.C. Studi Kasus Terpadu: Strategi Mengelola Emosi dan Relasi di Kelas', type: 'Lembar Kerja', size: 'Artefak pembelajaran', evidence: 'Studi kasus ini menunjukkan penerapan kerangka CASEL, pengelolaan emosi diri, dan peran guru sebagai teladan.', reason: 'Saya memilih studi kasus ini karena isinya paling dekat dengan konsep yang paling mengena bagi saya, yaitu guru perlu menyelesaikan emosinya sendiri sebelum mengatasi kelas yang tidak kondusif.', support: 'Rencana Aksi Seketika (Tindakan Mikro) memuat langkah berhenti sejenak, menarik napas, dan merendahkan nada suara sebelum memberi instruksi. Integrasi Strategi dengan 5 Kompetensi CASEL, Strategi Regulasi Emosi (STOP Method), dan Kesimpulan tentang guru sebagai teladan mendukung konsep tersebut. Identifikasi Masalah menggambarkan tantangan saya, yaitu teguran bernada tinggi yang justru membuat kelas makin ricuh.', url: 'https://drive.google.com/file/d/1FvzIT7vw__ounzjqos7xn1FDMvrWiJwU/view?usp=sharing' }
    ]
  },

  'pma-2': {
    code: 'PPG-202',
    semester: 'Semester 2',
    category: 'Mata Kuliah Inti',
    title: 'PMA Lanjut (Prinsip Pengajaran & Asesmen II)',
    subtitle: 'Memperdalam penerapan pembelajaran bermakna dengan merancang dan memanfaatkan asesmen yang hasilnya menjadi dasar perbaikan pembelajaran.',
    sks: '3 SKS',
    icon: 'layers',
    color: 'blue',
    pdfUrl: 'https://drive.google.com/file/d/1r71tAPM2kxon7hTHVZgxHoFkwPppfeOc/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah ini terkait langsung dengan peran saya sebagai guru informatika dan KKA di kelas X. Kemampuan siswa di kelas saya sangat beragam: ada yang sudah lancar koding, ada pula yang baru pertama kali memakai komputer untuk pemrograman. Perkuliahan ini membekali saya untuk memahami kebutuhan murid, memilih pendekatan yang sesuai, dan memanfaatkan hasil asesmen untuk memperbaiki pembelajaran.',
      feeling: 'Selama ini saya menyiapkan satu rencana pembelajaran, satu materi, dan satu kecepatan untuk seluruh kelas. Saat sebagian siswa sudah selesai praktik dan sebagian lain belum paham langkah awal, saya cenderung melanjutkan materi karena mengejar waktu. Hasil asesmen pun biasanya hanya saya catat sebagai nilai, tanpa saya olah menjadi tindak lanjut. Di perkuliahan ini saya belajar bahwa pembelajaran seharusnya dimulai dari memetakan kebutuhan murid, lalu disesuaikan dengan kemampuan mereka. Hal itu berbeda jauh dari kebiasaan saya.',
      evaluation: 'Konsep yang paling membekas bagi saya adalah bahwa sebelum mengajar, guru perlu memahami dan memetakan kebutuhan murid terlebih dahulu. Dari pemetaan itu saya merancang pembelajaran dengan konsep TaRL (Teaching at the Right Level), yaitu mengajar sesuai tingkat kemampuan murid, bukan sesuai usia atau kelas. Konsep ini mengubah cara pandang saya: rancangan pembelajaran yang baik bukan yang paling lengkap materinya, melainkan yang paling sesuai dengan kondisi siswanya.',
      analysis: 'Pemetaan kesiapan dan kemampuan murid menjadi dasar untuk memilih pendekatan serta menyiapkan tindak lanjut. Asesmen bukan hanya nilai, tetapi informasi untuk menyesuaikan pembelajaran dengan kebutuhan siswa.',
      conclusion: 'Saya ingin memulai setiap topik dengan asesmen diagnostik singkat, mengelompokkan siswa berdasarkan kemampuan, lalu menyiapkan kegiatan yang sesuai untuk tiap kelompok. Namun saya menyadari penerapannya tidak mudah. Pemetaan butuh waktu, rancangan saya masih jauh dari sempurna, dan saya masih sering kesulitan menjalankannya di kelas. Karena itu saya akan menerapkannya bertahap, dimulai dari satu topik dan satu kelas, lalu mengevaluasi hasilnya dan memperbaikinya di pertemuan berikutnya sampai pembelajaran saya benar-benar sesuai dengan kebutuhan siswa.',
      actionPlan: 'Artefak yang saya gunakan sebagai bukti dukung adalah 3.C. Laporan Rancangan dan Implementasi Pembelajaran Berbasis TaRL.',
    },
    artifacts: [
      { name: '3.C. Laporan Rancangan dan Implementasi Pembelajaran Berbasis TaRL', type: 'Laporan Pembelajaran', size: 'Artefak pembelajaran', evidence: 'Laporan ini memuat alur lengkap: asesmen diagnostik untuk memetakan kebutuhan murid, rancangan pembelajaran dengan TaRL, dan penerapan di kelas X-4 pada materi algoritma dan flowchart.', reason: 'Dari pelaksanaan, saya menemukan kebutuhan siswa yang beragam dan menyusun rencana perbaikan. Laporan ini menggambarkan perjalanan saya menerapkan TaRL secara bertahap.', support: 'Identifikasi Kesiapan Peserta Didik, alur TaRL, dan tiga LKPD berjenjang menunjukkan pemetaan kebutuhan. Catatan observasi menunjukkan kesiapan siswa yang beragam dan tantangan dari kebiasaan mengajar satu cara untuk seluruh kelas. Refleksi Diri dan Rencana Perbaikan Berdasarkan Temuan menunjukkan perubahan yang ingin saya lakukan; dokumentasi foto menjadi bukti pelaksanaan di kelas.', url: 'https://drive.google.com/file/d/1r71tAPM2kxon7hTHVZgxHoFkwPppfeOc/view?usp=sharing' }
    ]
  },

  'project-kepemimpinan': {
    code: 'PPG-203',
    semester: 'Semester 2',
    category: 'Mata Kuliah Praktik Kolaboratif',
    title: 'Project Kepemimpinan',
    subtitle: 'Merancang dan melaksanakan inisiatif perubahan di sekolah sebagai wujud kepemimpinan guru dalam memberi dampak positif bagi lingkungan belajar.',
    sks: '2 SKS',
    icon: 'flag',
    color: 'rose',
    pdfUrl: 'https://drive.google.com/file/d/14WYoEpNwYxzllSM1BsofPGsqHLZQBIpH/view?usp=sharing',
    gibbs: {
      description: 'Mata kuliah ini menegaskan bahwa guru berperan sebagai agent of change, yaitu penggerak perubahan yang peka terhadap masalah di sekitarnya dan berani mencari solusinya, bukan hanya mengajar di kelas. Peran itu kami praktikkan lewat proyek kelompok Edupath, sebuah aplikasi yang membantu sekolah dan siswa kelas X dalam penempatan ke kelas XI. Proyek ini berangkat dari kebutuhan nyata di sekolah, dan pengalaman tersebut melatih saya melihat bahwa seorang guru juga bisa memperbaiki sistem yang memengaruhi masa depan siswanya.',
      feeling: 'Selama ini saya cenderung menganggap urusan di luar kelas, seperti penempatan siswa, sebagai tugas pihak lain. Saya juga biasa bekerja sendiri dan langsung bertindak tanpa rancangan, uji coba, maupun evaluasi. Di proyek Edupath, kami harus menyepakati masalah bersama, membagi peran, merancang dan mengembangkan aplikasi, mengimplementasikannya, lalu mengujicobakan dan mengevaluasinya. Proses yang bertahap dan melibatkan banyak pihak ini berbeda dari kebiasaan saya.',
      evaluation: 'Konsep yang paling berkesan bagi saya adalah bahwa kepemimpinan dimulai dari kepekaan terhadap kebutuhan nyata, lalu diwujudkan lewat kerja sama dalam siklus yang runtut: merancang, mengembangkan, mengimplementasikan, menguji coba, dan mengevaluasi. Saya belajar bahwa pemimpin bukan orang yang mengerjakan semuanya sendiri, melainkan yang mengajak orang lain bekerja bersama dan memperbaiki hasilnya berdasarkan evaluasi.',
      analysis: 'Proses perancangan, kerja sama, uji coba, dan evaluasi membantu memastikan solusi menjawab kebutuhan nyata. Menerima masukan dan memperbaiki hasil mengubah cara saya memahami kepemimpinan, dari bekerja sendiri menjadi menggerakkan perubahan bersama.',
      conclusion: 'Setelah mata kuliah ini, saya ingin lebih peka terhadap masalah di sekolah tempat saya mengajar dan berani memulai perbaikan dari hal kecil. Saya akan membiasakan menyusun rencana yang jelas, melibatkan rekan guru, lalu mengevaluasi hasilnya sebelum melangkah lebih jauh. Saya sadar kemampuan memimpin ini masih perlu dilatih, sehingga saya akan memulainya sedikit demi sedikit dan memperbaikinya secara bertahap.',
      actionPlan: 'Artefak yang saya pilih sebagai bukti dukung refleksi saya adalah Laporan Akhir Proyek Kepemimpinan Edupath.',
    },
    artifacts: [
      { name: 'Laporan Akhir Proyek Kepemimpinan Edupath', type: 'Laporan Proyek', size: 'Artefak pembelajaran', evidence: 'Laporan merangkum perjalanan proyek: menemukan masalah penempatan siswa kelas X ke kelas XI di sekolah, merancang dan mengembangkan aplikasi, mengimplementasikan, menguji coba, sampai mengevaluasinya.', reason: 'Laporan ini memperlihatkan peran saya sebagai agent of change yang tidak berhenti pada ide, tetapi bekerja bersama kelompok mewujudkan solusi untuk kebutuhan nyata serta belajar memimpin proyek secara bertahap.', support: 'Hasil uji coba, evaluasi, dan rencana tindak lanjut menunjukkan perubahan cara kerja saya: menguji hasil rancangan bersama kelompok, menerima masukan, lalu memperbaikinya. Pola ini ingin saya terapkan saat memimpin perbaikan di sekolah tempat saya mengajar.', url: 'https://drive.google.com/file/d/14WYoEpNwYxzllSM1BsofPGsqHLZQBIpH/view?usp=sharing' }
    ]
  },

  'daring-bauran': {
    code: 'PPG-204',
    semester: 'Semester 2',
    category: 'Mata Kuliah Pilihan/Inti',
    title: 'Pembelajaran Daring dan Bauran',
    subtitle: 'Merancang pembelajaran yang memadukan tatap muka dan daring dengan pemanfaatan teknologi digital agar tetap interaktif dan bermakna.',
    sks: '2 SKS',
    icon: 'monitor',
    color: 'violet',
    pdfUrl: 'https://drive.google.com/file/d/11lG9meMcV5PhcMe1JLARrcENx9lvwA/view?usp=sharing',
    gibbs: {
      description: 'Sebagai guru informatika dan KKA, saya diharapkan menjadi teladan dalam memanfaatkan teknologi untuk pembelajaran. Mata kuliah ini membekali saya merancang pembelajaran yang tidak terbatas pada tatap muka, tetapi dapat berjalan secara daring maupun bauran (campuran tatap muka dan daring). Keterampilan ini penting karena kondisi siswa dan sekolah bisa berubah, misalnya saat siswa berhalangan hadir, waktu tatap muka terbatas, atau materi perlu diulang di luar jam pelajaran.',
      feeling: 'Selama ini saya menganggap pembelajaran daring sama dengan memindahkan ceramah ke slide, video, atau tautan materi, lalu menunggu siswa mengumpulkan tugas. Di perkuliahan ini saya belajar bahwa pembelajaran daring perlu dirancang dengan tujuan yang jelas, interaksi yang terjaga, dan pemilihan aktivitas yang sesuai. Saya juga baru memahami bahwa menentukan mana yang cocok dilakukan secara sinkron, asinkron, atau tatap muka adalah keputusan desain, bukan sekadar pilihan teknologi. Hal ini berbeda dari kebiasaan saya yang lebih mengandalkan tatap muka dan ceramah.',
      evaluation: 'Konsep yang paling membekas bagi saya adalah bahwa teknologi hanyalah alat, sedangkan yang menentukan keberhasilan adalah rancangan pembelajarannya. Dalam model bauran, materi dasar dapat dipelajari siswa secara mandiri melalui platform daring (asinkron), sehingga waktu tatap muka dipakai untuk praktik, diskusi, dan pendampingan. Saya juga belajar bahwa keterlibatan siswa di lingkungan daring harus dirancang, misalnya lewat kuis, forum diskusi, dan umpan balik yang jelas.',
      analysis: 'Pembagian kegiatan secara sengaja membuat aktivitas daring lebih dari sekadar memindahkan ceramah ke platform. Materi dan kuis dapat dipelajari mandiri, sementara waktu tatap muka digunakan untuk praktik dan pendampingan; rancangan tetap perlu mempertimbangkan akses internet serta perangkat siswa.',
      conclusion: 'Saya ingin mulai merancang pembelajaran bauran dengan membagi porsi kegiatan: materi dasar dan kuis singkat saya sediakan di platform daring, sedangkan tatap muka saya gunakan untuk praktik pemrograman dan pendampingan siswa yang kesulitan. Saya juga akan memastikan setiap aktivitas daring punya tujuan, petunjuk yang jelas, dan umpan balik. Saya sadar penerapannya perlu menyesuaikan akses internet dan perangkat siswa, sehingga saya akan memulainya dari satu topik dan memperbaikinya berdasarkan hasilnya.',
      actionPlan: 'Artefak yang saya pilih adalah Presentasi Desain Instruksional LMS model ASSURE.',
    },
    artifacts: [
      { name: 'Presentasi Desain Instruksional LMS model ASSURE', type: 'Presentasi Desain Instruksional', size: 'Artefak pembelajaran', evidence: 'Presentasi memperlihatkan perancangan pembelajaran daring secara sistematis dengan model ASSURE: mengidentifikasi LMS yang pasif, menganalisis penyebab, memilih metode dan media, menyusun aktivitas dan partisipasi siswa, lalu mengevaluasi.', reason: 'Saya memilih presentasi ini karena menunjukkan bahwa pembelajaran daring bukan memindahkan ceramah ke platform, tetapi keputusan desain tentang aktivitas yang tepat dilakukan siswa secara daring dan dipadukan dengan tatap muka.', support: 'Slide Pergeseran Pola Belajar dalam LMS mendukung Challenge tentang kebiasaan memakai LMS sebagai gudang dokumen. Identifikasi Masalah dan Utilize Media mendukung Concept tentang materi dasar dan latihan mandiri sebelum tatap muka. Require Learner Participation serta Evaluate & Revise mendukung Change melalui aktivitas daring terarah dan siklus perbaikan.', url: 'https://drive.google.com/file/d/11lG9meMcV5PhcMe1JLARrcENx9lvwA/view?usp=sharing' }
    ]
  },

  'ppl-2': {
    code: 'PPG-205',
    semester: 'Semester 2',
    category: 'Praktik Lapangan Mandiri',
    title: 'PPL (Praktik Pengalaman Lapangan II)',
    subtitle: 'Mengelola pembelajaran secara mandiri di kelas, mulai dari perencanaan, pelaksanaan, hingga evaluasi, sebagai bentuk kesiapan menjadi guru profesional.',
    sks: '8 SKS',
    icon: 'briefcase',
    color: 'indigo',
    pdfUrl: 'https://drive.google.com/file/d/1pUY5TLHIiJy_6PqIymALldRtU8DNYKGF/view?usp=sharing',
    gibbs: {
      description: 'PPL Mandiri adalah tempat saya menjalankan peran sebagai guru secara utuh di kelas X, mulai dari merencanakan pembelajaran, mengajar Informatika dan KKA, menilai, sampai merefleksi hasilnya. Berbeda dari PPL Terbimbing, kali ini saya mengambil keputusan sendiri sesuai kondisi siswa dan kelas. Pengalaman ini menjadi tempat saya menguji semua yang saya pelajari di PPG, sehingga mata kuliah ini terkait langsung dengan kesiapan saya menjadi guru.',
      feeling: 'Tantangan terbesar adalah kenyataan di kelas yang sering berbeda dari rencana. Kemampuan siswa sangat beragam, waktu terbatas, dan kelas kadang tidak kondusif, padahal dulu saya terbiasa mengajar satu cara untuk semua siswa dan langsung menegur saat kelas ramai. Di PPL Mandiri saya harus memetakan kesiapan siswa, menyiapkan tugas berjenjang, serta menahan diri tetap tenang ketika kelas gaduh. Semua itu jauh lebih menuntut daripada praktik mengajar saya sebelumnya.',
      evaluation: 'Konsep yang paling membekas bagi saya adalah bahwa mengajar merupakan siklus yang berulang: memahami siswa, merancang pembelajaran, melaksanakan, lalu merefleksikan hasilnya untuk memperbaiki pertemuan berikutnya. Dalam siklus ini konsep dari mata kuliah lain bekerja bersama, misalnya berpikir komputasional untuk merancang alur pembelajaran, TaRL untuk menyesuaikan tugas dengan kesiapan siswa, dan kesiapan emosi guru untuk mengelola kelas.',
      analysis: 'Kendala nyata di kelas menunjukkan bahwa rencana pembelajaran perlu disesuaikan dengan kondisi siswa, bukan sekadar dijalankan apa adanya. Observasi dan refleksi membantu saya menentukan perbaikan yang lebih tepat.',
      conclusion: 'Setelah PPL Mandiri, saya ingin menjadikan refleksi setelah mengajar sebagai kebiasaan, dengan mencatat apa yang berjalan, apa yang belum, dan apa yang akan diperbaiki. Saya juga akan terus melatih pemetaan kesiapan siswa dan ketenangan saat kelas tidak kondusif. Saya sadar penerapannya belum sempurna, sehingga saya akan memperbaikinya sedikit demi sedikit dari satu pertemuan ke pertemuan berikutnya.',
      actionPlan: 'Artefak yang saya pilih adalah Laporan Perencanaan dan Implementasi Pembelajaran Mendalam Berbasis TaRL.',
    },
    artifacts: [
      { name: 'Laporan Perencanaan dan Implementasi Pembelajaran Mendalam Berbasis TaRL', type: 'Laporan Praktik Pembelajaran', size: 'Artefak pembelajaran', evidence: 'Bagian II mendokumentasikan praktik mengajar di kelas X-4 pada materi algoritma dan flowchart: menjalankan rencana, menemukan kendala di lapangan, mencari solusi, merefleksikan, dan menyusun perbaikan.', reason: 'Laporan ini menunjukkan bagaimana saya menjalankan peran guru secara mandiri, bukan hanya merancang pembelajaran, dan sejalan dengan siklus mengajar yang dipelajari di PPL Mandiri.', support: 'Kendala dan Solusi serta Catatan Observasi menunjukkan bahwa penguasaan urutan algoritma dan fungsi simbol flowchart belum merata, sehingga saya menyiapkan LKPD berjenjang dan mengulang penjelasan simbol. Deskripsi Pelaksanaan, Hasil Observasi, dan Refleksi Diri mendukung siklus mengajar. Refleksi Diri butir 4 dan Rencana Perbaikan Berdasarkan Temuan memuat latihan khusus serta cara memeriksa keberhasilannya; foto dokumentasi menjadi bukti pelaksanaan di kelas.', url: 'https://drive.google.com/file/d/1pUY5TLHIiJy_6PqIymALldRtU8DNYKGF/view?usp=sharing' }
    ]
  },

  'refleksi-program': {
    code: 'REFLEKSI PPG',
    semester: 'Dua Semester',
    category: 'Refleksi Program',
    title: 'Refleksi Program PPG',
    subtitle: 'Rangkuman pembelajaran, komitmen profesional, dan rencana tindak lanjut setelah mengikuti Program PPG.',
    sks: 'Refleksi Akhir',
    icon: 'sparkles',
    color: 'violet',
    pdfUrl: '',
    gibbs: {},
    artifacts: []
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
  const karyaInovasiView = document.getElementById('karya-inovasi-pendidikan-view');
  const breadcrumbCurrent = document.getElementById('breadcrumb-current');

  // Scroll to top of main content
  window.scrollTo({ top: 0, behavior: 'smooth' });
  karyaInovasiView?.classList.add('hidden');

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
  } else if (target === 'karya-inovasi-pendidikan' && karyaInovasiView) {
    dashboardView.classList.add('hidden');
    reflectionDetailView.classList.add('hidden');
    karyaInovasiView.classList.remove('hidden');
    breadcrumbCurrent.textContent = 'Karya Inovasi Pendidikan';
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
  const sem2Keys = ['pse', 'pma-2', 'project-kepemimpinan', 'daring-bauran', 'ppl-2'];

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
  const isProgramReflection = key === 'refleksi-program';
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
          ${isProgramReflection ? 'Refleksi Akhir PPG' : `${course.artifacts.length} Artefak`}
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

  if (key === 'refleksi-program') {
    renderProgramReflection(container);
    return;
  }

  activeGibbsTab = 'description';
  const headerThemes = {
    'pma-1': { banner: 'from-blue-600 via-blue-700 to-indigo-800', glow: 'bg-blue-300/20' },
    'filosofi': { banner: 'from-amber-500 via-orange-600 to-amber-700', glow: 'bg-amber-200/20' },
    'ct': { banner: 'from-teal-500 via-teal-600 to-cyan-800', glow: 'bg-teal-200/20' },
    'growth-mindset': { banner: 'from-emerald-500 via-green-600 to-emerald-800', glow: 'bg-emerald-200/20' },
    'ppl-1': { banner: 'from-indigo-500 via-indigo-600 to-violet-800', glow: 'bg-indigo-200/20' },
    'ppdp': { banner: 'from-sky-500 via-cyan-600 to-sky-800', glow: 'bg-sky-200/20' },
    'pse': { banner: 'from-rose-500 via-pink-600 to-rose-800', glow: 'bg-rose-200/20' },
    'pma-2': { banner: 'from-violet-500 via-purple-600 to-violet-800', glow: 'bg-violet-200/20' },
    'ppl-2': { banner: 'from-fuchsia-500 via-fuchsia-600 to-purple-800', glow: 'bg-fuchsia-200/20' },
    'project-kepemimpinan': { banner: 'from-orange-500 via-red-600 to-rose-800', glow: 'bg-orange-200/20' },
    'daring-bauran': { banner: 'from-cyan-500 via-blue-600 to-cyan-800', glow: 'bg-cyan-200/20' }
  };
  const headerTheme = headerThemes[key] || { banner: 'from-blue-600 via-blue-700 to-indigo-800', glow: 'bg-blue-300/20' };

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
    <div class="interactive-card rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden bg-gradient-to-br ${headerTheme.banner} text-white shadow-lg">
      <div class="absolute top-0 right-0 w-72 h-72 ${headerTheme.glow} rounded-full blur-2xl pointer-events-none"></div>
      <div class="relative z-10">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30 shadow-sm">
            ${course.semester}
          </span>
          <span class="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-white border border-white/20">
            ${course.code} • ${course.sks}
          </span>
          <span class="px-3 py-1 rounded-lg text-xs font-medium bg-black/10 text-white border border-white/20">
            ${course.category}
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
          ${course.title}
        </h2>
        <p class="text-sm sm:text-base text-white/90 max-w-3xl leading-relaxed">
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
          ['Challenge', 'circle-help', course.gibbs.feeling],
          ['Concept', 'lightbulb', course.gibbs.evaluation],
          ['Change', 'refresh-cw', course.gibbs.conclusion]
        ].map(([label, icon, text]) => `
          <article class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80">
            <div class="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
              <i data-lucide="${icon}" class="w-4 h-4"></i>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">${label}</h4>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${text || 'Belum ada narasi refleksi.'}</p>
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
              <p class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Bukti refleksi:</strong> ${art.evidence || 'Artefak ini menjadi bukti konkret penerapan dan perkembangan kompetensi pembelajaran.'}</p>
              <p class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Alasan dipilih:</strong> ${art.reason || 'Relevan dengan pengalaman, tantangan, dan perubahan yang direfleksikan.'}</p>
              <p class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white">Bagian pendukung:</strong> ${art.support || 'Isi, proses penyusunan, dan hasil artefak menunjukkan keterkaitan langsung dengan refleksi.'}</p>
            </div>
            ${art.url ? `<a href="${art.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">Buka artefak <i data-lucide="external-link" class="w-4 h-4"></i></a>` : ''}
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

// Halaman khusus refleksi menyeluruh Program PPG.
function renderProgramReflection(container) {
  const commitments = [
    { icon: 'book-open-check', title: 'Terus belajar dan membiasakan refleksi', text: 'Saya akan terus belajar dan membiasakan refleksi setelah mengajar agar praktik pembelajaran selalu membaik.' },
    { icon: 'heart-handshake', title: 'Mengelola emosi sebelum masuk kelas', text: 'Saya akan menyelesaikan dan menata emosi sebelum mengajar agar mampu mengelola kelas dengan tenang.' },
    { icon: 'users-round', title: 'Merancang pembelajaran sesuai kebutuhan murid', text: 'Saya akan memahami kesiapan murid terlebih dahulu, lalu merancang pembelajaran yang sesuai dengan kebutuhan mereka.' },
    { icon: 'clipboard-check', title: 'Menilai secara autentik', text: 'Saya akan menggunakan asesmen autentik dan memanfaatkan hasilnya untuk memperbaiki proses pembelajaran.' },
    { icon: 'lightbulb', title: 'Memilih strategi dan teknologi yang tepat', text: 'Saya akan memilih strategi dan teknologi berdasarkan kebutuhan murid, bukan sekadar mengikuti tren.' },
    { icon: 'handshake', title: 'Berkolaborasi dan berbagi praktik baik', text: 'Saya akan berkolaborasi dengan rekan guru, berbagi praktik baik, dan berani menjadi penggerak perubahan di sekolah.' }
  ];
  const actionPlans = [
    { icon: 'scan-search', title: 'Memetakan kebutuhan murid sejak awal', text: 'Saya akan memulai setiap topik dengan asesmen diagnostik, lalu merancang kegiatan sesuai kesiapan murid melalui pendekatan TaRL.' },
    { icon: 'notebook-pen', title: 'Membiasakan refleksi dan menjaga ketenangan emosi', text: 'Saya akan menulis jurnal refleksi setelah mengajar, berhenti sejenak saat terpancing emosi, dan menyusun kesepakatan kelas bersama murid.' },
    { icon: 'laptop-minimal-check', title: 'Berbagi praktik baik dan merancang pembelajaran aktif', text: 'Saya akan berkolaborasi dengan rekan guru serta memanfaatkan computational thinking dan LMS agar murid terlibat aktif dalam belajar.' }
  ];
  const renderCards = (items, accent) => items.map((item, index) => `
    <article class="group relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/70 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <div class="absolute -right-8 -top-8 h-24 w-24 rounded-full ${accent === 'teal' ? 'bg-teal-500/10' : 'bg-violet-500/10'} transition-transform group-hover:scale-125"></div>
      <div class="relative flex items-start gap-4">
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent === 'teal' ? 'bg-teal-500/10 text-teal-600 dark:text-teal-300' : 'bg-violet-500/10 text-violet-600 dark:text-violet-300'}">
          <i data-lucide="${item.icon}" class="h-5 w-5"></i>
        </div>
        <div>
          <div class="mb-2 text-xs font-bold tracking-widest ${accent === 'teal' ? 'text-teal-600 dark:text-teal-300' : 'text-violet-600 dark:text-violet-300'}">${String(index + 1).padStart(2, '0')}</div>
          <h4 class="mb-2 font-bold leading-snug text-slate-900 dark:text-white">${item.title}</h4>
          <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">${item.text}</p>
        </div>
      </div>
    </article>
  `).join('');

  container.innerHTML = `
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <button onclick="navigateTo('dashboard')" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:-translate-x-1">
        <i data-lucide="arrow-left" class="h-4 w-4"></i>Kembali ke Dashboard
      </button>
      <button onclick="window.print()" class="inline-flex items-center gap-2 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/50 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-300">
        <i data-lucide="printer" class="h-4 w-4"></i>Cetak Refleksi
      </button>
    </div>

    <header class="interactive-card relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 p-7 text-white shadow-xl sm:p-10">
      <div class="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10"></div>
      <div class="relative max-w-3xl">
        <span class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide"><i data-lucide="sparkles" class="h-4 w-4"></i>REFLEKSI AKHIR • PROGRAM PPG</span>
        <h2 class="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Refleksi Pengalaman Belajar</h2>
        <p class="text-sm leading-relaxed text-indigo-50 sm:text-base">Dua semester pembelajaran membentuk cara pandang saya tentang pendidikan, tanggung jawab guru, dan langkah nyata yang akan saya lakukan dalam perjalanan profesional.</p>
      </div>
    </header>

    <section class="interactive-card mb-8 rounded-3xl p-6 sm:p-8">
      <div class="mb-5 flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 font-bold text-blue-600 dark:text-blue-300">A</div>
        <div><h3 class="text-xl font-bold text-slate-900 dark:text-white">Refleksi Pengalaman Belajar Selama Mengikuti PPG</h3><p class="text-sm text-slate-500 dark:text-slate-400">Pendidikan yang berpihak pada kebutuhan dan perkembangan murid</p></div>
      </div>
      <article class="rounded-2xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-indigo-50/60 p-5 dark:border-blue-900/60 dark:from-blue-950/30 dark:to-indigo-950/20 sm:p-7">
        <div class="mb-3 flex items-center gap-3"><span class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">1</span><h4 class="text-lg font-bold text-slate-900 dark:text-white">Pendidikan di Indonesia seharusnya seperti apa?</h4></div>
        <p class="pl-0 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:pl-12 sm:text-base">Setelah mengikuti pengalaman belajar selama dua semester ini, saya menyadari bahwa pendidikan di Indonesia seharusnya berpusat pada kebutuhan murid, bukan sekadar mengejar penyelesaian materi. Pembelajaran perlu dimulai dari memahami kesiapan tiap murid, bermakna bagi kehidupan nyata, dan melatih cara berpikir, bukan hafalan. Asesmen seharusnya menjadi alat untuk memperbaiki pembelajaran, dan guru perlu menjadi teladan yang mampu mengelola emosinya demi menjaga kesejahteraan murid.</p>
      </article>
    </section>

    <section class="interactive-card mb-8 rounded-3xl p-6 sm:p-8">
      <div class="mb-6 flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 font-bold text-teal-600 dark:text-teal-300">2</div>
        <div><h3 class="text-xl font-bold text-slate-900 dark:text-white">Yang Dapat Saya Lakukan untuk Menjadi Guru Profesional</h3><p class="text-sm text-slate-500 dark:text-slate-400">Enam komitmen untuk terus bertumbuh dan berdampak</p></div>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">${renderCards(commitments, 'teal')}</div>
    </section>

    <section class="interactive-card mb-8 rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50/70 to-white p-6 dark:border-violet-900/50 dark:from-violet-950/20 dark:to-slate-900 sm:p-8">
      <div class="mb-6 flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300"><i data-lucide="map" class="h-5 w-5"></i></div>
        <div><p class="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-300">Langkah Nyata</p><h3 class="text-xl font-bold text-slate-900 dark:text-white">Rencana Tindak Lanjut</h3></div>
      </div>
      <h4 class="mb-5 text-base font-semibold text-slate-700 dark:text-slate-200">Tiga hal penting yang akan saya lakukan ketika memulai karier sebagai guru</h4>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">${renderCards(actionPlans, 'violet')}</div>
    </section>

    <div class="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20 sm:p-6">
      <i data-lucide="sprout" class="mx-auto mb-2 h-6 w-6 text-emerald-600 dark:text-emerald-300"></i>
      <p class="text-sm font-medium leading-relaxed text-emerald-900 dark:text-emerald-200">Menjadi guru profesional adalah perjalanan untuk terus belajar, berefleksi, dan berpihak pada tumbuh kembang setiap murid.</p>
    </div>
  `;
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
