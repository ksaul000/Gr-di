import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  constructor() { }
  showLove:boolean=false;
  showHomepage:boolean=true;
  showMenu:boolean=false;
  showLvlPrimavara1:boolean=false;
  showLvlPrimavara2:boolean=false;
  showLvlVara1:boolean=false;
  showLvlVara2:boolean=false;
  showLvlToamna1:boolean=false;
  showLvlToamna2:boolean=false;
  showLvlIarna1:boolean=false;
  showLvlIarna2:boolean=false;

  ngOnInit(): void {
  }

  sendLove(): void{
    if(!this.showLove){
      this.showLove=true;
    }
  }

  switchToMenu(){
    this.showHomepage=false;
    this.showMenu=true;
    this.showLvlPrimavara1=false;
    this.showLvlPrimavara2=false;
    this.showLvlVara1=false;
    this.showLvlVara2=false;
    this.showLvlToamna1=false;
    this.showLvlToamna2=false;
    this.showLvlIarna1=false;
    this.showLvlIarna2=false;
  }

  switchToHomepage(){
    this.showHomepage=true;
    this.showMenu=false;
    this.showLvlPrimavara1=false;
    this.showLvlPrimavara2=false;
    this.showLvlVara1=false;
    this.showLvlVara2=false;
    this.showLvlToamna1=false;
    this.showLvlToamna2=false;
    this.showLvlIarna1=false;
    this.showLvlIarna2=false;
  }

}
