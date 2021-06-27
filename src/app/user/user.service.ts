import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, skip, tap } from 'rxjs/operators';
import { Credentials } from './models/credentials';
import { User } from './models/user';


const API_URL = `https://jsonplaceholder.typicode.com/users?`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private static readonly storageKey = 'user';
  private static readonly delay = 800;
  private userSubject: BehaviorSubject<User | null>;

  constructor(private http: HttpClient) {
    const storedUser = JSON.parse(
      localStorage.getItem(UserService.storageKey) || 'null'
    );
    this.userSubject = new BehaviorSubject<User | null>(storedUser);
    this.userSubject
      .pipe(
        skip(1), // skip first emission
        tap((user) =>
          localStorage.setItem(UserService.storageKey, JSON.stringify(user))
        )
      )
      .subscribe();
  }

  get user(): User | null {
    return this.userSubject.value;
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  login({ password, email }: Credentials): Observable<User> {
    let obs: Observable<User>;

    const params = new HttpParams().set('email', email);
    return this.http.get<any>(API_URL, {params}).pipe(
      () => {
        if (password === 'abcde') {
          obs = of({
            id: '5fc62fdb5eb04def08ac913a',
            username: 'JohnDoe',
          });
        } else {
          obs = throwError(new Error('invalid credential'));
        }
        return obs.pipe(tap((user) => this.userSubject.next(user)));
      }
    );
  }

  logout(): Observable<boolean> {
    return of(true).pipe(
      delay(UserService.delay),
      tap(() => this.userSubject.next(null))
    );
  }
}
