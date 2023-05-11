import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  squares: any[];
  isCurrentX: boolean;
  winner: string | null;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.isCurrentX = true;
    this.winner = null;
  }

  makeMove(i: number) {
    console.log(this.player)
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.player)
      this.isCurrentX = !this.isCurrentX;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]
      ) {
        console.log('there is a winner');
        return this.squares[a];
      }
    }
    return null;
  }

  get player() {
    return this.isCurrentX ? 'X' : 'O';
  }
}
