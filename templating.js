var fs = require('fs');
var handlebars = require('handlebars');
var gettext = require('node-gettext');
var i18n = require('./i18n');

var languages = i18n.languages;

// more info on the current gettext implementation here:
// https://github.com/andris9/node-gettext

var gt = new gettext();
languages.forEach(function (lang) {
	gt.addTextdomain(lang, fs.readFileSync([__dirname, 'locale', lang, 'messages.po'].join('/')));
});

// this is used like {{#_}}Some text to translate{{/_}}
// as suggested here: https://github.com/janl/mustache.js/issues/216
function changelang(lang) {
	gt.textdomain(lang);
	//handlebars.registerHelper('_', function (msgid) {
	//	return gt.gettext(msgid);
	//});
}

handlebars.registerHelper('_', function (msgid) {
	return gt.gettext(msgid);
});

module.exports = {
	changelang: changelang,
	compile: handlebars.compile
}
