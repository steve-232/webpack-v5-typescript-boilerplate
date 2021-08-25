import 'normalize.css';
import sum from './js/sum';
import './sass/index.scss';
import tara from './assets/imgs/tara.jpg';

const inputNum1 = document.querySelector('.num-1') as HTMLInputElement;
const inputNum2 = document.querySelector('.num-2') as HTMLInputElement;
const getTheSumBtn = document.querySelector('.get-the-sum') as HTMLButtonElement;
const finalNum = document.querySelector('span') as HTMLSpanElement;

console.log('aaaaaaaaaaaa')

getTheSumBtn.addEventListener('click', () => {
  const res = sum(Number(inputNum1.value), Number(inputNum2.value));
  if (Number.isNaN(res)) {
    finalNum.textContent = 'The result is not a valid number';
  } else {
    finalNum.textContent = String(res);
  }
});

const triggerTheImg = document.querySelector('.trigger-the-img') as HTMLButtonElement;

const img = new Image(250) as HTMLImageElement;
img.src = tara;
img.style.display = 'none';

if (triggerTheImg.parentElement) triggerTheImg.parentElement.insertBefore(img, null);

triggerTheImg.addEventListener('click', () => {
  if (img.style.display === 'none') {
    img.style.display = 'block';
    triggerTheImg.textContent = 'Hide the Image';
  } else {
    img.style.display = 'none';
    triggerTheImg.textContent = 'Show the Image';
  }
});
