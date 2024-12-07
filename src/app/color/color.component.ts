import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  standalone: false,
  
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {

  color ='red';


}
