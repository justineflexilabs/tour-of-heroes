import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  /**
   *
   * @param messageService Angular only binds to public component properties.
   */
  constructor(public messageService: MessageService) {}
}
