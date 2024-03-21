setInterval(() => {
    const now = new Date();
    const [hours, minutes, seconds] = [now.getHours() % 12, now.getMinutes(), now.getSeconds()];
    document.querySelector('.hr').style.transform = `rotate(${hours * 30 + (0.5 * minutes)}deg)`;
    document.querySelector('.mn').style.transform = `rotate(${minutes * 6 + (0.1 * seconds)}deg)`;
    document.querySelector('.sc').style.transform = `rotate(${seconds * 6}deg)`;
}, 1000);

