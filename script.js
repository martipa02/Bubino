const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Muah anche a te bubino <3";
    gif.srt =
     "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm91NWFwZzNyN3R6YTJwaG9hNGd2aGlqZ2lmNHlhdDh5emtsb2FxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CB2wZllxYXSTI6HJ7P/giphy.webp";
});

// Make the No button move randomlyon hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});