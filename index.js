

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.includes(ransomNote[i])) {
      magazine = magazine.replace(ransomNote[i], '');
    }
    else {
      return false;
    }


  }

  return true;
}