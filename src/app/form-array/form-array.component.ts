import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})

export class FormArrayComponent implements OnInit {

  addPrescriptionForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) {
   
  }

  ngOnInit() {

      this.addPrescriptionForm = this._fb.group({
        pmDetail: this._fb.array([this.pmDetailFn()]),
      })
      
  }


  pmDetailFn() {
    return this._fb.group({
      name: [''],
      day: [''],
      dose: [''],
      preMediExtCol: this._fb.array([])
    })
  }

  pmDetailArr() {
    return this.addPrescriptionForm.get("pmDetail") as FormArray;
  }

  removeRow(j){
    return this.pmDetailArr().removeAt(j);
  }

  addRow() {
    debugger
    this.pmDetailArr().push(this.pmDetailFn());
  }

  //---

  pmColFn() {
    return this._fb.group({
      extra: [''],
    })
  }

  pmExtCol(j) {
    return this.pmDetailArr().at(j).get("preMediExtCol") as FormArray
    //return ((<FormArray>this.addPrescriptionForm.controls['prescribedMedicines']).at(i).get('pmDetail') as FormArray).at(j).get('preMediExtCol') as FormArray;
  }

  removePMCol(j, k) {
    debugger
    return this.pmExtCol(j).removeAt(k);
  }

  addColumn(j) {
    debugger
    this.pmExtCol(j).push(this.pmColFn());
  }



  onProfileForm() {

    console.log(this.addPrescriptionForm.value);



  }

}
