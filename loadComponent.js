function loadComponent(url, elementId){
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
});

function showRickRollVideo() {
            var video = document.getElementById('video-player');
            video.style.display = 'block'; // Показать видео
            video.play(); // Запустить воспроизведение
            video.volume = 1.0; // Установить максимальную громкость
        }
