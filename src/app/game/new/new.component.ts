import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  table: string[][];
  tableForm: FormGroup;
  colsSubscription: Subscription;
  rowsSubscription: Subscription;

  rows: number;
  cols: number;

  constructor(private fb: FormBuilder) {
    this.tableForm = this.fb.group({
      rows: [3, [Validators.required, Validators.min(1)]],
      cols: [6, [Validators.required, Validators.min(1)]],
    });

    this.table = new Array(this.tableForm.controls['rows'].value);
    for (let i = 0; i < this.tableForm.controls['rows'].value; i++) {
      this.table[i] = new Array(this.tableForm.controls['cols'].value);
    }

    this.rowsSubscription = this.tableForm.controls[
      'rows'
    ].valueChanges.subscribe((rows) => {
      this.drawGrid();
    });
    this.colsSubscription = this.tableForm.controls[
      'cols'
    ].valueChanges.subscribe(() => {
      this.drawGrid();
    });

    this.rows = this.tableForm.controls['rows'].value;
    this.cols = this.tableForm.controls['cols'].value;
  }

  ngOnInit(): void {}

  drawGrid(): void {
    this.table = new Array(this.tableForm.controls['rows'].value);
    for (let i = 0; i < this.tableForm.controls['rows'].value; i++) {
      this.table[i] = new Array(this.tableForm.controls['cols'].value);
    }
  }

  ngOnDestroy(): void {
    this.colsSubscription.unsubscribe();
    this.rowsSubscription.unsubscribe();
  }

  counter(i: number) {
    return new Array(i);
  }
}
