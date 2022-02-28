import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular'
import {USER_LOGIN, USER_REGISTER} from "../graphql";

const AUTH_API = 'http://localhost:8000/graphql';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private apollo: Apollo) {
  }

  login(username: string, password: string) {
    this.apollo.mutate({
      mutation: USER_LOGIN,
      errorPolicy: 'all',
      variables: {
        username: username,
        password: password,
      }
    }).subscribe()
  }

  register(username: string, email:string, password: string) {
    this.apollo.mutate({
      mutation: USER_REGISTER,
      errorPolicy: 'all',
      variables: {
        username: username,
        email: email,
        password: password,
      }
    }).subscribe()
  }
}
