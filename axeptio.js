export function insertAxeptio(d, s) {
  const t = d.getElementsByTagName(s)[0];
  const e = d.createElement(s);

  e.async = true;
  e.src = '//static.axept.io/sdk-slim.js';
  t.parentNode.insertBefore(e, t);
}

export function insertAnalytics(i, s, o, g, r, a, m) {
  i.GoogleAnalyticsObject = r;
  (i[r] =	i[r]
		|| function () {
		  (i[r].q = i[r].q || []).push(arguments);
		})(i[r].l = 1 * new Date());
  (a = s.createElement(o)),
  (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
}
