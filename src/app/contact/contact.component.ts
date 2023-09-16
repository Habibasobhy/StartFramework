import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // & Label Name
  inputName = false;

  labelName(e:any){
    if(e.target.value != ""){
      this.inputName = true;
    }
    else{
      this.inputName = false;
    }
  }


  // & Label Age
  inputAge = false;

  labelAge(e:any){
    if(e.target.value != ""){
      this.inputAge = true;
    }
    else{
      this.inputAge = false;
    }
  }

    // & Label Email
    inputEmail = false;

    labelEmail(e:any){
      if(e.target.value != ""){
        this.inputEmail = true;
      }
      else{
        this.inputEmail = false;
      }
    }

    // & Label Email
    inputPassword = false;

    labelPassword(e:any){
      if(e.target.value != ""){
        this.inputPassword = true;
      }
      else{
        this.inputPassword = false;
      }
    }
}
