import tools from '../../js/tools'
var statusPanel = new tools();
var lastTime = new Date();

function showScrollTop() {
  statusPanel.addItem('touchmove', document.body.scrollTop || document.documentElement.scrollTop);
}

window.addEventListener('scroll', function() {
  statusPanel.addItem('scrollTop', document.body.scrollTop || document.documentElement.scrollTop);
});

var pageMain = document.querySelector('.page_main');
pageMain.addEventListener('touchmove', showScrollTop);

function showTime() {
  let time = new Date();
  let hours = time.getHours();
  let minus = time.getMinutes();
  let secs = time.getSeconds();
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minus >= 0 && minus <= 9) {
    minus = "0" + minus;
  }
  if (secs >= 0 && secs <= 9) {
    secs = "0" + secs;
  }
  statusPanel.addItem('time', hours + ':' + minus + ':' + secs);

  setTimeout(() => {
    showTime();
    $.ajax({
      url: 'http://10.222.22.54:8888'
    })
  }, 1000);
}

showTime();