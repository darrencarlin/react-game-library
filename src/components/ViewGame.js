import React from "react";

const ViewGame = ({
  game: {
    Name,
    Description,
    PlayersMin,
    PlayersMax,
    PlayTime,
    Age,
    GameType,
    Difficulty,
    Image
  },
  count
}) => {
  return (
    <div className="game">
      {count > 0 ? (
        <ul className="game-details">
          <li>
            <span>Name:</span> {Name}
          </li>
          <li>
            <span>Description:</span> {Description}
          </li>
          <li>
            <span>Players:</span> {`${PlayersMin} - ${PlayersMax}`}
          </li>
          <li>
            <span>Age:</span> {Age}+
          </li>
          <li>
            <span>Play Time:</span>
            {` ${PlayTime} Minutes`}
          </li>
          <li>
            <span>Game Type:</span> {`${GameType}  `}
          </li>
          <li>
            <span>Difficulty:</span> {Difficulty}
          </li>
          <li>
            <span>Image:</span>
          </li>
          <li>
            <img src={`images/${Image}.jpg`} alt="" />
          </li>
        </ul>
      ) : (
        <h4>No Entries</h4>
      )}
    </div>
  );
};

ViewGame.defaultProps = {
  game: {
    Name: "",
    Players: "",
    Age: "",
    PlayTime: "",
    GameType: [""],
    Difficulty: "",
    Image: "",
    ID: 0
  }
};

export default ViewGame;
