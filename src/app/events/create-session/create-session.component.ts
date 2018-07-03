import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../shared/event.model';
import { restrictedWords } from "../shared/restricted-word.validator";

@Component({
  selector: 'ev-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
  em {float:right; color: #E05c65; padding-left: 10px}
  .error input, .error textarea, .error select {background-color: #E3C3C5}
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {

  public newSessionForm:FormGroup

  public name: FormControl;
  public presenter: FormControl;
  public duration: FormControl;
  public level: FormControl;
  public abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['maricon', 'diablo'])]) 
  
    this.newSessionForm = new FormGroup({
      name : this.name,
      presenter: this.presenter,
      duration : this.duration,
      level : this.level,
      abstract : this.abstract
    })

    console.log(this.abstract)
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    }
  }

}
