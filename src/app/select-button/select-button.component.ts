import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {

  @Input() image_source: any;
  @Input() audio_source: any;
  constructor() { }

  ngOnInit(): void {
  }

  playSound() {
    //let audio = new Audio();
    //audio.src = this.audio_source;
    //audio.load();
    //audio.play();
  }
}
