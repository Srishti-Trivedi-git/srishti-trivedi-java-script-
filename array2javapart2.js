const marvelHeroes = ["thor", "ironman", "hulk", "captain america"];
const dcHeroes = ["superman", "batman", "wonder woman", "flash"];

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);
console.log(marvelHeroes[4][0]);
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);
