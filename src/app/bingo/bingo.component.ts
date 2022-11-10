import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  constructor() { }
  showLove:boolean=false

  ngOnInit(): void {
  }

  sendLove(): void{
    if(!this.showLove){
      this.showLove=true;
    }
  }

}
