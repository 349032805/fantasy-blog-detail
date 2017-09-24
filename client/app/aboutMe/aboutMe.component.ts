import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/ParentService';

@Component({
  selector: 'app-aboutMe',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.less']
})
export class AboutMe implements OnInit {

  constructor(private parentService: ParentService) { }

  ngOnInit() {
    this.parentService.flagMession('aboutMe');
  }
}
