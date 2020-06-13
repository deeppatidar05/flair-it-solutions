import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private url: string = 'http://ec2-54-254-230-94.ap-southeast-1.compute.amazonaws.com:8080/p4f/v1/';

  constructor(private _http: HttpClient) { }

  public getTypeDesc(type:string){
    if(type =='university'){
      return 'University Discussion';
    }else if(type =='subject'){
      return 'Subject Discussion';
    }else if(type =='specific-enquiries'){
      return 'Specific Enquiries';
    }else if(type =='self'){
      return 'Self Introduction';
    }
    return '';
  }
  public addPost(req) {
    let user: any = JSON.parse(localStorage.getItem("userdata"));
    let payload = 'createdBy=' + user.id + '&title=' + req.title + '&type=' + req.type + '&description=' + req.question;

    return this._http.get(this.url + 'addPost?' + payload);
  }

  public deletePost(id) {
    return this._http.get(this.url + 'deletePost?id=' + id);
  }

  public getPost(postID: number){
    return this._http.get(this.url + 'posts?id=' + postID).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public getPosts(type:string){
    return this._http.get(this.url + 'posts?type=' + type).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }

  public addMessage(req) {
    let user: any = JSON.parse(localStorage.getItem("userdata"));
    let payload = 'sender=' + user.id + '&post=' + req.post + '&type=' + req.type + '&message=' + req.message;
    return this._http.get(this.url + 'addMessage?' + payload);

  }

  public getMessages(postid: number){
    return this._http.get(this.url + 'messages?post=' + postid).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
  public deleteMessage(id) {
    return this._http.get(this.url + 'deleteMessage?id=' + id);
  }
}
