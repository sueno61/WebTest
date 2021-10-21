let suf = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19'];

let count = 1;

let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");

let nowPlaying = false;
let timer;

window.onload =　function() {
  thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[0].classList.add('selected');
}


function next() {

  thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[count-1].classList.remove('selected');

  count ++;
  if (count==20) {
    count = 1
  }
  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";

  mainElement = document.querySelector("div.main>img");
  mainElement.setAttribute('src', url);

  thumbnailsElement.children[count-1].classList.add('selected');
}

function prev() {

  thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[count-1].classList.remove('selected');

  count --;
  if (count==0) {
    count = 19
  }
  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";

  mainElement = document.querySelector("div.main>img");
  mainElement.setAttribute('src', url);

  thumbnailsElement.children[count-1].classList.add('selected');
}


function autoPlay() {
  next();
  timer = setTimeout(autoPlay, 2000);
}

function play() {
  if (!nowPlaying) {
    setTimeout(autoPlay, 2000);
  }
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();

  thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[count-1].classList.remove('selected');

  count = 1;

  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + suf[count-1] + ".jpg";
  mainElement = document.querySelector("div.main>img");

  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add('selected');
}
