let btn = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let body = document.querySelector('body');

// ✅ Yangi note qo‘shish
btn.addEventListener('click', () => {
  if (inp.value.trim() === "") return;

  let li = document.createElement('li');
  li.textContent = inp.value;

  let span = document.createElement('span');
  span.textContent = "\u00d7"; // ❌
  li.appendChild(span);

  ul.appendChild(li);
  inp.value = "";
});

// 🌙 Dark Mode
btn2.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// ✅ Note ustiga bosganda — chiziladi, ❌ bosganda — o‘chadi
ul.addEventListener('click', (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle('line');
  }
});
