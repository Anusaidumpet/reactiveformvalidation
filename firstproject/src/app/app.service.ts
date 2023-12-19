import { Injectable } from '@angular/core';
import { IDropdown } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getList() {
    let dropDown: IDropdown[] = [];
    let _Test_1 = < IDropdown > {
      displayValue: 'Test 1',
      internalValue: 'T1',
    };
    let dropDown: IDropdown[] = [];
    let _Test_2 = < IDropdown > {
      displayValue: 'Test 2',
      internalValue: 'T2',
    };
    dropDown.push(_Test_2);
    return dropDown;
  }
  
}
