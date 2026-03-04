function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("ru-RU", {
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });
     document.getElementById('clock').textContent = timeString;
        }
         setInterval(updateClock, 1000);
          updateClock();




const img = document.getElementById("img");

img.addEventListener("mousemove", (e) => {

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = ((x - centerX) / 15);
    const moveY = ((y - centerY) / 15);

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

img.addEventListener("mouseleave", () => {
    img.style.transform = "translate(0, 0)";
});






function animateWord(word) {
    word.classList.add('blink');
    
    let text = word.dataset.text;
    let letters = text.split('');
    let totalLetters = letters.length;
    
    letters.forEach((letter, ind) => {
        let div = document.createElement('div');
        
        if (letter === ' ') {
            div.innerHTML = '&nbsp;';
        } else {
            div.innerText = letter;
        }
        
        setTimeout(() => {
            word.append(div);
            
            if (ind === totalLetters - 1) {
                setTimeout(() => {
                    word.classList.remove('blink');
                }, 400);
            }
        }, ind * 200);
    });
}
const words = document.querySelectorAll('.word');
words.forEach(word => animateWord(word));