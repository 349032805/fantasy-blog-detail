import { Component, OnInit,enableProdMode } from '@angular/core';
import { startFloat } from '../static/bubble.js';
import { Router } from '@angular/router';

import { AllService } from './services/all.service';
import { ParentService } from './services/ParentService';

// 浏览器控制台出现错误提示,只会在dev环境出现,pro环境不会出现.
// 加入这个就可以去掉提示.但是不建议这么做
// import { enableProdMode } from '@angular/core';
// enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  child;

  webConfig = {
    mainDomainName: '',
    detailDomainName: '',
    adminDomainName: ''
  };

  constructor(public parentService: ParentService,
    private allService: AllService,
    private router: Router) { }

  ngOnInit() {
    startFloat();

    this.parentService.flag$.subscribe(mission => {
      this.child = mission;
    });
    //获取主站域名
    this.getMainDomainName();
  }

  getMainDomainName() {
    this.allService.getMainDomainName().subscribe(
      data => this.webConfig = data
    );
  }

  goHome() {
    let url = this.webConfig.mainDomainName + '/#/blogs';
    window.location.href = url;
  }

  gotoLeaveMessage() {
    this.router.navigate(['/leaveMessage']);
  }

  gotoAboutMe() {
    this.router.navigate(['/aboutMe']);
  }

}
