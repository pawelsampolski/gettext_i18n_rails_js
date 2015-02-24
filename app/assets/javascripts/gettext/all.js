//
// Copyright (c) 2012-2015 Dropmysite.com <https://dropmyemail.com>
// Copyright (c) 2015 Webhippie <http://www.webhippie.de>
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

//= require gettext/jed
//= require_self

(function() {
  var locales = locales || {};
  var locale = document.getElementsByTagName('html')[0].lang;

  if(!locale) {
    console.warn('No locale found as an html attribute, using default.');
    return;
  }

  var i18n = new Jed(locales[locale] || {});

  window.__ = function() {
    return i18n.gettext.apply(i18n, arguments);
  };

  window.n__ = function() {
    return i18n.ngettext.apply(i18n, arguments);
  };

  window.s__ = function(key) {
    return window.__(key).split('|').pop();
  }

  window.gettext = window.__;
  window.ngettext = window.n__;
  window.sgettext = window.s__;

  window.i18n = i18n;
})();
