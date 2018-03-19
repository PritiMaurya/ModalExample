import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
export interface AlertModel {
  title: string;
  message: string;
}
@Component({
  selector: 'app-ng2-alert',
  templateUrl: './ng2-alert.component.html',
  styleUrls: ['./ng2-alert.component.css']
})
export class Ng2AlertComponent extends DialogComponent<AlertModel, null> implements AlertModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}
