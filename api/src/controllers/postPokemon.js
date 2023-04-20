const { Pokemon } = require("../db")

const postPokemon = async ({ name, image, hp, attack, defense, speed, height, weight, types }) => {
  console.log(name);
  var name = name.toLowerCase();
  console.log(name);
  const [myPoke, created] = await Pokemon.findOrCreate({
    where: { name: name },
    defaults: {
      image, hp, attack, defense, speed, height, weight,
    }
  })
  if (!created) throw Error(`El personaje ${name} ya fue creado`)

  else await myPoke.addTypes(types);
  return myPoke;
}

module.exports = postPokemon;