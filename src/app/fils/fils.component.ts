import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  standalone: false,
  
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent implements OnInit {
  @Input() filsProperty: string ='n';
  
  constructor() {}

  ngOnInit(): void {

    console.log(this.filsProperty);
    
  }
 
}
