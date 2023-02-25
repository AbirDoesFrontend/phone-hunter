const loadPhonesData = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data);
}

const displayPhones = (data) => {
    const phoneContainer = document.getElementById('card-container');
    for(const phones of data.data) {
        console.log(phones);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phones.image}" class="card-img-top" alt="${phones.slug}">
                <div class="card-body">
                    <h5 class="card-title">${phones.phone_name}</h5>
                </div>
            </div>
        `
        phoneContainer.appendChild(phoneDiv);
    }
}

loadPhonesData();