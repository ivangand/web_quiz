let score = 0;
let questionTimer;
let totalTimer;
let timeLeft = 10;
let totalTime = 180; // Total waktu 2 menit
let questions = [
    { text: "Apakah Bangkok adalah ibu kota Thailand?", answer: true },
    { text: "Apakah Singapura terletak di Pulau Kalimantan?", answer: false },
    { text: "Apakah Filipina terdiri dari lebih dari 7.000 pulau?", answer: true },
    { text: "Apakah bahasa resmi Malaysia adalah Melayu?", answer: true },
    { text: "Apakah Brunei terletak di Pulau Sumatra?", answer: false },
    { text: "Apakah Vietnam memiliki lebih dari satu ibu kota?", answer: false },
    { text: "Apakah Laos berbatasan langsung dengan Tiongkok?", answer: true },
    { text: "Apakah Myanmar pernah dikenal dengan nama Burma?", answer: true },
    { text: "Apakah Kamboja terkenal dengan Candi Angkor Wat?", answer: true },
    { text: "Apakah Malaysia memiliki dua ibu kota?", answer: true },
    { text: "Apakah Filipina adalah negara yang mayoritas penduduknya beragama Kristen?", answer: true },
    { text: "Apakah Timor Leste adalah negara bagian Indonesia?", answer: false },
    { text: "Apakah Pulau Sumatra termasuk dalam wilayah Indonesia?", answer: true },
    { text: "Apakah negara Laos terletak di Semenanjung Indochina?", answer: true },
    { text: "Apakah negara yang terletak di utara Indonesia adalah Thailand?", answer: false }, // Jawabannya: Malaysia
    { text: "Apakah Vietnam adalah negara yang berbatasan dengan Laut Cina Selatan?", answer: true },
    { text: "Apakah negara Brunei memiliki wilayah yang sangat kecil?", answer: true },
    { text: "Apakah Filipina memiliki wilayah daratan yang lebih besar dari Indonesia?", answer: false }, // Jawabannya: Indonesia
    { text: "Apakah negara yang berbatasan dengan Myanmar adalah Kamboja?", answer: false }, // Jawabannya: Thailand
    { text: "Apakah negara Indonesia adalah negara dengan populasi terbesar di Asia Tenggara?", answer: true },
    { text: "Apakah Candi Borobudur terletak di Kamboja?", answer: false }, // Jawabannya: Indonesia
    { text: "Apakah Malaysia terkenal dengan kota Kuala Lumpur?", answer: true },
    { text: "Apakah negara yang terletak di selatan Vietnam adalah Kamboja?", answer: true },
    { text: "Apakah Jakarta adalah ibu kota negara Singapura?", answer: false }, // Jawabannya: Singapura
    { text: "Apakah bahasa resmi di Laos adalah Laos?", answer: true },
    { text: "Apakah negara Thailand terkenal dengan wisata pantainya?", answer: true },
    { text: "Apakah Tokyo adalah ibu kota Jepang?", answer: true },
    { text: "Apakah India terletak di Asia Selatan?", answer: true },
    { text: "Apakah Beijing adalah ibu kota dari Korea Selatan?", answer: false }, // Jawabannya: Tiongkok
    { text: "Apakah Iran berbatasan dengan Laut Kaspia?", answer: true },
    { text: "Apakah bahasa resmi di Afghanistan adalah Parsi?", answer: false }, // Jawabannya: Dari dan Pashto
    { text: "Apakah Pakistan memiliki garis pantai di Laut Arab?", answer: true },
    { text: "Apakah bahasa Arab adalah bahasa resmi di Jepang?", answer: false }, // Jawabannya: Jepang
    { text: "Apakah Ulaanbaatar adalah ibu kota Mongolia?", answer: true },
    { text: "Apakah Korea Selatan berbatasan langsung dengan Tiongkok?", answer: false }, // Jawabannya: Tidak
    { text: "Apakah Riyadh adalah ibu kota dari Arab Saudi?", answer: true },
    { text: "Apakah Iran dan Irak berbatasan langsung?", answer: true },
    { text: "Apakah Bhutan terletak di antara India dan Nepal?", answer: false }, // Jawabannya: India dan Tiongkok
    { text: "Apakah Qatar memiliki perbatasan darat dengan negara Arab Saudi?", answer: true },
    { text: "Apakah Israel memiliki Laut Mati di perbatasannya?", answer: true },
    { text: "Apakah Maladewa adalah negara kepulauan di Samudra Hindia?", answer: true },
    { text: "Apakah Nepal memiliki garis pantai?", answer: false },
    { text: "Apakah Dubai adalah ibu kota Uni Emirat Arab?", answer: false }, // Jawabannya: Abu Dhabi
    { text: "Apakah Bahrain adalah negara pulau di Teluk Persia?", answer: true },
    { text: "Apakah Yerevan adalah ibu kota dari Armenia?", answer: true },
    { text: "Apakah Kazakhstan adalah negara Asia yang memiliki wilayah di Eropa?", answer: true },
    { text: "Apakah Bangladesh adalah negara yang berbatasan langsung dengan Myanmar?", answer: true },
    { text: "Apakah Teheran adalah ibu kota Turki?", answer: false }, // Jawabannya: Iran
    { text: "Apakah Damaskus adalah salah satu kota tertua di dunia?", answer: true },
    { text: "Apakah Sri Lanka terletak di sebelah selatan India?", answer: true },
    { text: "Apakah Pyongyang adalah ibu kota Korea Utara?", answer: true },
    { text: "Apakah Uzbekistan adalah negara yang terkunci daratan?", answer: true },
    { text: "Apakah Georgia dan Azerbaijan adalah negara di kawasan Kaukasus?", answer: true }
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
