'use strict';
function checkEmptyImage(inputURL) {
    let outputURL = inputURL
    if (inputURL === undefined) {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    if (inputURL == null) {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    if (inputURL == "") {
        outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
    }
    return outputURL
}



function displayTrackResults(responseJson) {

    $('#results-track-list').empty();
    if (responseJson.results.trackmatches.track.length == 0) {
        $('.js-track-error-message').text(`No results`);
    }
    else {
        let html = '';
        for (let i = 0; i < responseJson.results.trackmatches.track.length; i++) {


            html += `
        <li class="clearfix">
        <img src="${checkEmptyImage(responseJson.results.trackmatches.track[i].image[3]['#text'])}" class="results-image" 
            alt="${responseJson.results.trackmatches.track[i].name}">
        <h3>
            <a href="${responseJson.results.trackmatches.track[i].url}">
                ${responseJson.results.trackmatches.track[i].name}  
            </a>
        </h3>
          <p>Description: ${responseJson.results.trackmatches.track[i].artist}</p>
        </li>`;
        }

        $('#results-track-list').html(html);
        $('#results-track-list-wrapper').removeClass('hidden');
    }
}

function getTrackResults(query) {
    const searchTrackUrl = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=5f9a6038d66d4bba8b7e4a2a867a1226&format=json`

    fetch(searchTrackUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayTrackResults(responseJson))
        .catch(err => {
            $('.js-track-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchTrackForm() {
    $('.track-form').submit(function (event) {
        event.preventDefault();
        const track = $(this)
            .find('#track')
            .val();
        getTrackResults(track);
    });
}


function displayArtistResults(responseJson) {

    $('#results-artist-list').empty();
    if (responseJson.results.artistmatches.artist.length == 0) {
        $('.js-artist-error-message').text(`No results`);
    }
    else {
        let html = '';
        for (let i = 0; i < responseJson.results.artistmatches.artist.length; i++) {
            html += `
        <li class="clearfix">
        <img src="${checkEmptyImage(responseJson.results.artistmatches.artist[i].image[3]['#text'])}" class="results-image" 
            alt="${responseJson.results.artistmatches.artist[i].name}">
        <h3>
            <a href="${responseJson.results.artistmatches.artist[i].url}">
                ${responseJson.results.artistmatches.artist[i].name}
            </a>
        </h3>
        </li>`;
        }

        $('#results-artist-list').html(html);
        $('#results-artist-list-wrapper').removeClass('hidden');
    }
}

function getArtistResults(query) {
    const searchArtistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query}&api_key=5f9a6038d66d4bba8b7e4a2a867a1226&format=json`

    fetch(searchArtistUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayArtistResults(responseJson))
        .catch(err => {
            $('.js-artist-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchArtistForm() {
    $('.artist-form').submit(function (event) {
        event.preventDefault();
        const artist = $(this)
            .find('#artist')
            .val();
        getArtistResults(artist);
    });
}


function displayAlbumResults(responseJson) {

    $('#results-album-list').empty();
    if (responseJson.results.albummatches.album.length == 0) {
        $('.js-album-error-message').text(`No results`);
    }
    else {
        let html = '';
        for (let i = 0; i < responseJson.results.albummatches.album.length; i++) {
            html += `
        <li class="clearfix">
        <img src="${checkEmptyImage(responseJson.results.albummatches.album[i].image[3]['#text'])}" class="results-image" 
            alt="${responseJson.results.albummatches.album[i].name}">
        <h3>
            <a href="${responseJson.results.albummatches.album[i].url}">
                 ${responseJson.results.albummatches.album[i].name}
            </a>
        </h3>
        </li>`;
        }

        $('#results-album-list').html(html);
        $('#results-album-list-wrapper').removeClass('hidden');
    }
}

function getAlbumResults(query) {
    const searchAlbumUrl = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=5f9a6038d66d4bba8b7e4a2a867a1226&format=json`
    fetch(searchAlbumUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayAlbumResults(responseJson))
        .catch(err => {
            $('.js-album-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchAlbumForm() {
    $('.album-form').submit(function (event) {
        event.preventDefault();
        const album = $(this)
            .find('#album')
            .val();
        getAlbumResults(album);
    });
}

function main() {
    watchTrackForm();
    watchArtistForm();
    watchAlbumForm();
}
$(main);

