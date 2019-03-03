import React, { Component } from "react";
import { getMaxID } from "../helpers";

class AddGame extends Component {
  state = {};

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleGame = () => {
    let game = {
      ID: parseInt(getMaxID(this.props.games)),
      Description: this.state.Description,
      Name: this.state.Name,
      PlayersMin: parseInt(this.state.PlayersMin),
      PlayersMax: parseInt(this.state.PlayersMax),
      Age: parseInt(this.state.Age),
      PlayTime: parseInt(this.state.PlayTimeMin),
      GameType: [this.state.Type.split(",")],
      Difficulty: this.state.Difficulty || "Easy",
      Image: this.state.Image
    };
    this.props.addGame(game);
  };

  render() {
    const {
      Name,
      Description,
      Players,
      Age,
      PlayTime,
      GameType,
      Difficulty,
      Image
    } = this.props.game;
    return (
      <div className="game">
        <h2>Add Game</h2>
        <div className="field game-name">
          <label htmlFor="name">Game Name:</label>
          <input
            type="text"
            id="name"
            name="Name"
            defaultValue={Name}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="field game-description">
          <label htmlFor="description">Game Description:</label>
          <textarea
            type="text"
            id="description"
            name="Description"
            defaultValue={Description}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="field game-players">
          <div className="game-players-inputs">
            <label htmlFor="playersmin">Players (Min - Max):</label>
            <div>
              <input
                name="PlayersMin"
                type="number"
                id="playersmin"
                placeholder="Minimum Players"
                defaultValue={Players[0]}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              <input
                name="PlayersMax"
                type="number"
                id="playersmax"
                placeholder="Maximum Players"
                defaultValue={Players[1]}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
        </div>

        <div className="field game-age">
          <label htmlFor="age">Age:</label>
          <input
            name="Age"
            type="number"
            id="age"
            placeholder="Numbers Only"
            defaultValue={Age}
            onChange={e => this.handleChange(e)}
          />
        </div>

        <div className="field game-time">
          <div className="game-players-inputs">
            <label htmlFor="timemin">Play Time (Min):</label>
            <div>
              <input
                name="PlayTimeMin"
                type="number"
                id="timemin"
                placeholder="Minimum Play Time"
                defaultValue={PlayTime[0]}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
        </div>

        <div className="field game-type">
          <label htmlFor="type">Type:</label>
          <input
            name="Type"
            type="text"
            id="type"
            placeholder="Separated by commas. e.g  'Board, Card, Party'"
            defaultValue={GameType.join(", ")}
            onChange={e => this.handleChange(e)}
          />
        </div>

        <div className="field game-difficulty">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            name="Difficulty"
            id="difficulty"
            selected={Difficulty}
            onChange={e => this.handleChange(e)}
          >
            <option defaultValue="low">Easy</option>
            <option defaultValue="medium">Medium</option>
            <option defaultValue="hard">Hard</option>
          </select>
        </div>

        <div className="field game-image">
          <label htmlFor="image">Image Name:</label>
          <input
            name="Image"
            type="text"
            id="image"
            placeholder="Separated by a hyphen. e.g 'exploding-kittens'"
            defaultValue={Image}
            onChange={e => this.handleChange(e)}
          />
        </div>

        <div className="field">
          <button className="btn" onClick={this.handleGame}>
            Add Game
          </button>
        </div>
      </div>
    );
  }
}

AddGame.defaultProps = {
  game: {
    Name: "",
    Description: "",
    Players: "",
    Age: "",
    PlayTime: "",
    GameType: [""],
    Difficulty: "",
    Image: ""
  }
};

export default AddGame;
