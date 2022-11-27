import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  @Output() exitEventEmmiter = new EventEmitter();

  ngOnInit(): void {
  }

  exit(){
    console.log("exit");
    this.exitEventEmmiter.emit()
  }

}
