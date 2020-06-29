function loadIframe(addr, div_id) {
  var elem = $(div_id);
  var width_height = 'width="' + elem.width() + '" ' + 'height="'+elem.height() + '"';
  var src = 'src="' + addr+'"';
  elem.html('<iframe id="iframe1" ' + src + ' ' + width_height + ' allowfullscreen> </iframe>');
}