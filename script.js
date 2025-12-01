// Tab functionality
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-tab');
        sections.forEach(sec => {
            sec.classList.toggle('active', sec.id === target);
        });

        // scrolla till toppen av container utan hopp
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle description for speakers
const readMoreBtns = document.querySelectorAll('.read-more-btn');
readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const desc = btn.previousElementSibling;
        desc.classList.toggle('show');
        btn.textContent = desc.classList.contains('show') ? "Read less" : "Read more";
    });
});