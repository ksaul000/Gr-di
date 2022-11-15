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
  bicicleta_img_path: string = "../../assets/saul_level/bicicleta.jpg"
  casca_cotiere_genuchere_img_path: string = "../../assets/saul_level/casca_cotiere_genunchere.jpg"
  ghete_de_iarna_img_path: string = "../../assets/saul_level/ghete_de_iarna.jpg"
  manusi_box_img_path: string = "../../assets/saul_level/manusi_box.jpg"
  manusi_portar_img_path: string = "../../assets/saul_level/manusi_portar.jpg"
  manusi_img_path: string = "../../assets/saul_level/manusi.jpg"
  minge_baschet_img_path: string = "../../assets/saul_level/minge_baschet.jpg"
  ochelari_ski_img_path: string = "../../assets/saul_level/ochelari_ski.jpg"
  palete_ping_pong_img_path: string = "../../assets/saul_level/palete_ping_pong.jpg"


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
  }

  clickOnWrongButton(): void{
      this.emote_image = "../../assets/upset_girl.jpg"
      this.audio.src = this.  no_sound_effect;
      this.audio.load();
      this.audio.play();
  }

}
