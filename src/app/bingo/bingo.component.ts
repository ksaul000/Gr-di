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

  audio = new Audio;
  soundtrack:string="../../assets/zelda.wav";
  popaudio = new Audio;
  popsound:string="../../assets/pop.mp3";


  ngOnInit(): void {
    this.audio.src=this.soundtrack;
    this.audio.load();
    this.audio.play();
    this.popaudio.src=this.popsound;
    this.popaudio.load();
  }

  playSoundtrack(){

  }


  sendLove(): void{
    if(!this.showLove){
      this.showLove=true;
    }
  }

  switchToMenu(){
    this.popaudio.play()
    this.audio.play()
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
    this.popaudio.play()
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

  switchToLvl(lvl:string){
    this.popaudio.play()
    this.audio.pause()
    switch(lvl){
      case "primavara1": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=true;
        this.showLvlPrimavara2=false;
        this.showLvlVara1=false;
        this.showLvlVara2=false;
        this.showLvlToamna1=false;
        this.showLvlToamna2=false;
        this.showLvlIarna1=false;
        this.showLvlIarna2=false;
        break;
      }
      case "primavara2": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=false;
        this.showLvlPrimavara2=true;
        this.showLvlVara1=false;
        this.showLvlVara2=false;
        this.showLvlToamna1=false;
        this.showLvlToamna2=false;
        this.showLvlIarna1=false;
        this.showLvlIarna2=false;
        break;
      }
      case "vara1": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=false;
        this.showLvlPrimavara2=false;
        this.showLvlVara1=true;
        this.showLvlVara2=false;
        this.showLvlToamna1=false;
        this.showLvlToamna2=false;
        this.showLvlIarna1=false;
        this.showLvlIarna2=false;
        break;
      }
      case "vara2": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=false;
        this.showLvlPrimavara2=false;
        this.showLvlVara1=false;
        this.showLvlVara2=true;
        this.showLvlToamna1=false;
        this.showLvlToamna2=false;
        this.showLvlIarna1=false;
        this.showLvlIarna2=false;
        break;
      }
      case "toamna1": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=false;
        this.showLvlPrimavara2=false;
        this.showLvlVara1=false;
        this.showLvlVara2=false;
        this.showLvlToamna1=true;
        this.showLvlToamna2=false;
        this.showLvlIarna1=false;
        this.showLvlIarna2=false;
        break;
      }
      case "toamna2": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=false;
        this.showLvlPrimavara2=false;
        this.showLvlVara1=false;
        this.showLvlVara2=false;
        this.showLvlToamna1=false;
        this.showLvlToamna2=true;
        this.showLvlIarna1=false;
        this.showLvlIarna2=false;
        break;
      }
      case "iarna1": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=false;
        this.showLvlPrimavara2=false;
        this.showLvlVara1=false;
        this.showLvlVara2=false;
        this.showLvlToamna1=false;
        this.showLvlToamna2=false;
        this.showLvlIarna1=true;
        this.showLvlIarna2=false;
        break;
      }
      case "iarna2": {
        this.showHomepage=false;
        this.showMenu=false;
        this.showLvlPrimavara1=false;
        this.showLvlPrimavara2=false;
        this.showLvlVara1=false;
        this.showLvlVara2=false;
        this.showLvlToamna1=false;
        this.showLvlToamna2=false;
        this.showLvlIarna1=false;
        this.showLvlIarna2=true;
        break;
      }

    }

  }

}
