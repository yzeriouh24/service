import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../shared/state/service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthData } from './auth-data';
import { User } from '../user/user';
import { Observable } from 'rxjs';

interface Test {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestService extends Service<Test> {
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = 'tests';
  }
}
