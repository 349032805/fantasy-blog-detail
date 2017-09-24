import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from '@angular/common';

import { AllService } from '../services/all.service';

import { ParentService } from '../services/ParentService';

@Component({
  selector: 'app-blogDetail',
  templateUrl: './blogDetail.component.html',
  styleUrls: ['./blogDetail.component.less']
})
export class BlogDetailComponent implements OnInit {
  article = {
    title: '',
    updateTime: '',
    belong: '',
    scanNum: 0,
    content: '',
    evaluate: ''
  };

  constructor(private allService: AllService,
    private http: Http,
    private parentService: ParentService) { }

  ngOnInit() {
    this.getBlogDetail();
    //文章访问量加1
    this.addScanNum();

    this.parentService.flagMession('blogDetail');
  }

  getBlogDetail() {
    let id = this.getParamId();
    this.allService.getBlogDetail(id).subscribe(
      data => this.article = data
    );
  }

  addScanNum() {
    let id = this.getParamId();
    this.allService.addScanNumber(id).subscribe(
    );
  }

  getParamId() {
    let addressUrl = location.hash.split('?')[1];
    let searchParams = new URLSearchParams(addressUrl);
    let id = searchParams.get('id');
    console.log("id:" + id);
    return id;
  }
}

