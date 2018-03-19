import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConfirmModelComponent } from './confirm-model/confirm-model.component';
import {ModalModule} from "ngx-bootstrap";
import { ModalComponent } from './modal/modal.component';
import {BootstrapModalModule} from "ng2-bootstrap-modal";
import { Ng2AlertComponent } from './ng2-alert/ng2-alert.component';
import { Ng2PromptComponent } from './ng2-prompt/ng2-prompt.component';
import { Ng2confirmComponent } from './ng2confirm/ng2confirm.component';
import { Ng2DialogComponent } from './ng2-dialog/ng2-dialog.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ConfirmModelComponent,
    ModalComponent,
    Ng2AlertComponent,
    Ng2PromptComponent,
    Ng2confirmComponent,
    Ng2DialogComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    BootstrapModalModule.forRoot({container: document.body}),
    FormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    Ng2AlertComponent,
    Ng2PromptComponent,
    Ng2confirmComponent,
    Ng2DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
