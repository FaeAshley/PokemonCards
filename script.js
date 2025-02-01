
const pokemonData = [
{
    id: 1,
    name: "Bulbasaur",
    types: ['Grass', 'Poison'],
    hp: 51,
    attack: 41,
    defense: 31,
    image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
},
{
    id: 2,
    name: "Ivysaur",
    types: ['Grass', 'Poison'],
    hp: 52,
    attack: 42,
    defense: 32,
    image: "https://img.pokemondb.net/artwork/large/ivysaur.jpg"
},
{
    id: 3,
    name: "Venusaur",
    types: ['Grass', 'Poison'],
    hp: 53,
    attack: 43,
    defense: 33,
    image: "https://img.pokemondb.net/artwork/large/venusaur.jpg"
},
{
    id: 4,
    name: "Charmander",
    types: ['Fire'],
    hp: 54,
    attack: 44,
    defense: 34,
    image: "https://img.pokemondb.net/artwork/large/charmander.jpg"
},
{
    id: 5,
    name: "Charmeleon",
    types: ['Fire'],
    hp: 55,
    attack: 45,
    defense: 35,
    image: "https://img.pokemondb.net/artwork/large/charmeleon.jpg"
},
{
    id: 6,
    name: "Charizard",
    types: ['Fire', 'Flying'],
    hp: 56,
    attack: 46,
    defense: 36,
    image: "https://img.pokemondb.net/artwork/large/charizard.jpg"
},
{
    id: 7,
    name: "Squirtle",
    types: ['Water'],
    hp: 57,
    attack: 47,
    defense: 37,
    image: "https://img.pokemondb.net/artwork/large/squirtle.jpg"
},
{
    id: 8,
    name: "Wartortle",
    types: ['Water'],
    hp: 58,
    attack: 48,
    defense: 38,
    image: "https://img.pokemondb.net/artwork/large/wartortle.jpg"
},
{
    id: 9,
    name: "Blastoise",
    types: ['Water'],
    hp: 59,
    attack: 49,
    defense: 39,
    image: "https://img.pokemondb.net/artwork/large/blastoise.jpg"
},
{
    id: 10,
    name: "Caterpie",
    types: ['Bug'],
    hp: 60,
    attack: 50,
    defense: 40,
    image: "https://img.pokemondb.net/artwork/large/caterpie.jpg"
},
{
    id: 11,
    name: "Metapod",
    types: ['Bug'],
    hp: 61,
    attack: 51,
    defense: 41,
    image: "https://img.pokemondb.net/artwork/large/metapod.jpg"
},
{
    id: 12,
    name: "Butterfree",
    types: ['Bug', 'Flying'],
    hp: 62,
    attack: 52,
    defense: 42,
    image: "https://img.pokemondb.net/artwork/large/butterfree.jpg"
},
{
    id: 13,
    name: "Weedle",
    types: ['Bug', 'Poison'],
    hp: 63,
    attack: 53,
    defense: 43,
    image: "https://img.pokemondb.net/artwork/large/weedle.jpg"
},
{
    id: 14,
    name: "Kakuna",
    types: ['Bug', 'Poison'],
    hp: 64,
    attack: 54,
    defense: 44,
    image: "https://img.pokemondb.net/artwork/large/kakuna.jpg"
},
{
    id: 15,
    name: "Beedrill",
    types: ['Bug', 'Poison'],
    hp: 65,
    attack: 55,
    defense: 45,
    image: "https://img.pokemondb.net/artwork/large/beedrill.jpg"
},
{
    id: 16,
    name: "Pidgey",
    types: ['Normal', 'Flying'],
    hp: 66,
    attack: 56,
    defense: 46,
    image: "https://img.pokemondb.net/artwork/large/pidgey.jpg"
},
{
    id: 17,
    name: "Pidgeotto",
    types: ['Normal', 'Flying'],
    hp: 67,
    attack: 57,
    defense: 47,
    image: "https://img.pokemondb.net/artwork/large/pidgeotto.jpg"
},
{
    id: 18,
    name: "Pidgeot",
    types: ['Normal', 'Flying'],
    hp: 68,
    attack: 58,
    defense: 48,
    image: "https://img.pokemondb.net/artwork/large/pidgeot.jpg"
},
{
    id: 19,
    name: "Rattata",
    types: ['Normal'],
    hp: 69,
    attack: 59,
    defense: 49,
    image: "https://img.pokemondb.net/artwork/large/rattata.jpg"
},
{
    id: 20,
    name: "Raticate",
    types: ['Normal'],
    hp: 70,
    attack: 60,
    defense: 50,
    image: "https://img.pokemondb.net/artwork/large/raticate.jpg"
},
{
    id: 21,
    name: "Spearow",
    types: ['Normal', 'Flying'],
    hp: 71,
    attack: 61,
    defense: 51,
    image: "https://img.pokemondb.net/artwork/large/spearow.jpg"
},
{
    id: 22,
    name: "Fearow",
    types: ['Normal', 'Flying'],
    hp: 72,
    attack: 62,
    defense: 52,
    image: "https://img.pokemondb.net/artwork/large/fearow.jpg"
},
{
    id: 23,
    name: "Ekans",
    types: ['Poison'],
    hp: 73,
    attack: 63,
    defense: 53,
    image: "https://img.pokemondb.net/artwork/large/ekans.jpg"
},
{
    id: 24,
    name: "Arbok",
    types: ['Poison'],
    hp: 74,
    attack: 64,
    defense: 54,
    image: "https://img.pokemondb.net/artwork/large/arbok.jpg"
},
{
    id: 25,
    name: "Pikachu",
    types: ['Electric'],
    hp: 75,
    attack: 65,
    defense: 55,
    image: "https://img.pokemondb.net/artwork/large/pikachu.jpg"
},
{
    id: 26,
    name: "Raichu",
    types: ['Electric'],
    hp: 76,
    attack: 66,
    defense: 56,
    image: "https://img.pokemondb.net/artwork/large/raichu.jpg"
},
{
    id: 27,
    name: "Sandshrew",
    types: ['Ground'],
    hp: 77,
    attack: 67,
    defense: 57,
    image: "https://img.pokemondb.net/artwork/large/sandshrew.jpg"
},
{
    id: 28,
    name: "Sandslash",
    types: ['Ground'],
    hp: 78,
    attack: 68,
    defense: 58,
    image: "https://img.pokemondb.net/artwork/large/sandslash.jpg"
},
{
    id: 29,
    name: "Nidoran♀",
    types: ['Poison'],
    hp: 79,
    attack: 69,
    defense: 59,
    image: "https://img.pokemondb.net/artwork/large/nidoranf.jpg"
},
{
    id: 30,
    name: "Nidorina",
    types: ['Poison'],
    hp: 80,
    attack: 70,
    defense: 60,
    image: "https://img.pokemondb.net/artwork/large/nidorina.jpg"
},
{
    id: 31,
    name: "Nidoqueen",
    types: ['Poison', 'Ground'],
    hp: 81,
    attack: 71,
    defense: 61,
    image: "https://img.pokemondb.net/artwork/large/nidoqueen.jpg"
},
{
    id: 32,
    name: "Nidoran♂",
    types: ['Poison'],
    hp: 82,
    attack: 72,
    defense: 62,
    image: "https://img.pokemondb.net/artwork/large/nidoranm.jpg"
},
{
    id: 33,
    name: "Nidorino",
    types: ['Poison'],
    hp: 83,
    attack: 73,
    defense: 63,
    image: "https://img.pokemondb.net/artwork/large/nidorino.jpg"
},
{
    id: 34,
    name: "Nidoking",
    types: ['Poison', 'Ground'],
    hp: 84,
    attack: 74,
    defense: 64,
    image: "https://img.pokemondb.net/artwork/large/nidoking.jpg"
},
{
    id: 35,
    name: "Clefairy",
    types: ['Fairy'],
    hp: 85,
    attack: 75,
    defense: 65,
    image: "https://img.pokemondb.net/artwork/large/clefairy.jpg"
},
{
    id: 36,
    name: "Clefable",
    types: ['Fairy'],
    hp: 86,
    attack: 76,
    defense: 66,
    image: "https://img.pokemondb.net/artwork/large/clefable.jpg"
},
{
    id: 37,
    name: "Vulpix",
    types: ['Fire'],
    hp: 87,
    attack: 77,
    defense: 67,
    image: "https://img.pokemondb.net/artwork/large/vulpix.jpg"
},
{
    id: 38,
    name: "Ninetales",
    types: ['Fire'],
    hp: 88,
    attack: 78,
    defense: 68,
    image: "https://img.pokemondb.net/artwork/large/ninetales.jpg"
},
{
    id: 39,
    name: "Jigglypuff",
    types: ['Normal', 'Fairy'],
    hp: 89,
    attack: 79,
    defense: 69,
    image: "https://img.pokemondb.net/artwork/large/jigglypuff.jpg"
},
{
    id: 40,
    name: "Wigglytuff",
    types: ['Normal', 'Fairy'],
    hp: 90,
    attack: 80,
    defense: 70,
    image: "https://img.pokemondb.net/artwork/large/wigglytuff.jpg"
},
{
    id: 41,
    name: "Zubat",
    types: ['Poison', 'Flying'],
    hp: 91,
    attack: 81,
    defense: 71,
    image: "https://img.pokemondb.net/artwork/large/zubat.jpg"
},
{
    id: 42,
    name: "Golbat",
    types: ['Poison', 'Flying'],
    hp: 92,
    attack: 82,
    defense: 72,
    image: "https://img.pokemondb.net/artwork/large/golbat.jpg"
},
{
    id: 43,
    name: "Oddish",
    types: ['Grass', 'Poison'],
    hp: 93,
    attack: 83,
    defense: 73,
    image: "https://img.pokemondb.net/artwork/large/oddish.jpg"
},
{
    id: 44,
    name: "Gloom",
    types: ['Grass', 'Poison'],
    hp: 94,
    attack: 84,
    defense: 74,
    image: "https://img.pokemondb.net/artwork/large/gloom.jpg"
},
{
    id: 45,
    name: "Vileplume",
    types: ['Grass', 'Poison'],
    hp: 95,
    attack: 85,
    defense: 75,
    image: "https://img.pokemondb.net/artwork/large/vileplume.jpg"
},
{
    id: 46,
    name: "Paras",
    types: ['Bug', 'Grass'],
    hp: 96,
    attack: 86,
    defense: 76,
    image: "https://img.pokemondb.net/artwork/large/paras.jpg"
},
{
    id: 47,
    name: "Parasect",
    types: ['Bug', 'Grass'],
    hp: 97,
    attack: 87,
    defense: 77,
    image: "https://img.pokemondb.net/artwork/large/parasect.jpg"
},
{
    id: 48,
    name: "Venonat",
    types: ['Bug', 'Poison'],
    hp: 98,
    attack: 88,
    defense: 78,
    image: "https://img.pokemondb.net/artwork/large/venonat.jpg"
},
{
    id: 49,
    name: "Venomoth",
    types: ['Bug', 'Poison'],
    hp: 99,
    attack: 89,
    defense: 79,
    image: "https://img.pokemondb.net/artwork/large/venomoth.jpg"
},
{
    id: 50,
    name: "Diglett",
    types: ['Ground'],
    hp: 50,
    attack: 90,
    defense: 80,
    image: "https://img.pokemondb.net/artwork/large/diglett.jpg"
},
{
    id: 51,
    name: "Dugtrio",
    types: ['Ground'],
    hp: 51,
    attack: 91,
    defense: 81,
    image: "https://img.pokemondb.net/artwork/large/dugtrio.jpg"
},
{
    id: 52,
    name: "Meowth",
    types: ['Normal'],
    hp: 52,
    attack: 92,
    defense: 82,
    image: "https://img.pokemondb.net/artwork/large/meowth.jpg"
},
{
    id: 53,
    name: "Persian",
    types: ['Normal'],
    hp: 53,
    attack: 93,
    defense: 83,
    image: "https://img.pokemondb.net/artwork/large/persian.jpg"
},
{
    id: 54,
    name: "Psyduck",
    types: ['Water'],
    hp: 54,
    attack: 94,
    defense: 84,
    image: "https://img.pokemondb.net/artwork/large/psyduck.jpg"
},
{
    id: 55,
    name: "Golduck",
    types: ['Water'],
    hp: 55,
    attack: 95,
    defense: 85,
    image: "https://img.pokemondb.net/artwork/large/golduck.jpg"
},
{
    id: 56,
    name: "Mankey",
    types: ['Fighting'],
    hp: 56,
    attack: 96,
    defense: 86,
    image: "https://img.pokemondb.net/artwork/large/mankey.jpg"
},
{
    id: 57,
    name: "Primeape",
    types: ['Fighting'],
    hp: 57,
    attack: 97,
    defense: 87,
    image: "https://img.pokemondb.net/artwork/large/primeape.jpg"
},
{
    id: 58,
    name: "Growlithe",
    types: ['Fire'],
    hp: 58,
    attack: 98,
    defense: 88,
    image: "https://img.pokemondb.net/artwork/large/growlithe.jpg"
},
{
    id: 59,
    name: "Arcanine",
    types: ['Fire'],
    hp: 59,
    attack: 99,
    defense: 89,
    image: "https://img.pokemondb.net/artwork/large/arcanine.jpg"
},
{
    id: 60,
    name: "Poliwag",
    types: ['Water'],
    hp: 60,
    attack: 40,
    defense: 90,
    image: "https://img.pokemondb.net/artwork/large/poliwag.jpg"
},
{
    id: 61,
    name: "Poliwhirl",
    types: ['Water'],
    hp: 61,
    attack: 41,
    defense: 91,
    image: "https://img.pokemondb.net/artwork/large/poliwhirl.jpg"
},
{
    id: 62,
    name: "Poliwrath",
    types: ['Water', 'Fighting'],
    hp: 62,
    attack: 42,
    defense: 92,
    image: "https://img.pokemondb.net/artwork/large/poliwrath.jpg"
},
{
    id: 63,
    name: "Abra",
    types: ['Psychic'],
    hp: 63,
    attack: 43,
    defense: 93,
    image: "https://img.pokemondb.net/artwork/large/abra.jpg"
},
{
    id: 64,
    name: "Kadabra",
    types: ['Psychic'],
    hp: 64,
    attack: 44,
    defense: 94,
    image: "https://img.pokemondb.net/artwork/large/kadabra.jpg"
},
{
    id: 65,
    name: "Alakazam",
    types: ['Psychic'],
    hp: 65,
    attack: 45,
    defense: 95,
    image: "https://img.pokemondb.net/artwork/large/alakazam.jpg"
},
{
    id: 66,
    name: "Machop",
    types: ['Fighting'],
    hp: 66,
    attack: 46,
    defense: 96,
    image: "https://img.pokemondb.net/artwork/large/machop.jpg"
},
{
    id: 67,
    name: "Machoke",
    types: ['Fighting'],
    hp: 67,
    attack: 47,
    defense: 97,
    image: "https://img.pokemondb.net/artwork/large/machoke.jpg"
},
{
    id: 68,
    name: "Machamp",
    types: ['Fighting'],
    hp: 68,
    attack: 48,
    defense: 98,
    image: "https://img.pokemondb.net/artwork/large/machamp.jpg"
},
{
    id: 69,
    name: "Bellsprout",
    types: ['Grass', 'Poison'],
    hp: 69,
    attack: 49,
    defense: 99,
    image: "https://img.pokemondb.net/artwork/large/bellsprout.jpg"
},
{
    id: 70,
    name: "Weepinbell",
    types: ['Grass', 'Poison'],
    hp: 70,
    attack: 50,
    defense: 30,
    image: "https://img.pokemondb.net/artwork/large/weepinbell.jpg"
},
{
    id: 71,
    name: "Victreebel",
    types: ['Grass', 'Poison'],
    hp: 71,
    attack: 51,
    defense: 31,
    image: "https://img.pokemondb.net/artwork/large/victreebel.jpg"
},
{
    id: 72,
    name: "Tentacool",
    types: ['Water', 'Poison'],
    hp: 72,
    attack: 52,
    defense: 32,
    image: "https://img.pokemondb.net/artwork/large/tentacool.jpg"
},
{
    id: 73,
    name: "Tentacruel",
    types: ['Water', 'Poison'],
    hp: 73,
    attack: 53,
    defense: 33,
    image: "https://img.pokemondb.net/artwork/large/tentacruel.jpg"
},
{
    id: 74,
    name: "Geodude",
    types: ['Rock', 'Ground'],
    hp: 74,
    attack: 54,
    defense: 34,
    image: "https://img.pokemondb.net/artwork/large/geodude.jpg"
},
{
    id: 75,
    name: "Graveler",
    types: ['Rock', 'Ground'],
    hp: 75,
    attack: 55,
    defense: 35,
    image: "https://img.pokemondb.net/artwork/large/graveler.jpg"
},
{
    id: 76,
    name: "Golem",
    types: ['Rock', 'Ground'],
    hp: 76,
    attack: 56,
    defense: 36,
    image: "https://img.pokemondb.net/artwork/large/golem.jpg"
},
{
    id: 77,
    name: "Ponyta",
    types: ['Fire'],
    hp: 77,
    attack: 57,
    defense: 37,
    image: "https://img.pokemondb.net/artwork/large/ponyta.jpg"
},
{
    id: 78,
    name: "Rapidash",
    types: ['Fire'],
    hp: 78,
    attack: 58,
    defense: 38,
    image: "https://img.pokemondb.net/artwork/large/rapidash.jpg"
},
{
    id: 79,
    name: "Slowpoke",
    types: ['Water', 'Psychic'],
    hp: 79,
    attack: 59,
    defense: 39,
    image: "https://img.pokemondb.net/artwork/large/slowpoke.jpg"
},
{
    id: 80,
    name: "Slowbro",
    types: ['Water', 'Psychic'],
    hp: 80,
    attack: 60,
    defense: 40,
    image: "https://img.pokemondb.net/artwork/large/slowbro.jpg"
},
{
    id: 81,
    name: "Magnemite",
    types: ['Electric', 'Steel'],
    hp: 81,
    attack: 61,
    defense: 41,
    image: "https://img.pokemondb.net/artwork/large/magnemite.jpg"
},
{
    id: 82,
    name: "Magneton",
    types: ['Electric', 'Steel'],
    hp: 82,
    attack: 62,
    defense: 42,
    image: "https://img.pokemondb.net/artwork/large/magneton.jpg"
},
{
    id: 83,
    name: "Farfetch’d",
    types: ['Normal', 'Flying'],
    hp: 83,
    attack: 63,
    defense: 43,
    image: "https://img.pokemondb.net/artwork/large/farfetchd.jpg"
},
{
    id: 84,
    name: "Doduo",
    types: ['Normal', 'Flying'],
    hp: 84,
    attack: 64,
    defense: 44,
    image: "https://img.pokemondb.net/artwork/large/doduo.jpg"
},
{
    id: 85,
    name: "Dodrio",
    types: ['Normal', 'Flying'],
    hp: 85,
    attack: 65,
    defense: 45,
    image: "https://img.pokemondb.net/artwork/large/dodrio.jpg"
},
{
    id: 86,
    name: "Seel",
    types: ['Water'],
    hp: 86,
    attack: 66,
    defense: 46,
    image: "https://img.pokemondb.net/artwork/large/seel.jpg"
},
{
    id: 87,
    name: "Dewgong",
    types: ['Water', 'Ice'],
    hp: 87,
    attack: 67,
    defense: 47,
    image: "https://img.pokemondb.net/artwork/large/dewgong.jpg"
},
{
    id: 88,
    name: "Grimer",
    types: ['Poison'],
    hp: 88,
    attack: 68,
    defense: 48,
    image: "https://img.pokemondb.net/artwork/large/grimer.jpg"
},
{
    id: 89,
    name: "Muk",
    types: ['Poison'],
    hp: 89,
    attack: 69,
    defense: 49,
    image: "https://img.pokemondb.net/artwork/large/muk.jpg"
},
{
    id: 90,
    name: "Shellder",
    types: ['Water'],
    hp: 90,
    attack: 70,
    defense: 50,
    image: "https://img.pokemondb.net/artwork/large/shellder.jpg"
},
{
    id: 91,
    name: "Cloyster",
    types: ['Water', 'Ice'],
    hp: 91,
    attack: 71,
    defense: 51,
    image: "https://img.pokemondb.net/artwork/large/cloyster.jpg"
},
{
    id: 92,
    name: "Gastly",
    types: ['Ghost', 'Poison'],
    hp: 92,
    attack: 72,
    defense: 52,
    image: "https://img.pokemondb.net/artwork/large/gastly.jpg"
},
{
    id: 93,
    name: "Haunter",
    types: ['Ghost', 'Poison'],
    hp: 93,
    attack: 73,
    defense: 53,
    image: "https://img.pokemondb.net/artwork/large/haunter.jpg"
},
{
    id: 94,
    name: "Gengar",
    types: ['Ghost', 'Poison'],
    hp: 94,
    attack: 74,
    defense: 54,
    image: "https://img.pokemondb.net/artwork/large/gengar.jpg"
},
{
    id: 95,
    name: "Onix",
    types: ['Rock', 'Ground'],
    hp: 95,
    attack: 75,
    defense: 55,
    image: "https://img.pokemondb.net/artwork/large/onix.jpg"
},
{
    id: 96,
    name: "Drowzee",
    types: ['Psychic'],
    hp: 96,
    attack: 76,
    defense: 56,
    image: "https://img.pokemondb.net/artwork/large/drowzee.jpg"
},
{
    id: 97,
    name: "Hypno",
    types: ['Psychic'],
    hp: 97,
    attack: 77,
    defense: 57,
    image: "https://img.pokemondb.net/artwork/large/hypno.jpg"
},
{
    id: 98,
    name: "Krabby",
    types: ['Water'],
    hp: 98,
    attack: 78,
    defense: 58,
    image: "https://img.pokemondb.net/artwork/large/krabby.jpg"
},
{
    id: 99,
    name: "Kingler",
    types: ['Water'],
    hp: 99,
    attack: 79,
    defense: 59,
    image: "https://img.pokemondb.net/artwork/large/kingler.jpg"
},
{
    id: 100,
    name: "Voltorb",
    types: ['Electric'],
    hp: 50,
    attack: 80,
    defense: 60,
    image: "https://img.pokemondb.net/artwork/large/voltorb.jpg"
},
];
Object.freeze(pokemonData);
const cardContainer = document.getElementById("card-container");
const { id, name, types = [], hp, attack, defense, image } = pokemonData;

const [type1, type2 = "None"] = types;


const setCards = (arr = pokemonData) => {
    // Clear the container before adding new cards
    cardContainer.innerHTML += arr
        .map(({ image, id, name, types }) => {
            const [type1, type2 = ""] = types;  // Destructure the types array

            return `
                <div class="pokemon-card">
                    <img src="${image}" alt="${name}" class="card-img">
                    <h2>${name}</h2>
                    <p>ID: ${id}</p>
                    <p>Types: ${type1}${type2 ? `, ${type2}` : ""}</p>
                </div>
            `;
        })
        .join("");
};

setCards();
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedType = button.getAttribute("data-type");
        cardContainer.innerHTML = "";
        console.log(selectedType);

        switch (selectedType) {
            case "normal":
                console.log("Filtering Normal type Pokémon");
                console.log(pokemonData.filter(pokemon => pokemon.types.includes("Normal")));
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Normal")));
                break;
            case "fire":
                console.log("Filtering Fire type Pokémon");
                console.log(pokemonData.filter(pokemon => pokemon.types.includes("Fire")));
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Fire")));
                break;
            case "water":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Water")));
                break;
            case "grass":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Grass")));
                break;
            case "electric":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Electric")));
                break;
            case "ice":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Ice")));
                break;
            case "fighting":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Fighting")));
                break;
            case "poison":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Poison")));
                break;
            case "ground":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Ground")));
                break;
            case "flying":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Flying")));
                break;
            case "psychic":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Psychic")));
                break;
            case "bug":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Bug")));
                break;
            case "rock":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Rock")));
                break;
            case "ghost":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Ghost")));
                break;
            case "dragon":
                setCards(pokemonData.filter(pokemon => pokemon.types.includes("Dragon")));
                break;
            default:
                setCards(pokemonData); // Show all Pokémon when "All" is selected
                break;
        }
    })
})