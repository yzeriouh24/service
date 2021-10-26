import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { List } from '../list';
import { environment } from '../../../../environments/environment';
import { Service } from '../service';

export class EntityService<T> extends Service<T> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * @description Get one object from the server
   * @param id id of the object that is requested from the server
   */
  get(id: number): Observable<T> {
    return this.http.get<T>(`${environment.api.core}/${this.endpoint}/${id}`).pipe(
      first(),
      map((result: T) => this.serializer.fromJson(result)),
    );
  }

  /**
   * @description Fetches a list of objects from server
   * @returns [{count: number, data: List<T>}]
   */
  fetch(): Observable<List<T>> {
    return this.http.get<List<T>>(`${environment.api.core}/${this.endpoint}`).pipe(
      first(),
      map((result: List<T>) => {
        result.data = result.data.map(object => this.serializer.fromJson(object));
        return result;
      }),
    );
  }

  /**
   * @description Creates a new object
   * @returns [T]
   */
  create(data: Partial<T>): Observable<T> {
    return this.http.post<T>(`${environment.api.core}/${this.endpoint}`, this.serializer.toJson(data)).pipe(
      first(),
      map((result: T) => this.serializer.fromJson(result)),
    );
  }
}
