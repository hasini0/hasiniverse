// Copy buttons: <button data-copy="#id"> copies that element's text.
document.querySelectorAll('[data-copy]').forEach(function (btn) {
  var label = btn.textContent;
  btn.addEventListener('click', function () {
    var el = document.querySelector(btn.dataset.copy);
    var text = 'value' in el ? el.value : el.textContent;
    var done = function () { btn.textContent = 'copied ✿'; setTimeout(function () { btn.textContent = label; }, 1800); };
    var fallback = function () {
      if ('select' in el) { el.select(); } else {
        var r = document.createRange(); r.selectNodeContents(el);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      }
      btn.textContent = 'selected, press ⌘/Ctrl C';
    };
    try { navigator.clipboard.writeText(text.trim()).then(done, fallback); } catch (e) { fallback(); }
  });
});
