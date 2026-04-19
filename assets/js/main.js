/* ── Bottom Nav indexv2.html ── */
document.querySelectorAll('.nav-tab').forEach(t => {
    t.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.nav-tab').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
    });
});