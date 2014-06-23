module.exports = DerbyTextarea;

function DerbyTextarea() {}

DerbyTextarea.prototype.view = __dirname;

DerbyTextarea.prototype.init = function(model) {
	// to prevent any 'undefined' texts from appearing
	model.setNull('text', '');
};

DerbyTextarea.prototype.create = function(model) {
	var area = this.textarea,
		span = this.span;

	function setText() {
		if (span.textContent)
			span.textContent = area.value || '';
		else
			span.innerText = area.value || '';
	}

	if (area.addEventListener) {
		area.addEventListener(isEventSupported('input')? 'input': 'keyup', setText, false);
	} else if (area.attachEvent) {
		area.attachEvent('onpropertychange', setText);
	}

	window.setTimeout(setText, 0);
	this.expandingArea.className += " active";
};

// http://stackoverflow.com/questions/2877393/detecting-support-for-a-given-javascript-event
var isEventSupported = (function(){
  var TAGNAMES = {
    'select':'input','change':'input','input':'input',
    'submit':'form','reset':'form',
    'error':'img','load':'img','abort':'img'
  };

  function isEventSupported(eventName) {
    var el = document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    var isSupported = (eventName in el);
    if (!isSupported) {
      el.setAttribute(eventName, 'return;');
      isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return isSupported;
  }

  return isEventSupported;
})();