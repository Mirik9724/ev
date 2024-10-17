function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(elementId);
            container.innerHTML = data;

            // Выполняем встроенные скрипты
            const scripts = container.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                eval(scripts[i].innerText); // Выполняем скрипт
            }
        })
        .catch(error => console.error('Ошибка при загрузке компонента:', error));
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
