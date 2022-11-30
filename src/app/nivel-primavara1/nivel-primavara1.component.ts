import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nivel-primavara1',
  templateUrl: './nivel-primavara1.component.html',
  styleUrls: ['./nivel-primavara1.component.css']
})
export class NivelPrimavara1Component implements OnInit {
  answer1_visible: boolean = false;
  answer2_visible: boolean = false;
  answer3_visible: boolean = false;
  correct_answer_button1_visible: boolean = true;
  correct_answer_button2_visible: boolean = true;
  correct_answer_button3_visible: boolean = true;
  emote_image: string = "../../assets/curious_girl.jpg";
  audio = new Audio;
  happy_wav_path: string = "../../assets/yay_sound_effect.wav";
  no_sound_effect: string = "../../assets/no_sound_effect.wav";
  //imagini butoane
  poza_buton_1: string = "../../assets/nivel_primavara1/manusi.jpg"
  poza_buton_2: string = "../../assets/nivel_primavara1/bocanci.jpg"
  poza_buton_3: string = "../../assets/nivel_primavara1/pantaloni scurti.jpg"
  poza_buton_4: string = "../../assets/nivel_primavara1/bluza.jpg"
  poza_buton_5: string = "../../assets/nivel_primavara1/geaca.jpg"
  poza_buton_6: string = "../../assets/nivel_primavara1/pantaloni lungi.jpg"
  poza_buton_7: string = "../../assets/nivel_primavara1/papuci.jpg"
  poza_buton_8: string = "../../assets/nivel_primavara1/tricou.jpg"
  poza_buton_9: string = "../../assets/nivel_primavara1/fular.jpg"

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
      this.emote_image = "../../assets/happy_girl.jpg";
      this.audio.src = this.happy_wav_path;
      this.audio.load();
      this.audio.play();
    }
    if(this.answer1_visible===true && this.answer2_visible===true && this.answer3_visible===true){
      this.show_level=false;
      this.show_feedback=true;
    }
  }

  clickOnCorrectButton2(): void{
    if(this.correct_answer_button2_visible){
      this.correct_answer_button2_visible=false;
      this.answer2_visible=true;
      this.emote_image = "../../assets/happy_girl.jpg"
      this.audio.src = this.happy_wav_path;
      this.audio.load();
      this.audio.play();
    }
    if(this.answer1_visible===true && this.answer2_visible===true && this.answer3_visible===true){
      this.show_level=false;
      this.show_feedback=true;
    }
  }

  clickOnCorrectButton3(): void{
    if(this.correct_answer_button3_visible){
      this.correct_answer_button3_visible=false;
      this.answer3_visible=true;
      this.emote_image = "../../assets/happy_girl.jpg"
      this.audio.src = this.happy_wav_path;
      this.audio.load();
      this.audio.play();
    }
    if(this.answer1_visible===true && this.answer2_visible===true && this.answer3_visible===true){
      this.show_level=false;
      this.show_feedback=true;
    }
  }

  clickOnWrongButton(): void{
      this.emote_image = "../../assets/upset_girl.jpg"
      this.audio.src = this.  no_sound_effect;
      this.audio.load();
      this.audio.play();
  }

  playVideo() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.play();
  }

  enterTheLevel(){
    this.show_instructions=false;
    this.show_level=true;
  }

  playInstructionVideo(){
    var myVideo: any = document.getElementById("my_instruction_video");
    myVideo.play();
  }

  level_reload(){
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
