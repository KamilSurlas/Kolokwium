import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MouseResponseDto } from '../models/mouse-response.interface';
import { MouseRequestDto } from '../models/mouse-request.interface';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  private apiurl: string = 'http://localhost:5150/api/mouses/';
  constructor(private httpClient:HttpClient) { }
  public get():Observable<MouseResponseDto[]>{
    return this.httpClient.get<MouseResponseDto[]>(this.apiurl);
  }
  public delete(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiurl + id);
  }
  public post(body: MouseRequestDto): Observable<void> {
    return this.httpClient.post<void>(this.apiurl, body);
  }
}
