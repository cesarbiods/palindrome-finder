import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'min' : [0],
      'max' : [105],
      'result' : [null],
    });
   }

  ngOnInit() {
  }

  isPalindrome(num: number): boolean {
    const normal = num;
    let reversed = 0;
    let digit: number;

    while (num > 0) {
      digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10);
    }

    // tslint:disable-next-line:triple-equals
    return (normal == reversed);
  }

  findPalindrome(data) {
    const min = data.min;
    let max = data.max;
    // tslint:disable-next-line:triple-equals
    if (max == min) {
      if (this.isPalindrome(max)) {
        this.form.patchValue({result: String(max)});
        return;
      } else {
        this.form.patchValue({result: 'none'});
        return;
      }
    }
    // tslint:disable-next-line:triple-equals
    while (max != (min - 1)) {
      if (this.isPalindrome(max)) {
        this.form.patchValue({result: String(max)});
        return;
      } else {
        max = max - 1;
      }
    }
    this.form.patchValue({result: 'none'});
  }

  reset() {
    this.form.reset();
}

}
