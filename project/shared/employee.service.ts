import { Injectable } from '@angular/core';
import { Employee } from 'project/shared/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private firestore:AngularFirestore) { }
  getEmployees(){
   return this.firestore.collection('Employees').snapshotChanges();
  }
}
