import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.styl']
})
export class OnBoardingComponent implements OnInit {
regForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      salutation: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      religion: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      relation: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      fName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      mName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      sName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      residentialNum: new FormControl('', [Validators.required, Validators.minLength(2)]),
      address1: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      empId: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      companyEmail: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      officialNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
      joinDate: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      bussinessUnit: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      subDepartment: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      emplopyeeType: new FormControl('', [Validators.required]),
      reportingManager: new FormControl('', [Validators.required]),
      noticePeriod: new FormControl('', [Validators.required]),
      bioId : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
});
  }
  submit() {
    alert('Personal details saved successfully, please fill your Employee details');
  }
}
