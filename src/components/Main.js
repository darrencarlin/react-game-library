import React from "react";

const Controls = ({ addGameView, editGameView, deleteGame, index }) => {
  return (
    <div className="control-box">
      <div className="controls">
        <div className="controls-buttons">
          <i className="fas fa-list-ul fa-2x" title="Game List" />
          <i
            className="far fa-plus-square fa-2x"
            title="Add Game"
            onClick={addGameView}
          />
        </div>
      </div>
      <div className="controls">
        <div className="controls-buttons">
          <i
            className="far fa-edit fa-2x"
            title="Edit Game"
            onClick={editGameView}
          />
          <i
            className="far fa-trash-alt fa-2x"
            title="Delete Game"
            id={index}
            onClick={() => deleteGame(index)}
          />
        </div>
      </div>
    </div>
  );
};

const Main = ({ children, editGameView, addGameView, deleteGame, index }) => {
  return (
    <div className="main">
      <Controls
        editGameView={editGameView}
        addGameView={addGameView}
        deleteGame={deleteGame}
        index={index}
      />
      {children}
    </div>
  );
};

export default Main;
