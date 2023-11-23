import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-doctor',
  templateUrl: './add-edit-doctor.component.html',
  styleUrls: ['./add-edit-doctor.component.css'],
})
export class AddEditDoctorComponent implements OnInit {
  @Input() doctor: any;

  email: string = '';
  fee: Number = 0;
  name: string = '';
  nmcNumber: string = '';
  phoneNumber: string = '';
  speciality: string = '';

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.email = this.doctor.email;
    this.fee = this.doctor.fee;
    this.name = this.doctor.name;
    this.nmcNumber = this.doctor.nmcNumber;
    this.phoneNumber = this.doctor.phoneNumber;
    this.speciality = this.doctor.speciality;
  }

  addDoctor() {
    var doc = {
      email: this.email,
      fee: this.fee,
      name: this.name,
      nmcNumber: this.nmcNumber,
      phoneNumber: this.phoneNumber,
      speciality: this.speciality,
    };
    this.apiService.createDoctors(doc).subscribe((data) => {
      alert('Doctor Added Successfully');
      this.email = '';
      this.fee = 0;
      this.name = '';
      this.nmcNumber = '';
      this.phoneNumber = '';
      this.speciality = '';
    });
  }

  updateDoctor() {
    var doc = {
      id: this.doctor.id,
      email: this.email,
      fee: this.fee,
      name: this.name,
      nmcNumber: this.nmcNumber,
      phoneNumber: this.phoneNumber,
      speciality: this.speciality,
    };
    this.apiService.editDoctors(doc).subscribe((data) => {
      alert('Doctor Edited Successfully');
    });
  }
}
