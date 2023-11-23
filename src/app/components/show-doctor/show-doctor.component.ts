import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css'],
})
export class ShowDoctorComponent implements OnInit {
  doctorList: any;
  ModalTitle: string = 'This is title';
  activateAddEditDoctorComponent: boolean = false;
  doctor: any;

  constructor(private apiService: ApiserviceService) {
    this.doctor = {
      email: '',
      fee: 0,
      id: '',
      name: '',
      nmcNumber: '',
      phoneNumber: '',
      speciality: '',
    };
  }

  ngOnInit(): void {
    this.refreshDoctorList();
  }

  refreshDoctorList() {
    this.apiService.getDoctors().subscribe((data) => {
      console.log(data);
      this.doctorList = data;
    });
  }

  addClick() {
    this.doctor = {
      email: '',
      fee: 0,
      id: '',
      name: '',
      nmcNumber: '',
      phoneNumber: '',
      speciality: '',
    };
    this.ModalTitle = 'Add Doctor';
    this.activateAddEditDoctorComponent = true;
  }

  closeClick() {
    this.activateAddEditDoctorComponent = false;
    this.refreshDoctorList();
  }

  editClick(doctor: any) {
    this.ModalTitle = 'Edit Doctor';
    this.activateAddEditDoctorComponent = true;
    this.doctor = doctor;
    console.log(doctor);
  }

  deleteClick(doctor: any) {
    console.log(doctor);
    this.doctor = doctor;
    if (confirm('Are you sure??')) {
      this.apiService.deleteDoctors(this.doctor.id).subscribe((data) => {
        alert('Doctor Deleted Successfully');
        this.refreshDoctorList();
      });
    }
  }
}
