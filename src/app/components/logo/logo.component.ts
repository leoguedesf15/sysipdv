import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input('cssClass') class:string;
  constructor() { }

  ngOnInit(): void {
  }

}
