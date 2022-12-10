import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {
  @Input() image_source: any;
  constructor() { }

  ngOnInit(): void {
  }

}
