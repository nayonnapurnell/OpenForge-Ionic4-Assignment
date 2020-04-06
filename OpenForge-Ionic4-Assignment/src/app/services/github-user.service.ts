import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  name = 'monalisa octocat',
  avatar_url = 'https://github.com/images/error/octocat_happy.gif',
}

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {
  url = 'https://api.github.com/users?since=135';
  apiKey = ''; // <-- Enter your own key here!
 
  constructor(private http: HttpClient) { }

  searchData(login: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(login)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
