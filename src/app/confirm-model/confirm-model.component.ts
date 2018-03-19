import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.css']
})
export class ConfirmModelComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('confirmModal') confirmModal: BsModalRef;
  message: String;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template){
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  confirm1(): void {
    this.message = 'Confirmed!';
    this.confirmModal.hide();
  }

  decline1(): void {
    this.message = 'Declined!';
    this.confirmModal.hide();
  }
}
