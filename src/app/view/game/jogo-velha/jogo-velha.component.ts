import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.component.html',
  styleUrls: ['./jogo-velha.component.css']
})
export class JogoVelhaComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  inControl = 'x'
  positions = [];

  positionsX = [] 
  positionsO = []
  jogadas = 0

  counter = {
    x: 0,
    O: 0,
    rounds: 0
  }

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
      duration: 2000
    });
  }

  chosed(position) {
    
      switch (this.inControl) {
        case 'x':
          this.positionsX.push(position);
          this.win(this.positionsX, 'x');
          this.inControl = 'o';
          break;
        case 'o':
          this.positionsO.push(position);
          this.win(this.positionsO, 'o');
          this.inControl = 'x';
          break;
        default:
          break;
      }
  }

  isX(position) {
    return this.positionsX.find(i => i == position);
  }
  isO(position) {
    return this.positionsO.find(i => i == position);
  }

  buscar(position, array) {
    return array.find(i => i == position)
  }

  win(positions, simble) {
    if (this.horizontal1(positions) ||
    this.horizontal2(positions) ||
      this.horizontal3(positions) ||
      this.vertical1(positions) ||
      this.vertical2(positions) ||
      this.vertical3(positions) ||
      this.diagonalleft(positions) ||
      this.diagonalright(positions) 
    ) {
      
      switch (simble) {
        case 'x':
          this.counter.x += 1; 
          this.openSnackBar('Ponto para o X', 'Ok')
          break;
        case 'o':
          this.counter.O += 1;
          this.openSnackBar('Ponto para o O', 'Ok')
          break;
        default:
          break;
      }
      this.counter.rounds += 1;
      this.positionsO = [];
      this.positionsX = [];
    }
  }


  horizontal1(array) {
    return (
      this.buscar(1, array) &&
      this.buscar(2, array) &&
      this.buscar(3,array) 
    )
  }
  horizontal2(array) {
    return (
      this.buscar(4, array) &&
      this.buscar(5, array) &&
      this.buscar(6,array) 
    )
  }
  horizontal3(array) {
    return (
      this.buscar(7, array) &&
      this.buscar(8, array) &&
      this.buscar(9,array) 
    )
  }
  vertical1(array) {
    return (
      this.buscar(1, array) &&
      this.buscar(4, array) &&
      this.buscar(7,array) 
    )
  }
  vertical2(array) {
    return (
      this.buscar(2, array) &&
      this.buscar(5, array) &&
      this.buscar(8,array) 
    )
  }
  vertical3(array) {
    return (
      this.buscar(3, array) &&
      this.buscar(6, array) &&
      this.buscar(9,array) 
    )
  }
  diagonalleft(array) {
    return (
      this.buscar(1, array) &&
      this.buscar(5, array) &&
      this.buscar(9,array) 
    )
  }
  diagonalright(array) {
    return (
      this.buscar(7, array) &&
      this.buscar(5, array) &&
      this.buscar(3,array) 
    )
  }

  back() {
    window.history.back()
  }

 



}
