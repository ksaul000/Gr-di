import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nivel-toamna2',
  templateUrl: './nivel-toamna2.component.html',
  styleUrls: ['./nivel-toamna2.component.css']
})
export class NivelToamna2Component implements OnInit {

  answer3_visible: boolean = false;
  correct_answer_button3_visible: boolean = true;
  emote_image: string = "../../assets/nivel_toamna2/serioasa.png";
  audio = new Audio;
  happy_wav_path: string = "../../assets/yay_sound_effect.wav";
  no_sound_effect: string = "../../assets/no_sound_effect.wav";
  //imagini butoane
  poza_buton_1: string = "../../assets/nivel_toamna2/cifra1.jpg"
  poza_buton_2: string = "../../assets/nivel_toamna2/cifra2.jpg"
  poza_buton_3: string = "../../assets/nivel_toamna2/cifra3.jpg"
  poza_buton_4: string = "../../assets/nivel_toamna2/cifra4.jpg"
  poza_buton_5: string =  "../../assets/nivel_toamna2/cifra5.jpg"
  poza_buton_6: string = "../../assets/nivel_toamna2/cifra6.jpg"
  poza_buton_7: string = "../../assets/nivel_toamna2/cifra7.jpg"
  poza_buton_8: string = "../../assets/nivel_toamna2/cifra8.jpg"
  poza_buton_9: string = "../../assets/nivel_toamna2/cifra9.jpg"

  show_level: boolean = false;
  show_feedback: boolean = false;
  show_instructions: boolean = true;

  @Output() exitEventEmmiter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  clickOnCorrectButton3(): void{
    if(this.correct_answer_button3_visible){
      this.correct_answer_button3_visible=false;
      this.answer3_visible=true;
      this.emote_image = "../../assets/nivel_toamna2/fericita.png"
      this.audio.src = this.happy_wav_path;
      this.audio.load();
      this.audio.play();
    }
    if(this.answer3_visible===true){
      this.show_level=false;
      this.show_feedback=true;
    }
  }

  clickOnWrongButton(): void{
    this.emote_image = "../../assets/nivel_toamna2/trista.png"
    this.audio.src = this.  no_sound_effect;
    this.audio.load();
    this.audio.play();
  }

  playPop(){
    const popAudio = new Audio();
    popAudio.src="../../assets/pop.mp3";
    popAudio.load();
    popAudio.play();
  }

  playVideo() {
    this.playPop();
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.play();
  }

  enterTheLevel(){
    this.playPop();
    this.show_instructions=false;
    this.show_level=true;
  }

  playInstructionVideo(){
    this.playPop();
    var myVideo: any = document.getElementById("my_instruction_video");
    myVideo.play();
  }

  level_reload(){
    this.playPop();
    this.answer3_visible = false;
    this.correct_answer_button3_visible = true;
    this.show_level = false;
    this.show_feedback = false;
    this.show_instructions = true;
  }

  exit(){
    console.log("exit");
    this.exitEventEmmiter.emit()
  }

}
