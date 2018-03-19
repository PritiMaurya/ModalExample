import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";

export interface PromptDialog{
  title: String;
  question: String;
}
@Component({
  selector: 'app-ng2-prompt',
  templateUrl: './ng2-prompt.component.html',
  styleUrls: ['./ng2-prompt.component.css']
})
export class Ng2PromptComponent extends DialogComponent<PromptDialog, null> implements PromptDialog {
  title: String;
  question: String;
  message = '';
  result;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  yes() {
    // this.result = true;
   this.result = this.message;
    this.close();
  }
}
