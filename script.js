let score = 0;
let questionTimer;
let totalTimer;
let timeLeft = 10;
let totalTime = 180; // Total waktu 2 menit
let questions = [
    { text: "Apakah Jakarta adalah ibu kota Indonesia?", answer: true },
    { text: "Apakah Bali adalah sebuah negara?", answer: false },
    { text: "Apakah Indonesia memiliki lebih dari 17.000 pulau?", answer: true },
    { text: "Apakah bahasa resmi Indonesia adalah Jawa?", answer: false },
    { text: "Apakah Garuda Pancasila adalah lambang negara Indonesia?", answer: true },
    { text: "Apakah Monas berada di Surabaya?", answer: false },
    { text: "Apakah Indonesia merdeka pada tahun 1945?", answer: true },
    { text: "Apakah Pulau Komodo terletak di Kalimantan?", answer: false },
    { text: "Apakah Danau Toba adalah danau vulkanik terbesar di Indonesia?", answer: true },
    { text: "Apakah mata uang Indonesia adalah Peso?", answer: false },
    { text: "Apakah bahasa Indonesia ditetapkan sebagai bahasa nasional pada tahun 1928?", answer: true },
    { text: "Apakah Raja Ampat terletak di provinsi Papua Barat?", answer: true },
    { text: "Apakah candi terbesar di Indonesia adalah Candi Prambanan?", answer: false }, // Jawabannya: Borobudur
    { text: "Apakah Pulau Jawa adalah pulau terpadat di Indonesia?", answer: true },
    { text: "Apakah jumlah provinsi di Indonesia lebih dari 30?", answer: true },
    { text: "Apakah Kota Bandung terkenal dengan sebutan 'Kota Kembang'?", answer: true },
    { text: "Apakah Tari Saman berasal dari Jawa Barat?", answer: false }, // Jawabannya: Aceh
    { text: "Apakah makanan khas Sumatra Barat adalah rendang?", answer: true },
    { text: "Apakah Riau adalah provinsi di Pulau Kalimantan?", answer: false }, // Jawabannya: Sumatra
    { text: "Apakah puncak tertinggi di Indonesia adalah Puncak Jaya?", answer: true },
    { text: "Apakah suku terbesar di Indonesia adalah Suku Betawi?", answer: false }, // Jawabannya: Suku Jawa
    { text: "Apakah Provinsi Sulawesi Selatan beribukota di Makassar?", answer: true },
    { text: "Apakah alat musik angklung berasal dari Sumatra?", answer: false }, // Jawabannya: Jawa Barat
    { text: "Apakah Pulau Bali terkenal dengan budaya dan tariannya?", answer: true },
    { text: "Apakah Indonesia terletak di benua Afrika?", answer: false },
    { text: "Apakah Sungai Kapuas adalah sungai terpanjang di Indonesia?", answer: true },
    { text: "Apakah Tari Kecak berasal dari Bali?", answer: true },
    { text: "Apakah Pulau Sumatra adalah pulau terbesar di Indonesia?", answer: false }, // Jawabannya: Papua
    { text: "Apakah kopi luwak berasal dari Indonesia?", answer: true },
    { text: "Apakah Taman Nasional Ujung Kulon terletak di Jawa Timur?", answer: false }, // Jawabannya: Banten
    { text: "Apakah gunung berapi aktif tertinggi di Indonesia adalah Gunung Kerinci?", answer: true },
    { text: "Apakah makanan khas Yogyakarta adalah Gudeg?", answer: true },
    { text: "Apakah ibukota provinsi Jawa Timur adalah Surabaya?", answer: true },
    { text: "Apakah Danau Sentani terletak di Papua?", answer: true },
    { text: "Apakah senjata tradisional dari Aceh adalah Rencong?", answer: true },
    { text: "Apakah Upacara Ngaben adalah tradisi kremasi dari Bali?", answer: true },
    { text: "Apakah Indonesia berbatasan dengan India?", answer: false },
    { text: "Apakah festival Sekaten diselenggarakan di Solo?", answer: false },
    { text: "Apakah Danau Poso terletak di Sulawesi Tengah?", answer: true },
    { text: "Apakah rumah adat Tongkonan berasal dari Sumatra?", answer: false },
    { text: "Apakah lagu nasional 'Indonesia Raya' pertama kali diperdengarkan pada tahun 1928?", answer: true },
    { text: "Apakah Tana Toraja terkenal dengan tradisi pemakaman uniknya?", answer: true },
    { text: "Apakah alat musik Sasando berasal dari Nusa Tenggara Timur?", answer: true },
    { text: "Apakah Pulau Kalimantan berbatasan dengan negara Malaysia?", answer: true },
    { text: "Apakah Tari Piring berasal dari Sumatra Barat?", answer: true },
    { text: "Apakah Pulau Lombok terkenal dengan pantai Senggigi?", answer: true },
    { text: "Apakah Teluk Cenderawasih adalah taman laut terbesar di Indonesia?", answer: true },
    { text: "Apakah Provinsi Lampung terkenal dengan Taman Nasional Way Kambas?", answer: true },
    { text: "Apakah bunga nasional Indonesia adalah Rafflesia arnoldii?", answer: true },
    { text: "Apakah Tari Jaipong berasal dari Jawa Barat?", answer: true },
    { text: "Apakah Taman Nasional Bunaken terkenal dengan keindahan terumbu karangnya?", answer: true },
    { text: "Apakah Pulau Seribu terletak di provinsi DKI Jakarta?", answer: true },
    { text: "Apakah Sunda Kelapa adalah pelabuhan tua di Jakarta?", answer: true },
    { text: "Apakah alat musik Kolintang berasal dari Sulawesi?", answer: true },
    { text: "Apakah wilayah Nusa Tenggara terdiri dari dua provinsi, Nusa Tenggara Barat dan Nusa Tenggara Timur?", answer: true },
    { text: "Apakah kota Malang terkenal dengan julukan 'Kota Apel'?", answer: true },
    { text: "Apakah suku asli Pulau Bali adalah Suku Baduy?", answer: false },
    { text: "Apakah alat musik tradisional dari Sunda adalah Calung?", answer: true },
    { text: "Apakah batik telah diakui UNESCO sebagai warisan budaya dunia dari Indonesia?", answer: true },
    { text: "Apakah Pura Besakih adalah pura terbesar di Bali?", answer: true },
    { text: "Apakah Pulau Papua terkenal dengan pegunungan Jayawijaya?", answer: true },
    { text: "Apakah Tari Topeng adalah tarian khas dari Betawi?", answer: true },
    { text: "Apakah Danau Maninjau terletak di provinsi Sumatra Utara?", answer: false },
    { text: "Apakah masakan soto dikenal di berbagai daerah dengan nama berbeda-beda?", answer: true },
    { text: "Apakah suku Dani adalah salah satu suku asli di Papua?", answer: true },
    { text: "Apakah Gunung Bromo terletak di Bali?", answer: false },
    { text: "Apakah alat musik Tifa berasal dari Papua?", answer: true },
    { text: "Apakah Festival Danau Toba adalah acara tahunan di Sumatra Utara?", answer: true },
    { text: "Apakah ibu kota provinsi Sumatra Selatan adalah Palembang?", answer: true },
    { text: "Apakah wilayah Indonesia berada di tiga zona waktu yang berbeda?", answer: true },
    { text: "Apakah rumah tradisional dari Sulawesi Selatan adalah Rumah Joglo?", answer: false }
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayQuestion() {
    const question = getRandomQuestion();
    document.getElementById("question").textContent = question.text;
    document.getElementById("question").dataset.answer = question.answer;
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").style.display = "none";
    resetQuestionTimer();
}

function resetQuestionTimer() {
    clearInterval(questionTimer);
    timeLeft = 5;
    document.getElementById("timer").textContent = timeLeft;
    questionTimer = setInterval(countdownQuestion, 1000);
}

function countdownQuestion() {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(questionTimer);
        answer(null);
    }
}

function startTotalTimer() {
    totalTimer = setInterval(countdownTotal, 1000);
    document.getElementById("total-timer").textContent = totalTime;
}

function countdownTotal() {
    totalTime--;
    document.getElementById("total-timer").textContent = totalTime;

    if (totalTime <= 0) {
        clearInterval(totalTimer);
        clearInterval(questionTimer);
        answer(null);
        endQuiz();
    }
}

function answer(userAnswer) {
    const correctAnswer = document.getElementById("question").dataset.answer === "true";
    const feedback = document.getElementById("feedback");

    clearInterval(questionTimer);  // Hentikan timer soal

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Jawaban Anda Benar!";
        score += 10;
    } else if (userAnswer === null) {
        feedback.textContent = `Waktu Habis! Jawaban yang benar adalah: ${correctAnswer ? "Benar" : "Salah"}`;
    } else {
        feedback.textContent = `Jawaban Anda Salah! Jawaban yang benar adalah: ${correctAnswer ? "Benar" : "Salah"}`;
    }

    document.getElementById("score").textContent = score;
    document.getElementById("next-button").style.display = "inline"; // Tampilkan tombol Lanjut
}

function nextQuestion() {
    displayQuestion();  // Tampilkan pertanyaan berikutnya
}

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
    startTotalTimer(); // Mulai total timer 2 menit
}

function endQuiz() {
    sessionStorage.setItem("score", score); // Simpan skor akhir ke sessionStorage
    window.location.href = "total_score.html"; // Arahkan ke halaman total skor
}

function goBackToStart() {
    window.location.href = "home.html"; // Mengarahkan ke halaman home
}

window.onload = () => {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("end-screen").style.display = "none";
};
