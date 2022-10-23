import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arici',
  templateUrl: './arici.component.html',
  styleUrls: ['./arici.component.css']
})
export class AriciComponent implements OnInit {

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
