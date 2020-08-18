import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface User {
  selectedDate: any;
}
export interface JSONUser {
  selectedDate: string;
}

/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'app-datepickerexample',
  templateUrl: './datepickerexample.component.html',
  styleUrls: ['./datepickerexample.component.scss'],
})
export class DatepickerexampleComponent implements OnInit, OnChanges {
  // Datepicker takes `Moment` objects instead of `Date` objects.
  public user: User;
  public JSONData: JSONUser = JSON.parse(
    '{ "selectedDate": "2018-12-18T08:56:00+00:00"}'
  );
  public model_result: string = JSON.stringify(this.JSONData);

  ngOnChanges(changes) {
    // console.log(changes);
  }

  ngOnInit() {
    this.user = this.JSONData;
  }

  onChange(args) {
    this.JSONData.selectedDate = args.value;
    this.model_result = JSON.stringify(this.JSONData);
    console.log(this.model_result);
  }
}
