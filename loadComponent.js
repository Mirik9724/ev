function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(elementId);
            container.innerHTML = data;

            // Выполнение скриптов
            const scripts = container.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const script = document.createElement('script');
                if (scripts[i].src) {
                    script.src = scripts[i].src;
                } else {
                    script.innerHTML = scripts[i].innerHTML;
                }
                document.body.appendChild(script); // Вставляем скрипт в тело страницы
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
