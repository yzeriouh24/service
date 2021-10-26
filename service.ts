import { HttpClient } from '@angular/common/http';
import { Serializer } from './serializer';

export class Service<T> {

  endpoint!: string;
  serializer!: Serializer<T>;

  constructor(protected http: HttpClient) {
  }
}
