import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { AllService } from '../services/all.service';
import { ParentService } from '../services/ParentService';

@Component({
  selector: 'app-leaveMessage',
  templateUrl: './leaveMessage.component.html',
  styleUrls: ['./leaveMessage.component.less']
})
export class LeaveMessage implements OnInit {
  // message = {
  //   content: '',
  //   createTime: 0,
  //   response: '',
  //   responseTime: 0
  // }

  messageList = [];
  message = {
    content: '',
    createTime: 0
  }

  constructor(private allService: AllService,
    private http: Http,
    private router: Router,
    private parentService: ParentService) { }

  ngOnInit() {
    //获取所有留言和回复(暂时不做分页)
    this.getAllMessages();
    this.parentService.flagMession('leaveMessage');
  }

  getAllMessages() {
    this.allService.getAllMessages().subscribe(
      data => this.messageList = data
    );
  }

  handleSubmit() {
    if (this.message.content == "") {
      alert("尽在不言中??");
      return;
    }
    this.allService.countMessagesByIP().subscribe(
      data => {
        if (data._body >= 5) {
          alert("留言太频繁,请明天再留吧 ~")
        } else {
          this.submitMessage();
        }
      }
    );
  }

  submitMessage() {
    this.message.createTime = new Date().getTime();
    this.allService.addMessage(this.message).subscribe(
      res => {
        this.message.content = "";
        this.getAllMessages();
      },
      error => console.log(error)
    );
  }

}
