import React from "react";
import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import SpotifyStore from "../stores/SpotifyStore";
import TodoStore from "../stores/TodoStore";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.getSpotify = this.getSpotify.bind(this);

    this.state = {
      albums: SpotifyStore.getAll()
    };
  }

  componentWillMount() {
    SpotifyStore.on("change", this.getSpotify);
  }

  componentWillUnmount() {
    SpotifyStore.removeListener("change", this.getSpotify);
  }

  getSpotify() {
    this.setState({
      albums: SpotifyStore.getAll()
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    // const { albums } = this.state;
    // const AlbumComponents = albums.map((todo) => {
    //     return <Todo key={todo.id} {...todo}/>;
    // });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Albums</h1>
        <ul>bla</ul>
      </div>
    );
  }
}
