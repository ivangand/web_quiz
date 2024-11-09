// Fungsi untuk mengambil skor akhir dari sessionStorage dan menampilkan hasilnya
window.onload = function () {
    const finalScore = sessionStorage.getItem("score") || 0; // Ambil skor dari sessionStorage
    const finalScoreElement = document.getElementById("final-score");
    const finalMessageElement = document.getElementById("final-message");

    finalScoreElement.textContent = `Skor Akhir Anda: ${finalScore}`;

    // Menampilkan pesan sesuai dengan skor akhir
    if (finalScore >= 80) {
        finalMessageElement.textContent = "Luar biasa! Anda sangat mengenal Indonesia!";
    } else if (finalScore >= 50) {
        finalMessageElement.textContent = "Bagus! Pengetahuan Anda cukup baik.";
    } else {
        finalMessageElement.textContent = "Terus belajar! Cobalah lagi untuk mendapatkan skor yang lebih tinggi.";
    }
}

function restartQuiz() {
    // Ganti ini dengan logika untuk memulai ulang kuis
    window.location.href = 'pilih_quiz.html';
}

function goToHome() {
    // Navigasi ke halaman beranda
    window.location.href = 'home.html';
}

// Contoh fungsi untuk menampilkan skor akhir
function displayFinalScore(score, message) {
    document.getElementById('final-score').textContent = `Skor Akhir Anda: ${score}`;
    document.getElementById('final-message').textContent = message;
}

// Panggil fungsi ini dengan skor dan pesan akhir yang sesuai
displayFinalScore(85, 'Selamat! Anda berhasil.');
