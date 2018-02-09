import tools from '../../js/tools'
var statusPanel = new tools();
var lastTime = new Date();

window.addEventListener('scroll', function() {
  statusPanel.addItem('scrollTop', $('.page_main').scrollTop());
});

$('.page_main').on('touchmove', function() {
  statusPanel.addItem('touchmove', $('.page_main').scrollTop());
});
$('.page_main').on('scroll', function() {
  statusPanel.addItem('scrollTop', $('.page_main').scrollTop());
})

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