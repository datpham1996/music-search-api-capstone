'use strict';



// start track functionality
function displayTrackResults(responseJson) {
    console.log(responseJson);
    $('#results-track-list').empty();
    let html = '';
    for (let i = 0; i < responseJson.results.trackmatches.track.length; i++) {
        console.log(responseJson.results.trackmatches.track[i]);

        html += `
        <li class="clearfix">
        <img src="${responseJson.results.trackmatches.track[i].image[3]['#text']}" class="results-image" alt="${responseJson.results.trackmatches.track[i].name}">
        <h3>${responseJson.results.trackmatches.track[i].name}</h3>
          <p>Description: ${responseJson.results.trackmatches.track[i].artist}</p>
          <p>URL : <a href="${responseJson.results.trackmatches.track[i].url}">${responseJson.results.trackmatches.track[i].url}</a></p>
        </li>`;
    }

    $('#results-track-list').html(html);
    $('#results-track-list-wrapper').removeClass('hidden');
}

function getTrackResults(query) {
    const searchTrackUrl = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=5f9a6038d66d4bba8b7e4a2a867a1226&format=json`
    console.log(searchTrackUrl);


    fetch(searchTrackUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayTrackResults(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchTrackForm() {
    $('.track-form').submit(function (event) {
        event.preventDefault();
        const track = $(this)
            .find('#track')
            .val();

        console.log(track)
        getTrackResults(track);
    });
}
// stop track functionality










// start artist functionality
function displayArtistResults(responseJson) {
    console.log(responseJson);
    $('#results-artist-list').empty();
    let html = '';
    for (let i = 0; i < responseJson.results.artistmatches.artist.length; i++) {
        console.log(responseJson.results.artistmatches.artist[i]);

        html += `
        <li class="clearfix">
        <img src="${responseJson.results.artistmatches.artist[i].image[3]['#text']}" class="results-image" alt="${responseJson.results.artistmatches.artist[i].name}">
        <h3>${responseJson.results.artistmatches.artist[i].name}</h3>
          <p>URL : <a href="${responseJson.results.artistmatches.artist[i].url}">${responseJson.results.artistmatches.artist[i].url}</a></p>
        </li>`;
    }

    $('#results-artist-list').html(html);
    $('#results-artist-list-wrapper').removeClass('hidden');
}

function getArtistResults(query) {
    const searchArtistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query}&api_key=5f9a6038d66d4bba8b7e4a2a867a1226&format=json`
    console.log(searchArtistUrl);


    fetch(searchArtistUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayArtistResults(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchArtistForm() {
    $('.artist-form').submit(function (event) {
        event.preventDefault();
        const artist = $(this)
            .find('#artist')
            .val();

        console.log(artist)
        getArtistResults(artist);
    });
}
// stop artist functionality









// start album functionality
function displayAlbumResults(responseJson) {
    console.log(responseJson);
    $('#results-album-list').empty();
    let html = '';
    for (let i = 0; i < responseJson.results.albummatches.album.length; i++) {
        console.log(responseJson.results.albummatches.album[i]);

        html += `
        <li class="clearfix">
        <img src="${responseJson.results.albummatches.album[i].image[3]['#text']}" class="results-image" alt="${responseJson.results.albummatches.album[i].name}">
        <h3>${responseJson.results.albummatches.album[i].name}</h3>
          <p>URL : <a href="${responseJson.results.albummatches.album[i].url}">${responseJson.results.albummatches.album[i].url}</a></p>
        </li>`;
    }

    $('#results-album-list').html(html);
    $('#results-album-list-wrapper').removeClass('hidden');
}

function getAlbumResults(query) {
    const searchAlbumUrl = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=5f9a6038d66d4bba8b7e4a2a867a1226&format=json`
    console.log(searchAlbumUrl);


    fetch(searchAlbumUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayAlbumResults(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchAlbumForm() {
    $('.album-form').submit(function (event) {
        event.preventDefault();
        const album = $(this)
            .find('#album')
            .val();

        console.log(album)
        getAlbumResults(album);
    });
}
// stop album functionality










//call back watch function
function main() {
    watchTrackForm();
    watchArtistForm();
    watchAlbumForm();
}
$(main);

