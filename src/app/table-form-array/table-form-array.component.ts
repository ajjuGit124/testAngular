import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-form-array',
  templateUrl: './table-form-array.component.html',
  styleUrls: ['./table-form-array.component.css']
})

export class TableFormArrayComponent implements OnInit {

  addPrescriptionForm:FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) {
   
  }

  ngOnInit() {

  this.addPrescriptionForm = this._fb.group({

    tableRow: this._fb.array([])

 })


   
   
}

// Start Table Section
tableRowFn() {
  return this._fb.group({
    tableHeading: [''],
    tableDetail: this._fb.array([this.tableDetailFn()])
  })
}

tableRowArr() {
  return this.addPrescriptionForm.get('tableRow') as FormArray;
}

addMainTableRow() {
  return this.tableRowArr().push(this.tableRowFn());
}

removeMainTableRow(i) {
  debugger
  return this.tableRowArr().removeAt(i);
}

//--

tableDetailFn() {
  return this._fb.group({
    tableItemOne: [''],
    tableItemTwo: [''],
    tableItemThree: [''],
    tableExtCol: this._fb.array([])
  })
}

tableDetailArr(i) {
  return this.tableRowArr().at(i).get("tableDetail") as FormArray
}

addTableDetailRow(i) {
  this.tableDetailArr(i).push(this.tableDetailFn());
}

removeTableDetailRow(i, j) {
  return this.tableDetailArr(i).removeAt(j);
}

//---

tableExtColFn() {
  return this._fb.group({
    tdExtra: [''],
  })
}

tableExtColArr(i, j) {
  return this.tableDetailArr(i).at(j).get("tableExtCol") as FormArray
  //return ((<FormArray>this.addPrescriptionForm.controls['prescribedMedicines']).at(i).get('pmDetail') as FormArray).at(j).get('preMediExtCol') as FormArray;
}

removeTableExtCol(i, j, k) {
  return this.tableExtColArr(i, j).removeAt(k);
}

addTableExtCol(i, j) {
  this.tableExtColArr(i, j).push(this.tableExtColFn());
}



onProfileForm(){
  console.log(this.addPrescriptionForm.value);
}

}


