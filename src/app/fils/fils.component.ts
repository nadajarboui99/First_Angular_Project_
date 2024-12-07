import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  standalone: false,
  
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent implements OnInit {
  @Input() filsProperty: string ='n';
  @Output() sendRequestToData = new EventEmitter() 
  constructor() {}

  ngOnInit(): void {

    console.log(this.filsProperty);
    
  }
  sendEvent(){
    this.sendRequestToData.emit(
     "please can i have some money :)"
    );
  }
 
}
