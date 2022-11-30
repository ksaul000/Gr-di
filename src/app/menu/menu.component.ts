import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  @Output() exitMenuEventEmmiter = new EventEmitter();
  @Output() enterInLvl = new EventEmitter();

  ngOnInit(): void {
  }

  exit(){
    this.exitMenuEventEmmiter.emit()
  }

  enter_in_lvl(lvl:string){
    this.enterInLvl.emit(lvl)
  }

}
