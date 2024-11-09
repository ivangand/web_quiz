let score = 0;
let questionTimer;
let totalTimer;
let timeLeft = 10;
let totalTime = 30; // Total waktu 2 menit
let questions = [
    { text: "Apakah Python adalah bahasa pemrograman?", answer: true },
    { text: "Apakah Microsoft Word adalah perangkat lunak pengolah gambar?", answer: false },
    { text: "Apakah HTML digunakan untuk membuat struktur halaman web?", answer: true },
    { text: "Apakah CSS adalah bahasa pemrograman?", answer: false },
    { text: "Apakah Git digunakan untuk version control?", answer: true },
    { text: "Apakah SQL digunakan untuk mengelola basis data?", answer: true },
    { text: "Apakah Java adalah sejenis kopi?", answer: false },
    { text: "Apakah bahasa C++ digunakan untuk pemrograman berorientasi objek?", answer: true },
    { text: "Apakah Linux adalah sistem operasi?", answer: true },
    { text: "Apakah JavaScript dijalankan di sisi server?", answer: false },
    { text: "Apakah PHP adalah bahasa pemrograman server-side?", answer: true },
    { text: "Apakah Microsoft Excel adalah perangkat lunak pengolah angka?", answer: true },
    { text: "Apakah CSS digunakan untuk menambahkan fungsionalitas pada halaman web?", answer: false },
    { text: "Apakah JSON adalah format pertukaran data yang ringan?", answer: true },
    { text: "Apakah React adalah framework untuk backend development?", answer: false },
    { text: "Apakah MySQL adalah sistem manajemen basis data relasional?", answer: true },
    { text: "Apakah Python diciptakan oleh Guido van Rossum?", answer: true },
    { text: "Apakah Adobe Photoshop adalah perangkat lunak pemrograman?", answer: false },
    { text: "Apakah HTTP singkatan dari HyperText Transfer Protocol?", answer: true },
    { text: "Apakah RAM menyimpan data secara permanen?", answer: false },
    { text: "Apakah Linux dikembangkan sebagai perangkat lunak open-source?", answer: true },
    { text: "Apakah HTML merupakan bahasa markup?", answer: true },
    { text: "Apakah REST API digunakan untuk mengakses data di server?", answer: true },
    { text: "Apakah TCP adalah protokol internet untuk mengirimkan data?", answer: true },
    { text: "Apakah JSON digunakan untuk mengatur layout pada halaman web?", answer: false },
    { text: "Apakah IDE singkatan dari Integrated Development Environment?", answer: true },
    { text: "Apakah CSS3 adalah versi ketiga dari CSS?", answer: true },
    { text: "Apakah Python digunakan untuk machine learning?", answer: true },
    { text: "Apakah Vue adalah framework untuk membangun aplikasi backend?", answer: false },
    { text: "Apakah Docker digunakan untuk membuat container aplikasi?", answer: true },
    { text: "Apakah Swift adalah bahasa pemrograman untuk pengembangan aplikasi iOS?", answer: true },
    { text: "Apakah Ruby on Rails adalah framework untuk bahasa pemrograman Ruby?", answer: true },
    { text: "Apakah DNS berfungsi untuk mengubah nama domain menjadi alamat IP?", answer: true },
    { text: "Apakah Node.js adalah runtime untuk menjalankan JavaScript di server?", answer: true },
    { text: "Apakah JSON adalah singkatan dari JavaScript Object Notation?", answer: true },
    { text: "Apakah MongoDB adalah basis data NoSQL?", answer: true },
    { text: "Apakah CSS digunakan untuk membuat halaman web interaktif?", answer: false }, // HTML+JavaScript yang interaktif
    { text: "Apakah MVC adalah singkatan dari Model-View-Controller?", answer: true },
    { text: "Apakah XML adalah bahasa markup seperti HTML?", answer: true },
    { text: "Apakah Windows adalah sistem operasi open-source?", answer: false },
    { text: "Apakah PostgreSQL adalah database yang mendukung relasi?", answer: true },
    { text: "Apakah SSH digunakan untuk koneksi remote yang aman?", answer: true },
    { text: "Apakah Redis digunakan sebagai database berbasis memori?", answer: true },
    { text: "Apakah JSON digunakan untuk query dalam basis data relasional?", answer: false },
    { text: "Apakah Bootstrap adalah framework CSS?", answer: true },
    { text: "Apakah NPM adalah manajer paket untuk Python?", answer: false }, // Jawabannya: Node.js
    { text: "Apakah Flask adalah framework Python untuk pengembangan web?", answer: true },
    { text: "Apakah Angular adalah framework JavaScript?", answer: true },
    { text: "Apakah Blockchain adalah basis data terpusat?", answer: false },
    { text: "Apakah API memungkinkan interaksi antara aplikasi?", answer: true },
    { text: "Apakah VPN digunakan untuk mengamankan koneksi internet?", answer: true },
    { text: "Apakah SQLite adalah database yang tidak memerlukan server terpisah?", answer: true }
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
