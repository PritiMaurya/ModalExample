import { Component } from '@angular/core';
import {DialogService} from "ng2-bootstrap-modal";
import {Ng2AlertComponent} from "./ng2-alert/ng2-alert.component";
import {Ng2confirmComponent} from "./ng2confirm/ng2confirm.component";
import {Ng2DialogComponent} from "./ng2-dialog/ng2-dialog.component";
import {Ng2PromptComponent} from "./ng2-prompt/ng2-prompt.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogService: DialogService){}
  title = 'app';
  showAlert() {
    this.dialogService.addDialog(Ng2AlertComponent, {title: 'Alert title!', message: 'Alert message!!!'});
  }

  showConfirm() {
    this.dialogService.addDialog(Ng2confirmComponent, {title: 'Confirm', message: 'Are you sure'}).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  showPrompt() {
    this.dialogService.addDialog(Ng2PromptComponent, {title: 'Prompt', question: 'Enter Your Name'}).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  showAlert1(){
    this.dialogService.addDialog(Ng2AlertComponent,{title: 'Alert', message: 'close after click outside'}, {closeByClickingOutside: true});
  }

  showAlert2() {
    this.dialogService.addDialog(Ng2AlertComponent, {title: 'Alert', message: 'It will close after 5 second'}, {autoCloseTimeout: 5000});
  }

  showDialog() {
    this.dialogService.addDialog(Ng2DialogComponent, {title: 'Parent Dialog'});
  }
}
