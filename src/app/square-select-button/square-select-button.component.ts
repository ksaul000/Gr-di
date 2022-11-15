import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-select-button',
  templateUrl: './square-select-button.component.html',
  styleUrls: ['./square-select-button.component.css']
})
export class SquareSelectButtonComponent implements OnInit {

  @Input() image_source: any;
  @Input() audio_source: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  playSound() {
    let audio = new Audio();
    audio.src = this.audio_source;
    audio.load();
    audio.play();
  }

}
