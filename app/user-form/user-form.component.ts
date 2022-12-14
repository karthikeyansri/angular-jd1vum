import { Component, OnInit ,ViewChild,HostListener} from '@angular/core';
import {FormCanDeactivate} from '../form-can-deactivate/form-can-deactivate';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends FormCanDeactivate   {
  
  name:string;

  @ViewChild('form')
  form: NgForm;

 
  submit(){
   console.log(this.form.submitted);
  }
  

}