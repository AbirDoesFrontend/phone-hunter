const loadPhonesData = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data);
    displayNoFoundMessage(data.data);
}

const displayPhones = (data) => {
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.innerText = '';
    for(const phones of data.data) {
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

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click' , () => {
    const searchFeild = document.getElementById('searchFeild');
    const searchText = searchFeild.value;
    searchFeild.value = '';
    loadPhonesData(searchText);
})

const displayNoFoundMessage = (phones) => {
    const noFoundContainer = document.getElementById('noFoundMessage');
    if(phones.length === 0) {
        noFoundContainer.classList.remove('d-none');
    } else {
        noFoundContainer.classList.add('d-none');
    }
}

