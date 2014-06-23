module.exports = DerbyTextarea;

function DerbyTextarea() {}

DerbyTextarea.prototype.view = __dirname;

DerbyTextarea.prototype.init = function(model) {
	// to prevent any 'undefined' texts from appearing
	model.setNull('text', '');
};

DerbyTextarea.prototype.create = function(model) {
	this.expandingArea.className += " active";
};

