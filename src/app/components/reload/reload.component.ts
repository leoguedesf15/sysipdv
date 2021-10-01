import { HttpParams } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-reload',
  template: '<div></div>',
})
export class ReloadComponent implements OnInit, AfterViewInit {

  constructor(private activatedRoute:ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
   
    
  }
  ngAfterViewInit(){
    this.activatedRoute.queryParamMap.subscribe((p:any)=>this.router.navigate([p.params.redirect]));
  }

}
