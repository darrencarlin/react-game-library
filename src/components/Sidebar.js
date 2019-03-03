import React, { Fragment, Component } from "react";

class GameList extends Component {
  state = {
    currentElement: "",
    previousElement: false
  };

  handleCLick(e) {
    if (this.state.previousElement) {
      e.target.className = "active";
      let currentElement = this.state.currentElement;
      currentElement.className = "";
    }
    e.target.className = "active";
    this.setState({ currentElement: e.target });
    this.setState({ previousElement: true });
  }
  render() {
    const { games, renderGame } = this.props;
    return (
      <Fragment>
        <ul className="game-list">
          {games.map((game, index) => (
            <li
              className={
                index === 0 && !this.state.previousElement ? "active" : ""
              }
              key={index}
              onClick={e => {
                renderGame(index);
                this.handleCLick(e);
              }}
            >
              {game.Name}
              <i className="fas fa-chevron-right" />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const Sidebar = ({ games, renderGame, searchLibrary, deleteGame }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Game Library</h2>
        <i className="fas fa-times fa-2x" />
      </div>
      <div className="search">
        <input
          onChange={event => searchLibrary(event)}
          type="search"
          placeholder="Search Games"
        />
      </div>
      <GameList games={games} renderGame={renderGame} deleteGame={deleteGame} />
    </div>
  );
};

export default Sidebar;
