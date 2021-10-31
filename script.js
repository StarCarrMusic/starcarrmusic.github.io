var space = " ";
var pos = 0;
var msg = "Star Carr - Dead or Deep Sleep - ";

function scroll() {
  document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
  pos++;
  if (pos > msg.length) {
    pos = 0;
  }
  window.setTimeout(scroll, 75);
}

function makeDraggable() {
  // We need this delay for some reason, not sure why...
  setTimeout(() => {
    $("img, h1, h3, p, a, marquee").draggable();  
  }, 1);
}

scroll();
makeDraggable();