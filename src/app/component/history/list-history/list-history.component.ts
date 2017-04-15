import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../../service/history.service";
import {Observable} from "rxjs";
import {Response} from "@angular/http";

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css']
})
export class ListHistoryComponent implements OnInit {
  currentUser:string = localStorage.getItem("currentUser");

  history:any;

  constructor(
    private service: HistoryService
  ) { }

  ngOnInit() {
    this.gets();
  }


  gets(){
    let result: Observable<Response> = this.service.gets(this.currentUser);
    return result.subscribe(
      (data)=> {this.history = data;
      },
      (err)=> {},
      ()=>{}
    )
  }


}
