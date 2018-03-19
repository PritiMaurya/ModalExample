import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef;
  // for animation
  // config = {
  //   animated: true
  // };
  // to close modal by keyboard esc key
  // config = {
  //   keyboard: true
  // };
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  openModal(template){
    this.modalRef = this.modalService.show(template);
  }
}
