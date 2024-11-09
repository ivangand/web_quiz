let score = 0;
let questionTimer;
let totalTimer;
let timeLeft = 10;
let totalTime = 180; // Total waktu 2 menit
let questions = [
    { text: "Apakah Miya adalah hero tipe Marksman?", answer: true },
    { text: "Apakah tank adalah role utama Ling?", answer: false },
    { text: "Apakah ultimate dari Fanny membutuhkan energi?", answer: true },
    { text: "Apakah Layla termasuk hero Assassin?", answer: false },
    { text: "Apakah emblem Mage dapat meningkatkan magic power?", answer: true },
    { text: "Apakah Aldous terkenal dengan serangan jarak jauh?", answer: false },
    { text: "Apakah Argus memiliki kemampuan untuk menghidupkan dirinya sendiri?", answer: true },
    { text: "Apakah hero Estes termasuk role Support?", answer: true },
    { text: "Apakah ultimate dari Chou adalah The Way of Dragon?", answer: true },
    { text: "Apakah Akai adalah hero dengan kemampuan untuk menarik musuh?", answer: true },
    { text: "Apakah Lesley adalah hero tipe Marksman?", answer: true },
    { text: "Apakah Eudora adalah hero dengan kemampuan serangan area?", answer: true },
    { text: "Apakah Hayabusa adalah hero dengan role Assassin?", answer: true },
    { text: "Apakah Lancelot adalah hero yang menggunakan senjata berupa pedang?", answer: true },
    { text: "Apakah Cyclops memiliki skill yang dapat mengejar musuh dengan cepat?", answer: true },
    { text: "Apakah hero Granger memiliki kemampuan serangan jarak jauh yang kuat?", answer: true },
    { text: "Apakah emblem Fighter memberikan tambahan Physical Attack?", answer: true },
    { text: "Apakah Mage adalah role utama dari hero Gusion?", answer: true },
    { text: "Apakah hero Selena memiliki dua bentuk, yakni Abyssal Form dan Light Form?", answer: true },
    { text: "Apakah hero Natalia bisa menghilang atau menjadi invisibility?", answer: true },
    { text: "Apakah item Blade of Despair memberikan tambahan Physical Attack?", answer: true },
    { text: "Apakah item Ice Queen Wand meningkatkan kecepatan gerakan musuh?", answer: true },
    { text: "Apakah hero Johnson dapat berubah menjadi mobil untuk mengejar musuh?", answer: true },
    { text: "Apakah hero Khufra dapat melompat ke lokasi tertentu untuk menjebak musuh?", answer: true },
    { text: "Apakah hero Tigreal memiliki skill untuk melakukan crowd control?", answer: true },
    { text: "Apakah role Support memiliki kemampuan untuk memberikan heal kepada rekan satu tim?", answer: true },
    { text: "Apakah hero Claude dapat membawa serta teman satu tim ke dalam pertempuran?", answer: false },
    { text: "Apakah hero Lylia memiliki skill yang dapat memperlambat gerakan musuh?", answer: true },
    { text: "Apakah Fanny adalah hero yang memiliki mobilitas tinggi?", answer: true },
    { text: "Apakah hero Masha dapat meningkatkan pertahanan dirinya sendiri?", answer: true },
    { text: "Apakah hero Benedetta menggunakan pedang sebagai senjata utama?", answer: true },
    { text: "Apakah hero Kaja memiliki skill untuk menarik musuh ke dirinya?", answer: true },
    { text: "Apakah item Demon Hunter Sword meningkatkan damage terhadap minion?", answer: true },
    { text: "Apakah hero Bruno merupakan hero dengan kemampuan menyerang jarak jauh?", answer: true },
    { text: "Apakah hero Aurora memiliki kemampuan untuk membekukan musuh?", answer: true },
    { text: "Apakah item Thunder Belt meningkatkan damage basic attack setelah menggunakan skill?", answer: true },
    { text: "Apakah hero Pharsa dapat terbang untuk memberikan serangan dari udara?", answer: true },
    { text: "Apakah item Immortality dapat menghidupkan kembali hero setelah mati?", answer: true },
    { text: "Apakah hero Franco bisa menangkap musuh dengan hooknya?", answer: true },
    { text: "Apakah hero Wanwan memiliki kemampuan untuk menembus pertahanan musuh?", answer: true },
    { text: "Apakah hero Lylia memiliki kemampuan untuk mengeluarkan bom dari jarak jauh?", answer: true },
    { text: "Apakah hero Moskov adalah Marksman yang dapat menyerang dari jarak jauh?", answer: true },
    { text: "Apakah hero Minotaur memiliki kemampuan untuk mengubah dirinya menjadi lebih kuat?", answer: true },
    { text: "Apakah hero Ruby memiliki skill yang memungkinkannya untuk menarik musuh?", answer: true },
    { text: "Apakah hero Karina adalah Assassin dengan serangan yang bisa melompat ke musuh?", answer: true },
    { text: "Apakah item Blade of the Heptaseas memberikan Physical Attack dan Penetration?", answer: true },
    { text: "Apakah hero Aurora adalah hero dengan serangan Magic Damage yang tinggi?", answer: true },
    { text: "Apakah hero Valir memiliki kemampuan untuk memberikan damage area dengan api?", answer: true },
    { text: "Apakah Lemon adalah pro player dari tim RRQ?", answer: true },
    { text: "Apakah OHEB bermain di tim EVOS Legends?", answer: false },
    { text: "Apakah Xavier adalah hero yang sering dimainkan oleh pro player, Xin?", answer: false },
    { text: "Apakah RRQ adalah salah satu tim Mobile Legends yang sering memenangkan turnamen internasional?", answer: true },
    { text: "Apakah alter ego adalah tim yang dimiliki oleh pemain profesional seperti Udil dan Celiboy?", answer: true },
    { text: "Apakah Maxxx dari tim ONIC Esports adalah seorang pro player dengan role Tank?", answer: true },
    { text: "Apakah tim Bren Esports berasal dari Filipina?", answer: true },
    { text: "Apakah EVOS Legends memenangkan MPL Indonesia Season 6?", answer: true },
    { text: "Apakah Pro player, R7, bermain untuk tim ONIC Esports?", answer: false },
    { text: "Apakah Zxuan adalah pemain profesional dari tim Alter Ego?", answer: true },
    { text: "Apakah Tim Mobile Legends yang memenangkan M2 World Championship adalah Bren Esports?", answer: true },
    { text: "Apakah pro player Albert bermain untuk tim RRQ Hoshi?", answer: true },
    { text: "Apakah pro player Dlar dikenal dengan penggunaan hero fighter dan tank?", answer: true },
    { text: "Apakah Oura adalah salah satu pemain profesional dari tim RRQ?", answer: true },
    { text: "Apakah Kairi adalah pemain profesional dari tim EVOS Legends?", answer: false },
    { text: "Apakah pro player, Udil, berperan sebagai Support?", answer: true },
    { text: "Apakah tim Blacklist International berasal dari Indonesia?", answer: false },
    { text: "Apakah hero X.Borg menggunakan Flame Regeneration untuk mengisi HP?", answer: true }
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
