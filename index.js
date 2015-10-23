module.exports = DerbyTextarea;

function DerbyTextarea() {}

DerbyTextarea.prototype.view = __dirname;

DerbyTextarea.prototype.init = function(model) {
	// to prevent any 'undefined' texts from appearing
	model.setNull('text', '');
};

DerbyTextarea.prototype.create = function(model) {
	var self = this;
	
	this.expandingArea.className += " active";

	model.on('change', model.at('autofocus'), function(val) {
		if (val) {
			self.input.focus();
		}
	});	
};

DerbyTextarea.prototype.emitKeydown = function(ev, el) {
	this.emit("keydown", ev, el);
};

