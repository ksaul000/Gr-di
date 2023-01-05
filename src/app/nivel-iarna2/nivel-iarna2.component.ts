import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nivel-iarna2',
  templateUrl: './nivel-iarna2.component.html',
  styleUrls: ['./nivel-iarna2.component.css']
})
export class NivelIarna2Component implements OnInit {

  answer1_visible: boolean = false;
  answer2_visible: boolean = false;
  answer3_visible: boolean = false;
  correct_answer_button1_visible: boolean = true;
  correct_answer_button2_visible: boolean = true;
  correct_answer_button3_visible: boolean = true;
  emote_image: string = "../../assets/nivel_iarna1/inceput.jpg";
  audio = new Audio;
  happy_wav_path: string = "../../assets/yay_sound_effect.wav";
  no_sound_effect: string = "../../assets/no_sound_effect.wav";
  //imagini butoane
  poza_buton_1: string = "../../assets/nivel_iarna2/glove_1.png"
  poza_buton_2: string = "../../assets/nivel_iarna2/glove_2.png"
  poza_buton_3: string = "../../assets/nivel_iarna2/glove_3.png"
  poza_buton_4: string = "../../assets/nivel_iarna2/glove_4.png"
  poza_buton_5: string = "../../assets/nivel_iarna2/glove_5.png"
  poza_buton_6: string = "../../assets/nivel_iarna2/glove_6.png"
  poza_buton_7: string = "../../assets/nivel_iarna2/glove_7.png"
  poza_buton_8: string = "../../assets/nivel_iarna2/glove_8.png"
  poza_buton_9: string = "../../assets/nivel_iarna2/glove_9.png"

  show_level: boolean = false;
  show_feedback: boolean = false;
  show_instructions: boolean = true;

  @Output() exitEventEmmiter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  clickOnCorrectButton1(): void{
    if(this.correct_answer_button1_visible){
      this.correct_answer_button1_visible=false;
      this.answer1_visible=true;
      this.emote_image = "../../assets/nivel_iarna1/corect.jpg";
      this.audio.src = this.happy_wav_path;
      this.audio.load();
      this.audio.play();
    }
    if(this.answer1_visible===true && this.answer2_visible===true){
      this.show_level=false;
      this.show_feedback=true;
    }
  }

  clickOnCorrectButton2(): void{
    if(this.correct_answer_button2_visible){
      this.correct_answer_button2_visible=false;
      this.answer2_visible=true;
      this.emote_image = "../../assets/nivel_iarna1/corect.jpg"
      this.audio.src = this.happy_wav_path;
      this.audio.load();
      this.audio.play();
    }
    if(this.answer1_visible===true && this.answer2_visible===true){
      this.show_level=false;
      this.show_feedback=true;
    }
  }

  clickOnWrongButton(): void{
    this.emote_image = "../../assets/nivel_iarna1/gresit.jpg"
    this.audio.src = this.  no_sound_effect;
    this.audio.load();
    this.audio.play();
  }

  playVideo() {
    this.playPop();
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.play();
  }

  playPop(){
    const popAudio = new Audio();
    popAudio.src="../../assets/pop.mp3";
    popAudio.load();
    popAudio.play();
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
    this.answer1_visible = false;
    this.answer2_visible = false;
    this.answer3_visible = false;
    this.correct_answer_button1_visible = true;
    this.correct_answer_button2_visible = true;
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
