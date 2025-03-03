document.addEventListener("click", () => {
    let video = document.getElementById("screamer-video");
    video.muted = false;  // Включаем звук
    video.loop = true;    // Делаем видео зацикленным
    video.play();         // Запускаем видео
}, { once: true }); // Выполнится только один раз
