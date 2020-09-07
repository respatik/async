let getNegara = document.querySelector(".column")

fetch('https://restcountries.eu/rest/v2/regionalbloc/asean')
    .then((response) => {
        return response.json();
    })

    .then ((negara) => {
        negara.forEach((negara) => {
            let card = document.createElement("span");
            card.innerHTML =`
            <img src="${negara.flag}" alt="">
            <p class="name">${negara.name}</p>`;
            getNegara.appendChild(card) 
        })

        negara ();
    })
    .catch ((error) => {
        console.log("waduh error");
    })