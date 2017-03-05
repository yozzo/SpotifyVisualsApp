import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import SpotifyWebApi from "spotify-web-api-js";

class SpotifyStore extends EventEmitter {
    constructor() {
        super();

        var spotifyApi = new SpotifyWebApi();

// spotifyApi.setAccessToken('<here_your_access_token>');

// get The Bonobo's albums, using Promises through Promise, Q or when
        spotifyApi.getArtistAlbums('0cmWgDlu9CwTgxPhf403hb')
            .then(function(data) {
                console.log('Artist albums', data);
            }, function(err) {
                console.error(err);
            });

        this.albums = spotifyApi.getArtistAlbums('0cmWgDlu9CwTgxPhf403hb');
    }

    createTodo(text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit("change");
    }

    getAll() {
        return this.albums;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_ALBUM": {
                this.createTodo(action.text);
                break;
            }
            case "RECEIVE_ALBUM": {
                this.todos = action.todos;
                this.emit("change");
                break;
            }
        }
    }
}

const spotifyStore = new SpotifyStore;
dispatcher.register(spotifyStore.handleActions.bind(spotifyStore));

export default spotifyStore;
