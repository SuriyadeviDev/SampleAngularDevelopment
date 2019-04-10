import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public ngForm: FormGroup;

  constructor(private service: EmployeeService, private firestore: AngularFirestore, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this._formBuild();
  }

  _formBuild() {
    this.ngForm = this.FormBuilder.group({
      id: [null, Validators.required],
      fullName: [null, Validators.required],
      empcode: [null, Validators.required],
      position: [null, Validators.required],
      mobileNum: [null, Validators.required],
    })
  }

  get f() { return this.ngForm.controls; }

  submitForm() {
    let data = this.ngForm;
    this.firestore.collection('Employees').add(data.value);
  }
}
