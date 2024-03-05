import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { MessagesComponent } from '@shared/component/messages/messages.component';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, RouterModule],
  exports: [
    CommonModule,
    FormsModule,
    MessagesComponent,
    RouterModule,
    ButtonModule,
  ],
  declarations: [MessagesComponent],
})
export class SharedModule {}
