import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private _http: HttpClient) { }

    ngOnInit(): void {
        // while(true) {
        //     this._http.get('https://yesno.wtf/api').subscribe(result => {
        //         console.log(result);
        //     });
        // }
    }
}
