
const Suf = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19'];
const Min = 1;
const Max = 19;

const mainElement = document.querySelector("div.main>img");
const thumbnailsElement = document.querySelector("div.thumbnails");

const Interval = 1000;

let count = 1;

let nowPlaying = false;
let timer;

window.onload = function() {
  thumbnailsElement.children[0].classList.add('selected');
}

// common functions: posのサムネイルのselectedクラス除去
function removeSelected() {
  thumbnailsElement.children[count-1].classList.remove('selected');
}
// common functions: posのサムネイルにselectedクラス付与
function addSelcted() {
  thumbnailsElement.children[count-1].classList.add('selected');
}
// common functions: メイン写真セットとサムネイル選択
function setMain() {
  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + Suf[count-1] + ".jpg";
  mainElement.setAttribute('src', url);

  addSelcted();
}

// 次の写真へ
function next() {
  // 現selectedをクリア
  removeSelected();
  // 移動（next）
  ++count;
  if (count > Max) {
    count = Min;
  }

  // メイン写真セットとサムネイル選択
  setMain();
}

// まえの写真へ
function prev() {
  // 現selectedをクリア
  removeSelected();
  // 移動（next）
  --count;
  if (count < Min) {
    count = Max;
  }

  // メイン写真セットとサムネイル選択
  setMain();
}


function autoPlay() {
  next();
  timer = setTimeout(autoPlay, Interval);
}

function play() {
  if (!nowPlaying) {

    nowPlaying = true;

    setTimeout(autoPlay, Interval);
  }
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();

  removeSelected();
  count = 1;
  setMain();
}
