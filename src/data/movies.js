const movies = [
  { 
    id: 1, 
    title: 'The Dark Knight', 
    year: 2008, 
    rating: 9.0, 
    genre: 'Action, Crime, Drama',
    desc: 'Ketika ancaman yang dikenal sebagai Joker mendatangkan malapetaka dan kekacauan pada orang-orang Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terbesarnya untuk melawan ketidakadilan.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' 
  },
  { 
    id: 2, 
    title: 'Inception', 
    year: 2010, 
    rating: 8.8, 
    genre: 'Action, Adventure, Sci-Fi',
    desc: 'Seorang pencuri yang mencuri rahasia perusahaan melalui penggunaan teknologi berbagi mimpi diberikan tugas terbalik: menanamkan ide ke dalam pikiran seorang CEO.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' 
  },
  { 
    id: 3, 
    title: 'Avengers: Endgame', 
    year: 2019, 
    rating: 8.4, 
    genre: 'Action, Adventure, Drama',
    desc: 'Setelah peristiwa menghancurkan di Avengers: Infinity War (2018), alam semesta hancur. Dengan bantuan sekutu yang tersisa, Avengers berkumpul sekali lagi untuk membalikkan tindakan Thanos dan memulihkan keseimbangan alam semesta.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' 
  },
  { 
    id: 4, 
    title: 'Parasite', 
    year: 2019, 
    rating: 8.6, 
    genre: 'Comedy, Drama, Thriller',
    desc: 'Keserakahan dan diskriminasi kelas mengancam hubungan simbiosis yang baru terbentuk antara keluarga Park yang kaya dan klan Kim yang miskin.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' 
  },
  { 
    id: 5, 
    title: 'The Hangover', 
    year: 2009, 
    rating: 7.7, 
    genre: 'Comedy',
    desc: 'Tiga sahabat bangun dari pesta bujang di Las Vegas tanpa ingatan tentang malam sebelumnya dan pengantin pria hilang. Mereka harus berkeliling kota untuk menemukan teman mereka sebelum pernikahan.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/jjCPcxw7QCmFPYM1t3BThdEawJK.jpg' 
  },
  { 
    id: 6, 
    title: 'Eat Pray Love', 
    year: 2010, 
    rating: 5.8, 
    genre: 'Biography, Drama, Romance',
    desc: 'Seorang wanita yang sudah menikah menyadari betapa tidak bahagianya pernikahannya, dan bahwa hidupnya perlu menuju ke arah yang berbeda. Setelah perceraian yang menyakitkan, dia memulai perjalanan keliling dunia untuk menemukan dirinya sendiri.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Eat_pray_love_ver2.jpg' 
  },
  { 
    id: 7, 
    title: 'Thor: Love and Thunder', 
    year: 2022, 
    rating: 6.3, 
    genre: 'Action, Adventure, Comedy',
    desc: 'Thor meminta bantuan Valkyrie, Korg, dan mantan pacarnya Jane Foster untuk melawan Gorr the God Butcher, yang berniat memusnahkan para dewa.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg' 
  },
  { 
    id: 8, 
    title: 'Love Actually', 
    year: 2003, 
    rating: 7.6, 
    genre: 'Comedy, Drama, Romance',
    desc: 'Mengikuti kehidupan delapan pasangan yang sangat berbeda dalam menangani kehidupan cinta mereka di berbagai cerita yang saling terkait longgar, semuanya berlatar waktu sebulan sebelum Natal di London.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg' 
  },
  { 
    id: 9, 
    title: 'Toy Story 4', 
    year: 2019, 
    rating: 7.7, 
    genre: 'Animation, Adventure, Comedy',
    desc: 'Ketika mainan baru bernama "Forky" bergabung dengan Woody dan gengnya, perjalanan darat bersama teman lama dan baru mengungkapkan betapa besarnya dunia bagi sebuah mainan.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg' 
  },
  { 
    id: 10, 
    title: 'Spirited Away', 
    year: 2001, 
    rating: 8.6, 
    genre: 'Animation, Adventure, Family',
    desc: 'Selama kepindahan keluarganya ke pinggiran kota, seorang gadis berusia 10 tahun yang murung berkeliaran di dunia yang diperintah oleh dewa, penyihir, dan roh, di mana manusia diubah menjadi binatang.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' 
  },
  { 
    id: 11, 
    title: 'The Conjuring', 
    year: 2013, 
    rating: 7.5, 
    genre: 'Horror, Mystery, Thriller',
    desc: 'Penyelidik paranormal Ed dan Lorraine Warren bekerja untuk membantu keluarga yang diteror oleh kehadiran gelap di rumah pertanian mereka.',
    imageUrl: 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg' 
  },
  { 
    id: 12, 
    title: 'Interstellar', 
    year: 2014, 
    rating: 8.7, 
    genre: 'Adventure, Drama, Sci-Fi',
    desc: 'Ketika waktu manusia di Bumi hampir habis, tim penjelajah melakukan misi paling penting dalam sejarah manusia: bepergian melampaui galaksi ini untuk menemukan apakah umat manusia memiliki masa depan di antara bintang-bintang.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' 
  },
  { 
    id: 13, 
    title: 'Joker', 
    year: 2019, 
    rating: 8.4, 
    genre: 'Crime, Drama, Thriller',
    desc: 'Di Kota Gotham, komedian yang bermasalah secara mental, Arthur Fleck, diabaikan dan dianiaya oleh masyarakat. Dia kemudian memulai spiral revolusi dan kejahatan berdarah. Jalan ini membawanya berhadapan langsung dengan alter-ego-nya: Joker.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' 
  },
  { 
    id: 14, 
    title: 'Crazy Rich Asians', 
    year: 2018, 
    rating: 6.9, 
    genre: 'Comedy, Drama, Romance',
    desc: 'Kisah ini mengikuti Rachel Chu, seorang profesor ekonomi Tionghoa-Amerika, yang bepergian ke Singapura bersama pacarnya, Nick, untuk pernikahan sahabatnya. Rachel baru menyadari bahwa Nick berasal dari keluarga super kaya.',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg' 
  },
  { 
    id: 15, 
    title: 'Godzilla', 
    year: 2014, 
    rating: 6.4, 
    genre: 'Action, Adventure, Sci-Fi',
    desc: 'Dunia diliputi oleh kemunculan monster raksasa, tetapi salah satu dari mereka mungkin menjadi satu-satunya yang bisa menyelamatkan umat manusia.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Godzilla_%282014%29_poster.jpg' 
  },
];

export default movies;