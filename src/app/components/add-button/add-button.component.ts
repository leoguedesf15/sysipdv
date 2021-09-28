import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Output('addButton') addButton:EventEmitter<boolean>;
  
  constructor() { 
    this.addButton = new EventEmitter<boolean>();
  }
  
  addClick(ev){
    this.addButton.emit(ev);
  }

  ngOnInit(): void {
  }

}
