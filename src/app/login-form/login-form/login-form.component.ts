import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;
  question!: string;
  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: [null],
      name: [null],
      question: []
    });
  }

  public sendQuestion(): void {
    const data = this.form.getRawValue();
    if (data.question === '' || data.name === null || data.email === null) {
      window.alert("All the fildes are required!");
    }
    else
    {
      this.form.reset();
      window.alert("You're question has been sent!");
    }
  }
}