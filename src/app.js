const getData = () => new Promise((resolve, reject) => {
    fetch('https://www.omdbapi.com/?apikey=7efbcd45&s=code&type=movie')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
});

getData();

const container = document.getElementById('movies');

const renderData = (element) => {
    container.innerHTML += `<div class="accordion col-12" id="accordionExample">
                 <div class="card-header" id="x${element.imdbID}" >
                 <h5 class="mb-0">
                     <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#${element.imdbID}"  aria-controls="${element.imdbID}">
                         <img src="${element.Poster}" class="rounded-circle firstTitle">
                         ${element.Title}     
                     </button>
                 </h5>
             </div>
         </div>
        <div id=${element.imdbID} class="collapse" aria-labelledby="x${element.imdbID}" data-parent="#accordionExample">
                 <div class="card-body">
                 <div class="moreInfo row  mr-0 ml-0 ">
                        <div class="col-3"> 
                            <img src="${element.Poster}" class="img-thumbnail">
                        </div>
                        <div class="col-9">
                            <p>Title: ${element.Title}</p> 
                            <p>Year: ${element.Year}</p> 
                        </div>
                     </div>
                 </div>
             </div>
         </div>
         `;
};

renderData();

const render = () => {
    document.getElementById('movies').style.display = 'block';
};

getData().then((data) => {
    // console.log(data)
    const info = data.Search;
    info.forEach((element) => { renderData(element); });
});

render();