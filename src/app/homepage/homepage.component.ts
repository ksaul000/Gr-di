import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  @Output() enterInMenuEventEmmiter = new EventEmitter();

  ngOnInit(): void {
  }

  clickOnPlayButton(){
    this.enterInMenuEventEmmiter.emit();
  }
}
