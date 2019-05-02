import React from 'react';
import GamesListItem from './GamesListItem';

export class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          title: "Tetris",
          rating: 8,
          description: "This is a game description. It's not complete.",
          id: 23
        },
        {
          title: "Super Mario Bros",
          rating: 9,
          description: "This is a game description. It's not complete.",
          id: 1
        },
        {
          title: "Card Matching",
          rating: 10,
          description: "This is a game description. It's not complete.",
          id: 12
        },
        {
          title: "Watch Paint Dry",
          rating: 3,
          description: "This is a game description. It's not complete.",
          id: 64
        },
        {
          title: "Do homework",
          rating: 1,
          description: "This is a game description. It's not complete.",
          id: 19
        }
      ]
    };
  }
  render() {
    const games = this.state.games;
    console.log(games.length);
    let gamesList = games.map((game) => 
      <GamesListItem game={game} key={game.id} />
    );
    console.log(gamesList);

    return (
      <div>
        {gamesList}
      </div>
    );
  }
}

export default GamesList;