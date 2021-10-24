// // const data = {

// // }

// const API_KEY = getToken();
// function getToken(){
//     const clientId = "4136440a365b456eb1860f4482c96430";
//     const clientSecret = "ff6026e6488c4344a0eeaaadeb0824e4";

//     const _getToken = async () => {

//         const result = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded',
//             'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
//             },
//             body: 'grant_type=client_credentials'
//         });

//         const data = await result.json();
//         const token = data.access_token;
//         return token;
//     }
// };

// const baseURL = 'https://accounts.spotify.com';

// const APIController = (function() {
    
//     const clientId = "4136440a365b456eb1860f4482c96430";
//     const clientSecret = "ff6026e6488c4344a0eeaaadeb0824e4";

//     const _getToken = async () => {

//         const result = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded',
//             'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
//             },
//             body: 'grant_type=client_credentials'
//         });

//         const data = await result.json();
//         return data.access_token;
//     }

//     const _getGenres = async (token) => {

//       const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
//         method: 'GET',
//         headers: { 'Authorization' : 'Bearer ' + token}
//       });

//       const data = await result.json();
//       return data.categories.items;
//     }

//     const _getPlaylistByGenre = async (token, genreId) => {

//       const limit = 10;

//       const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
//         method: 'GET',
//         headers: { 'Authorization' : 'Bearer' + token}
//       });

//       const data = await result.json();
//       return data.playlists.items;
//     }

//     const _getTracks = async (token, tracksEndPoint) => {

//       const limit = 10;

//       const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
//         method: 'GET',
//         headers: { 'Authorization' : 'Bearer ' + token}
//       });

//       const data = result.json();
//       return data.items;
//     }

//     const _getTrack = async (token, tracksEndPoint) => {

//       const result = await fetch(`${tracksEndPoint}`, {
//         method: 'GET',
//         headers: { 'Authorization' : 'Bearer ' + token}
//       });

//       const data = await result.json();
//       return data;
//     }

//     return {
//       getToken() {
//         return _getToken();
//       },
//       getGenres() {
//         return _getGenres(token);
//       },
//       getPlaylistByGenre(token, genreId) {
//         return _getPlaylistByGenre(token, genreId);
//       },
//       getTracks() {
//         return _getTracks(token, tracksEndPoint);
//       },
//       getTrack() {
//         return _getTrack(token, trackEndpoint);
//       }
//     }

// })();

// window.onload = () => {
//   document.body.innerHTML = `
//   <nav style="background-color: black;">
//     <div class="nav-container">
//       <a href="#discover">Discover</a>
//       <a href="#feed">Feed</a>
//       <a href="#about">About</a>
//     </div>

//     <div class="user-profile">
//       <button onclick="userDropdown()" class="dropbtn">Initial</button>
//       <div id="myDropdown" class="dropdown-content">
//         <div id="usernameProfile>Username:</div>
//         <a href="#view-profile">View profile</a>
//         <a href="#settings">Settings</a>
//         <a href="#sign-out">Sign out</a>
//       </div>
//     </div>
//   </nav>
//   `;
// };

const favourites = document.createElement("section");
favourites.setAttribute("id", "favourites");
document.body.appendChild(favourites);
document.getElementById("favourites").innerHTML = `
  <div class="nav-toggle">
    <span id="nav-toggle-L">[</span>
    <span id="nav-toggle-R">]</span>
  </div>

  <div class="favourites-container">
    <div id="title1">
      Find new favourites
      <i id="dropdown" class="far fa-caret-square-down"></i>
    </div>

    <div id="title2">
      or search for your favourite right now
      <input id="search-fav">
      <i id="cursor" class="fas fa-mouse-pointer"></i>
    </div>
  </div>
`;

document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-toggle").innerHTML = `
  <span id="nav-toggle-L">[</span>
      <a href="#discover">Discover</a>
      <a href="#feed">Feed</a>
      <a href="#about">About</a>
  <span id="nav-toggle-R">]</span>
  `
})

// const fetchURL = async () => {
//     let url = `https://${API_KEY}`
//     try {
//         let response = await fetch(url);
//         let commits = await response.json(); // read response body and parse as JSON
//         console.log(commits);
//     } catch (error) {
//       console.log("ERROR : getData", error);
//     }
// };

// fetchURL();

// document.getElementById("dropdown").addEventListener("click", () => {
//   const browse = document.createElement("section");
//   browse.setAttribute("id", "browse");
//   document.getElementById("title1").appendChild(browse);

//   getGenres();
// });
//     // getCountry();
//     // getArtists();

// async function getGenres() {
//     const token = await APIController.getToken(); 
//     const genres = await APIController.getGenres(token);
    
//     // return {
//     //     url: 'https://api.spotify.com/v1/browse/categories?offset=0&limit=20',
//     //     headers: {
//     //         'Authorization': 'Bearer ' + token
//     //     }
//     // };

//     //const genresHTML = articles.map(renderGenres);
//     //document.getElementById("browse").innerHTML = genresHTML.join("");
// }

// getGenres();

// function genreData() {
//     const fetchURL = async () => {
//         try {
//             let response = await fetch('https://api.spotify.com/v1/browse/categories?offset=0&limit=20');
//             let commits = await response.json(); // read response body and parse as JSON
//             console.log(commits);
//         } catch (error) {
//           console.log("ERROR : getData", error);
//         }
//     };
// };

// const fetchURL = async () => {
//     try {
//         let response = await fetch(url);
//         let commits = await response.json(); // read response body and parse as JSON
//         console.log(commits);
//     } catch (error) {
//       console.log("ERROR : getData", error);
//     }
// };

// fetchURL();

// const loadGenres = async () => {
//     //get the token
//     const token = await APICtrl.getToken();           
//     //store the token onto the page
//     UICtrl.storeToken(token);
//     //get the genres
//     const genres = await APICtrl.getGenres(token);
//     //populate our genres select element
//     genres.forEach(element => UICtrl.createGenre(element.name, element.id));
// }

// function renderGenres() {
//     return `
//     <div id="genre[x]" class="genre-card">
//       <div id="title">${genre}</div>
//     </div>
//     `
// };

// split screen. left side horizontal scroll through cards, right side read more info of card
// generate rows of cards according to choice in prev row. eg. country = US --> next row give genres in the country and top artists of the genre

// document.getElementById("genre[x]").addEventListener("click", (genre[x]) => {

// })

{/* <div id="genres">
        <div class="row-title card">Genres</div>
        <div class="card"></div>
    </div> */}

// // Refactor renderArticle() to make the news article more beautiful.
// function renderArticle(article, articles) {
//   let articleDate = new Date(article.publishedAt);
//   let datePublished = articleDate.toDateString();
//   let now = new Date();
//   return `
//     <li class="mb-3 align-self-center article">
//       <div class="wrapper">
//       <div class="article-title">
//       <h6 class="mb-0 article-source"><a href="${article.url}">${article.source.name}</a></h6>
//         <h1>${article.title}</h1>
//         <button class="bookmark" onclick="markArticle(${article})"><i class="far fa-bookmark"></i></button>
//         <h5 class="mb-0 article-author">${article.author}<i class="fas fa-pen-alt"></i></h5>
//       </div>

//       <img src="${article.urlToImage}" class="article-img" style="width: 35vw; height: auto;"/>
//       <p class="article-content">${article.content}</p>
//       <h6 class="date-published">${datePublished}</h6>
//       </div>
//     </li>
//   `;
// };
