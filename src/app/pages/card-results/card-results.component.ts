import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-results',
  templateUrl: './card-results.component.html',
  styleUrls: ['./card-results.component.css']
})
export class CardResultsComponent implements OnInit {
  imageToShow : any
  sanitizer : DomSanitizer
  constructor(private http : HttpClient) { 
    
    http.get('http://localhost:8080/images/1').subscribe(
    )
  }

//   createImageFromBlob(image: Blob) {
//     let reader = new FileReader();
//     reader.addEventListener("load", () => {
//        this.imageToShow = reader.result;
//       console.log(this.imageToShow);
//     }, false);
 
//     if (image) {
//        reader.readAsDataURL(image);
//     }
//  }

  ngOnInit() {
  }

}
