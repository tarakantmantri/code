const franc = import('franc');
const langs = import('langs');
const langcode = franc('this is something special');
const language = langs.where('3', langcode);
console.log(language.name);