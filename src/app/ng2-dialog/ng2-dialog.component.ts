import { Component } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {Ng2confirmComponent} from "../ng2confirm/ng2confirm.component";
export interface ParentDialog {
  title: String;
}
@Component({
  selector: 'app-ng2-dialog',
  templateUrl: './ng2-dialog.component.html',
  styleUrls: ['./ng2-dialog.component.css']
})
export class Ng2DialogComponent extends DialogComponent<Ng2DialogComponent, null> implements  ParentDialog {
  title: String;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    this.dialogService.addDialog(Ng2confirmComponent, {title: 'Child', message: 'this is child dialog'}).subscribe(
      (data) => {
        if (data) {
          console.log(data);
        }
      }
    );
  }
}
