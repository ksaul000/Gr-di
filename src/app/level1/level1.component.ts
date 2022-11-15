import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {
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
  poza_buton_1: string = "../../assets/saul_level/bicicleta.jpg"
  poza_buton_2: string = "../../assets/saul_level/manusi_box.jpg"
  poza_buton_3: string = "../../assets/saul_level/ghete_de_iarna.jpg"
  poza_buton_4: string = "../../assets/saul_level/manusi_portar.jpg"
  poza_buton_5: string =  "../../assets/saul_level/casca_cotiere_genuchere.jpg"
  poza_buton_6: string = "../../assets/saul_level/paleta_ping_pong.jpg"
  poza_buton_7: string = "../../assets/saul_level/minge_baschet.jpg"
  poza_buton_8: string = "../../assets/saul_level/ochelari_ski.jpg"
  poza_buton_9: string = "../../assets/saul_level/manusi.jpg"

  show_level: boolean = true;
  show_feedback: boolean = false;
  show_instructions: boolean = true;


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


}
