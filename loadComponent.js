function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById(elementId);
            container.innerHTML = data;

            // Извлекаем и выполняем все скрипты после вставки контента
            const scripts = container.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.innerHTML = script.innerHTML;
                }
                document.body.appendChild(newScript); // Добавляем скрипт в тело страницы
            });
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
