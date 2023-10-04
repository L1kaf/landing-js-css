const ROOT_NEW = document.getElementById('new');
//Массив с новостями
let articles = [
    {
        'foto': 'https://itproger.com/img/news/1517501131.jpg',
        'title': 'Устаревшие языки, которые уже не стоит изучать',
        'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
    },
    {
        'foto': 'https://itproger.com/img/news/1516366532.jpg',
        'title': '10 самых популярных сайтов написанных на Django',
        'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
    },
    {
        'foto': 'https://itproger.com/img/news/1517501131.jpg',
        'title': 'Устаревшие языки, которые уже не стоит изучать',
        'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
    },
    {
        'foto': 'https://itproger.com/img/news/1516366532.jpg',
        'title': '10 самых популярных сайтов написанных на Django',
        'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
    },
    {
        'foto': 'https://itproger.com/img/news/1517501131.jpg',
        'title': 'Устаревшие языки, которые уже не стоит изучать',
        'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
    },
    {
        'foto': 'https://itproger.com/img/news/1516366532.jpg',
        'title': '10 самых популярных сайтов написанных на Django',
        'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
    },
    {
        'foto': 'https://itproger.com/img/news/1517501131.jpg',
        'title': 'Устаревшие языки, которые уже не стоит изучать',
        'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
    },
    {
        'foto': 'https://itproger.com/img/news/1516366532.jpg',
        'title': '10 самых популярных сайтов написанных на Django',
        'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
    },
];
//Класс для подгрузки новых новостей из массива
class Articles {

    render() {
        let htmlCatalog = ''

        articles.forEach(({foto, title, intro}) => {
            
            htmlCatalog += `
            <div class="card mt-5 cards">
                <img src="${foto}" class="card-img-top newsFoto">
                <div class="card-body">
                 <h4 class="card-title">${title}</h4>
                    <p>${intro}</p>
                    <button type="button" class="btn btn-warning">Читать далее</button>
                </div>
            </div>	
            `;
        });

        ROOT_NEW.innerHTML = htmlCatalog;
    }
}

const pereb = new Articles();
pereb.render();


//Присвоение переменных для дальнейших действий с кнопками
const showMore = document.querySelector(".show");
const skipMore = document.querySelector(".skip");
const vsego = document.querySelectorAll(".cards").length;
let items = 0;
if (items === 0) {
    skipMore.style.display = "none";
}

//Показывает больше статей по кнопке
showMore.addEventListener("click", () => {
    document.querySelector("#new").hidden = false;
    items += 4;
    const array =  Array.from(document.querySelector("#new").children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add("is-visible"));
    
    if (visItems.length === vsego) {
        showMore.style.display = "none";
    }
    if (items === vsego) {
        skipMore.style.display = "inline-block";
    }
});


//Скрывает статьи по кнопке

skipMore.addEventListener("click", () => {
    document.querySelector("#new").hidden = true;
    skipMore.style.display = "none";
    showMore.style.display = "inline-block";
    items = 0;
    
});

//Поиск
function openSearch() {
    document.getElementById("newOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("newOverlay").style.display = "none";
}
