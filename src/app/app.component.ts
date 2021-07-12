import { Component } from '@angular/core';


// Here basically we have only one import statement for creating components 

// COMPONENTS are basically smallest UI element which is reusable and a mix of static and dynamic Content 
// In simple words components are basically cutom HTML tags



// This is a decorator that enhances a class
//basically ye batata hai ki ye ek normal class nhi hai ek component hai
@Component({
  // This is the name of the component
  selector: 'app-root',
  // This is basically the html file of the component
  templateUrl: './app.component.html',
  // and this is its style sheet
  styleUrls: ['./app.component.css']
})
// here we are exporting the component with an argument name
export class AppComponent {

}
