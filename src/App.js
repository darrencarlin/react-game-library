import React, { Component, Fragment } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import AddGame from "./components/AddGame";
import EditGame from "./components/EditGame";
import ViewGame from "./components/ViewGame";

class App extends Component {
  state = {
    currentView: "viewGame",
    index: 0,
    games: [
      {
        Name: "Exploding Kittens",
        Description:
          "Exploding Kittens is a highly-strategic, kitty-powered version of Russian roulette. Players draw cards until someone draws an exploding kitten, at which point they explode, they are Dead, and they are out of the game -- unless that player has a defuse card, which can defuse the kitten using things like laser pointers, belly rubs, and catnip sandwiches",
        PlayersMin: 2,
        PlayersMax: 5,
        Age: 7,
        PlayTime: 15,

        GameType: ["Card", "Party"],
        Difficulty: "Easy",
        Image: "exploding-kittens"
      },
      {
        Name: "Pandemic",
        Description:
          "Pandemic is a cooperative board game in which players work as a team to treat infections around the world while gathering resources for cures. You and your team are the only things standing in the way of deadly diseases that threaten the world. The fate of humanity is in your hands!",
        PlayersMin: 2,
        PlayersMax: 4,
        Age: 8,
        PlayTime: 45,

        GameType: ["Board", "Cooperative", "Card"],
        Difficulty: "Medium",
        Image: "pandemic"
      },
      {
        Name: "Settlers Of Catan",
        Description:
          "The Settlers of Catan is a strategy game where players collect resources and use them to build roads, settlements and cities on their way to victory. The board itself is variable, making each game a little different from the next. Each round of The Settlers of Catan is intended to keep three or four players ages 10 and above engaged for up to 90 minutes.",
        PlayersMin: 3,
        PlayersMax: 4,
        Age: 10,
        PlayTime: 60,
        GameType: ["Card", "Board", "Dice"],
        Difficulty: "Medium",
        Image: "settlers-of-catan"
      },
      {
        Name: "Ghost Blitz",
        Description:
          "In Ghost Blitz, five wooden items sit on the table waiting to be caught: a white ghost, a green bottle, a cute grey mouse, a blue book, and a comfortable red chair. Each card in the deck shows pictures of two objects, with one or both objects colored the wrong way. With all players playing at the same time, someone reveals a card, then players grab for the 'right' object – but which object is right?",
        PlayersMin: 2,
        PlayersMax: 8,
        Age: 8,
        PlayTime: 20,
        GameType: ["Card", "Action", "Dexterity"],
        Difficulty: "Easy",
        Image: "ghost-blitz"
      },
      {
        Name: "Photosynthesis ",
        Description:
          "Welcome to the world of Photosynthesis! Plant and shape the ever-changing forest as you cultivate your seeds and your strategy. Take your trees through their life-cycle, from seedling to full bloom to rebirth, and earn points as their leaves collect energy from the revolving sun’s rays.",
        PlayersMin: 2,
        PlayersMax: 4,
        Age: 10,
        PlayTime: 30,

        GameType: ["Board"],
        Difficulty: "Medium",
        Image: "photosynthesis"
      }
    ],
    filteredGames: []
  };

  searchLibrary = event => {
    const games = this.state.games;
    let filteredGames = games.filter(
      game =>
        game.Name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    );
    this.setState({ filteredGames });
  };

  renderView = view => {
    switch (view) {
      case "viewGame":
        return (
          <ViewGame
            game={this.state.games[this.state.index]}
            count={this.state.games.length}
          />
        );
      case "editGame":
        return (
          <EditGame
            games={this.state.games}
            game={this.state.games[this.state.index]}
            newGame={this.newGame}
            editGame={this.editGame}
          />
        );
      case "newGame":
        return (
          <AddGame
            games={this.state.games}
            newGame={this.newGame}
            addGame={this.addGame}
          />
        );
      default:
        return <ViewGame game={this.state.games[this.state.index]} />;
    }
  };

  // Render Game View

  renderGame = index => {
    this.setState({ currentView: "viewGame" });
    this.setState({ index: index });
  };

  // Render Add New Game View

  addGameView = () => {
    this.setState({ currentView: "newGame" });
  };

  // Render Edit Game View

  editGameView = () => {
    this.setState({ currentView: "editGame" });
  };

  // Add a new game to state

  addGame = game => {
    console.log(game);
    const games = this.state.games;
    games.push(game);
    this.setState({ games });
  };

  editGame = game => {
    const formattedGame = {
      Name: game.Name,
      Description: game.Description,
      PlayersMin: game.PlayersMin,
      PlayersMax: game.PlayersMax,
      Age: game.Age,
      PlayTime: game.PlayTime,
      GameType: game.GameType,
      Difficulty: game.Difficulty,
      Image: game.Image
    };
    const games = this.state.games;
    games[this.state.index] = formattedGame;
    this.setState({ games });
  };

  // Delete currently viewed game from state

  deleteGame = index => {
    if (index === this.state.games.length) {
    }
    const games = this.state.games;
    this.setState({
      games: games.filter((game, i) => {
        return i !== index;
      })
    });
    this.setState({ index: 0 });
  };

  render() {
    return (
      <Fragment>
        <Sidebar
          games={
            this.state.filteredGames.length > 0
              ? this.state.filteredGames
              : this.state.games
          }
          renderGame={this.renderGame}
          searchLibrary={this.searchLibrary}
        />
        <Main
          editGameView={this.editGameView}
          addGameView={this.addGameView}
          deleteGame={this.deleteGame}
          index={this.state.index}
        >
          {this.renderView(this.state.currentView)}
        </Main>
      </Fragment>
    );
  }
}

export default App;
