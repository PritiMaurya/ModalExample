import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
export interface ConfirmModal {
  title: String;
  message: String;
}
@Component({
  selector: 'app-ng2confirm',
  templateUrl: './ng2confirm.component.html',
  styleUrls: ['./ng2confirm.component.css']
})
export class Ng2confirmComponent extends DialogComponent<ConfirmModal, null> implements ConfirmModal {
  title: String;
  message: String;
  result;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm(){
    this.result = true;
    console.log('yes');
    this.close();
  }
  cancel(){
    this.result = false;
    console.log('No');
    this.close();
  }
}
