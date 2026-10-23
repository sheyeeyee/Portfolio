(() => {
    const nav = document.querySelector('.baja-live-toc');
    const header = document.getElementById('header');
    const links = [...nav.querySelectorAll('a')];
    const sections = links.map(link => document.querySelector(link.hash));
    let scheduled = false;

    function update() {
        scheduled = false;
        const readingLine = header.getBoundingClientRect().bottom + 30;
        let current = -1;
        sections.forEach((section, index) => {
            if (section.getBoundingClientRect().top <= readingLine) current = index;
        });
        links.forEach((link, index) => {
            if (index === current) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
        nav.style.top = `${readingLine}px`;
    }

    function scheduleUpdate() {
        if (!scheduled) {
            scheduled = true;
            requestAnimationFrame(update);
        }
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);
    new ResizeObserver(scheduleUpdate).observe(document.getElementById('main'));
    update();
})();
