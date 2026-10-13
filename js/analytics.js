
document.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
        return;
    }

    // Открытие урока
    const lessonLink = target.closest(
        '[data-analytics="open_lesson"]'
    );

    if (lessonLink && typeof gtag === 'function') {
        gtag('event', 'open_lesson', {
            lesson_id: lessonLink.dataset.lessonId,
            lesson_name: lessonLink.dataset.lessonName
        });
    }

    // Нажатие на кнопку формы
    const contactButton = target.closest(
        '[data-analytics="contact_form_click"]'
    );

    if (contactButton && typeof gtag === 'function') {
        gtag('event', 'contact_form_click', {
            form_name: 'contact'
        });
    }
});
