
const suf = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19'];
const min = 1;
const max = 19;

const interval = 1000;

let count = 1;

// const mainElement = document.querySelector("div.main>img");
// const thumbnailsElement = document.querySelector("div.thumbnails");

let nowPlaying = false;
let timer;

window.onload =　function() {
  let thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[0].classList.add('selected');
}

// common functions: selectedクラス除去
function removeSelected() {
  let thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[count-1].classList.remove('selected');
}
// common functions: selectedクラス付与
function addSelcted() {
  let thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[count-1].classList.add('selected');
}
// common functions: メイン写真セットとサムネイル強調
function setMain() {
  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";
  let mainElement = document.querySelector("div.main>img");
  mainElement.setAttribute('src', url);

  addSelcted();
}

// 次の写真へ
function next() {

  removeSelected();
  // let thumbnailsElement = document.querySelector("div.thumbnails");
  // thumbnailsElement.children[count-1].classList.remove('selected');

  count ++;
  if (count > max) {
    count = min;
  }

  setMain();
  // url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";
  // let mainElement = document.querySelector("div.main>img");
  // mainElement.setAttribute('src', url);

  addSelcted();
  // thumbnailsElement.children[count-1].classList.add('selected');
}

// まえの写真へ
function prev() {

  removeSelected();
  // let thumbnailsElement = document.querySelector("div.thumbnails");
  // thumbnailsElement.children[count-1].classList.remove('selected');

  count --;
  if (count < min) {
    count = max;
  }

  setMain();
  // url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";
  // let mainElement = document.querySelector("div.main>img");
  // mainElement.setAttribute('src', url);

  addSelcted();
  // thumbnailsElement.children[count-1].classList.add('selected');
}


function autoPlay() {
  next();
  timer = setTimeout(autoPlay, interval);
}

function play() {
  if (!nowPlaying) {
    setTimeout(autoPlay, interval);
  }
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();

  removeSelected();
  // let thumbnailsElement = document.querySelector("div.thumbnails");
  // thumbnailsElement.children[count-1].classList.remove('selected');

  count = 1;

  setMain();
  // url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";
  // let mainElement = document.querySelector("div.main>img");
  // mainElement.setAttribute('src', url);

  addSelcted();
  // thumbnailsElement.children[count-1].classList.add('selected');}
}
