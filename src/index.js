import 'normalize.css';
import sum from './js/sum';
import './sass/index.scss';
import tara from './assets/imgs/tara.jpg';

const inputNum1 = document.querySelector('.num-1');
const inputNum2 = document.querySelector('.num-2');
const getTheSumBtn = document.querySelector('.get-the-sum');
const finalNum = document.querySelector('span');

getTheSumBtn.addEventListener('click', () => {
  const res = sum(Number(inputNum1.value), Number(inputNum2.value));
  if (Number.isNaN(res)) {
    finalNum.textContent = 'The result is not a valid number';
  } else {
    finalNum.textContent = res;
  }
});

const triggerTheImg = document.querySelector('.trigger-the-img');

const img = new Image(250);
img.src = tara;
img.style.display = 'none';

triggerTheImg.parentNode.insertBefore(img, null);
triggerTheImg.addEventListener('click', () => {
  if (img.style.display === 'none') {
    img.style.display = 'block';
    triggerTheImg.textContent = 'Hide the Image';
  } else {
    img.style.display = 'none';
    triggerTheImg.textContent = 'Show the Image';
  }
});
