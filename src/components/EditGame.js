import React, { Component } from "react";

class EditGame extends Component {
  handleChange = event => {
    const updatedGame = {
      ...this.props.game,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.editGame(updatedGame);
  };

  render() {
    const {
      game: {
        Name,
        Description,
        PlayersMin,
        PlayersMax,
        Age,
        PlayTime,
        GameType,
        Difficulty,
        Image
      }
    } = this.props;
    return (
      <div className="game">
        <h2>Edit Game</h2>

        <div className="field game-name">
          <label htmlFor="name">Game Name:</label>
          <input
            type="text"
            id="name"
            name="Name"
            defaultValue={Name}
            onChange={this.handleChange}
          />
        </div>
        <div className="field game-description">
          <label htmlFor="name">Game Description:</label>
          <textarea
            type="text"
            id="name"
            name="Description"
            defaultValue={Description}
            onChange={this.handleChange}
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
                defaultValue={PlayersMin}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                name="PlayersMax"
                type="number"
                id="playersmax"
                placeholder="Maximum Players"
                defaultValue={PlayersMax}
                onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </div>

        <div className="field game-time">
          <div className="game-players-inputs">
            <label htmlFor="time">Play Time:</label>
            <div>
              <input
                name="PlayTime"
                type="number"
                id="time"
                placeholder="Play Time"
                defaultValue={PlayTime}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <div className="field game-type">
          <label htmlFor="type">Type:</label>
          <input
            name="GameType"
            type="text"
            id="type"
            placeholder="Separated by commas. e.g  'Board, Card, Party'"
            defaultValue={GameType}
            onChange={this.handleChange}
          />
        </div>

        <div className="field game-difficulty">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            name="Difficulty"
            id="difficulty"
            selected={Difficulty}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </div>
        <small> (Changes are saved automagically)</small>
      </div>
    );
  }
}

export default EditGame;
