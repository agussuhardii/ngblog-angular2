import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent  implements OnInit {

  article:any;

  constructor(private service:PostService) { }

  ngOnInit() {
    this.getArticle();
  }


  getArticle() {
    let result: Observable<Response> = this.service.gets();
    return result.subscribe(
      (data)=> {
        this.article = data
        //console.log(this.article);
      },
      (err)=> {
        console.log(err)
      },
      ()=> {
      }
    );
  }
}
