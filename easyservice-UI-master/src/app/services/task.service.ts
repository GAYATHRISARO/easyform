import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _baseurl:string='http://localhost:9000/task-service/task'

  constructor(private _http:HttpClient) { }

  getAllTask():Observable<Task[]>{
    let url=this._baseurl+"/task"
    return this._http.get<Task[]>(url);
  }
  addTask(task: Task): Observable<Task> {
    let url = this._baseurl + '/task';
    const body = JSON.stringify(task);
    console.log(body);
    return this._http.post<Task>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }
}
