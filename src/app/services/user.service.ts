import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private userName = 'admin';
  private password = 'admin';
  validateLogin(obj): Observable<any> {
    if(obj.userName == this.userName && obj.password == this.password){
      return of(true);
    }else{
      return of(false);
    }
  }

}
