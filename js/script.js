const snapShot = document.querySelectorAll(".banner-change");
const time = 20000;
const timeOut = time / snapShot.length;
const fade = 1500;

let i = 1;
let j = i + 1;

snapShot[1].style.opacity = 1;

setInterval(() => {
  i === snapShot.length ? (i = 0) : null;
  j === snapShot.length ? (j = 0) : null;

  changeFade(snapShot[i], snapShot[j]);
  i++;
  j++;
}, timeOut);

const changeFade = (item1, item2) => {
  let a = 0;
  let count = 0;
  const interval = setInterval(() => {
    a += 1;
    count += 0.01;
    item1.style.opacity -= 0.01;
    item2.style.opacity = count;
    a >= 100 ? clearInterval(interval) : null;
  }, fade / 100);
};
