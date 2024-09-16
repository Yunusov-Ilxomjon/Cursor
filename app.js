const cursor = document.querySelector('.kursor');
const title = document.querySelector('.title');
window.addEventListener('mousemove', (e) => {
    console.log(e);

    const { x, y } = e

    cursor.style.left = x + 'px';
    cursor.style.top = y +  'px';
    title.style.left = x + 'px';
    title.style.top = y + 50 + 'px';
})