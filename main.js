// variables
const cardImage = document.getElementById('pokeMonImg')
const cardName = document.getElementById('pokeName')
const cardContainer = document.getElementById('container')

// generate random url
const generateRandomUrl = () => {
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    const randomNum = Math.floor(Math.random() * 150) + 1;
    console.log(url + randomNum)
    return url + randomNum;
}

// fetch the data
const fetchData = () => {
    fetch(generateRandomUrl())
        .then(res => res.json())
        .then(data => showData(data))
}


const showData = allData => {
    const imgLink = allData.sprites.other['official-artwork']["front_default"]
    const name = (allData.name).toUpperCase()
    const type = allData.types[0].type.name
    const height = allData.height
    const weight = allData.weight

    // set value
    // cardImage.setAttribute('src', imgLink)
    // cardName.innerText = name.toUpperCase()

    console.log(allData)
    console.log(weight)


    cardContainer.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
        <img id="pokeMonImg" src="${imgLink}" alt="Pokemon" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 id="pokeName" class="card-title font-bold">${name}</h2>
        <p class="font-semibold  ">Type: ${type}</p>
        <p class="font-semibold  ">Height: ${height}M</p>
        <p class="font-semibold  text-left">Weight: ${weight}KG</p>
        <div class="card-actions">
            <button onclick="fetchData()" class="btn bg-[#4361D1]">Random</button>
        </div>
    </div>
</div>
    `


}

fetchData()
// setInterval(function generateRandom () {
//     console.log(generateRandomUrl())
// }, 300)