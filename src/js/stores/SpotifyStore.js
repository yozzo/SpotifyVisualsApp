import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import SpotifyWebApi from "spotify-web-api-js";

class SpotifyStore extends EventEmitter {
    constructor() {
        super();

        var spotifyApi = new SpotifyWebApi();

// spotifyApi.setAccessToken('<here_your_access_token>');
        //https://open.spotify.com/album/3ILBGXvUwP6kVni9wAFuCU
// get The Bonobo's albums, using Promises through Promise, Q or when
        spotifyApi.getArtistAlbums('2QgFpXr7jZc9KbyR9CsUHu')
            .then(function(data) {
                console.log('Artist albums', data);
            }, function(err) {
                console.error(err);
            });

        this.albums = spotifyApi.getArtistAlbums('2QgFpXr7jZc9KbyR9CsUHu');
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
