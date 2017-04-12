const nbs = [2, 5, 8];

nbs.forEach(nb => console.log(nb));

nbs.map(nb => nb * 2).forEach(nb => console.log(nb));

console.log(nbs.reduce((acc, nb) => acc + nb), 0);

// acc => 0, nb => 2 => return 2
// acc => 2, nb => 5 => return 7
// acc => 7, nb => 8 => return 15
