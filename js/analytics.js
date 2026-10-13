document.addEventListener('click', (event) => {
    const link = event.target.closest(
        '[data-analytics="open_lesson"]'
    );

    if (!link) {
        return;
    }

    if (typeof gtag !== 'function') {
        return;
    }

    gtag('event', 'open_lesson', {
        lesson_id: link.dataset.lessonId,
        lesson_name: link.dataset.lessonName
    });
});
