import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `<h1>Tx Services</h1>
  <button routerLink="/forma" type="button" class="btn btn-outline-success"> FORMA</button>`,

styles: [
    `


      h1 {
        margin: auto;
        width: 20%;
        border: 2px solid green;
        padding: 10px;
        text-align: center;
        background-color:#333333;
        color:white;
        border-radius:15px;
      }

      app-footer {
        align-self: center;
        margin-top: auto;
      }
      button{
        background-color: #00DA91;
        padding:30px;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        text-align: center;
        margin:auto;
        margin-top:250px;
        border-radius:20px;
        width:150px;


      }
    `,
  ],
})
export class HomeComponent {}





function myInterval(seconds: number): Observable<number> {
  return new Observable<number>((observer) => {
    let count = 0;

    const interval = setInterval(() => {
      observer.next(count);
      count++;
    }, seconds * 1000);

    return () => clearInterval(interval);
  });




}
