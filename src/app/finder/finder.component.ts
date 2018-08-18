import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // isPalindrome(num: number): boolean {
  //   const normal = num;
  //   let reversed = 0;
  //   let digit: number;

  //   while (num > 0) {
  //     digit = num % 10;
  //     reversed = reversed * 10 + digit;
  //     num = num / 10;
  //   }

  //   return (normal === reversed);
  // }

  isPalindrome(data) {
    const normal = data.min;
    let reversed = 0;
    let digit: number;

    while (data.min > 0) {
      digit = data.min % 10;
      reversed = reversed * 10 + digit;
      data.min = Math.round(data.min / 10);
    }
    console.log(normal);
    console.log(reversed);
    // tslint:disable-next-line:triple-equals
    console.log(normal == reversed);
  }

  findPalindrome(data) {
    const min = data.min;
    let max = data.max;
    while (max !== min) {
      if (this.isPalindrome(max)) {
        console.log(String(max));
      } else {
        max = max - 1;
      }
    }
    console.log('none');
  }

}
