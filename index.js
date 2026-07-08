
var isAnagram = function (s, t) {

  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      t = t.replace(s[i], '');
    } else {
      return false;
    }
  }
  return t.length === 0;

};