
const suf = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19'];
const min = 1;
const max = 19;

const mainElement = document.querySelector("div.main>img");
const thumbnailsElement = document.querySelector("div.thumbnails");

let count = 1;

window.onload =　function() {
  thumbnailsElement.children[0].classList.add('selected');
}

// 次の写真へ
function next() {
  thumbnailsElement.children[count-1].classList.remove('selected');

  count ++;
  if (count > max) {
    count = min;
  }

  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";
  mainElement.setAttribute('src', url);

  thumbnailsElement.children[count-1].classList.add('selected');
}

// まえの写真へ
function prev() {
  thumbnailsElement.children[count-1].classList.remove('selected');

  count --;
  if (count < min) {
    count = max;
  }

  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";
  mainElement.setAttribute('src', url);

  thumbnailsElement.children[count-1].classList.add('selected');
}
