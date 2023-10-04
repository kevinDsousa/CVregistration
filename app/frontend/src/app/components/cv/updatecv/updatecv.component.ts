import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatecv',
  templateUrl: './updatecv.component.html',
  styleUrls: ['./updatecv.component.css']
})
export class UpdatecvComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      vacancy: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      education: ['', Validators.required],
      skill: ['']
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const formData = this.updateForm.value;
      console.log(formData);
    }
  }

  cancelar() {
  }
}
