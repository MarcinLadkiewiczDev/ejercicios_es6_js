/* 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filteredAges = ages.filter(age => age > 18);
console.log(filteredAges);

/* 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */

const agesPair = ages.filter(age => age % 2 == 0);
console.log(agesPair);

/* 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];