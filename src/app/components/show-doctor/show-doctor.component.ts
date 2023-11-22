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

  constructor(private apiService: ApiserviceService) {}

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
    this.ModalTitle = 'Add Doctor';
  }

  closeClick() {}

  editClick(doctor: any) {
    this.ModalTitle = 'Edit Doctor';
  }

  deleteClick(doctor: any) {}
}
