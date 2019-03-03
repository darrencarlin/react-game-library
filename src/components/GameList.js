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
              //className={
              //  index === 0 && !this.state.previousElement ? "active" : ""
              // }
              //&& !this.state.previousElement
              className={index === 0 ? "active" : ""}
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

export default GameList;
