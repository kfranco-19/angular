import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class PersonaService {

  /* -------------------------------------------------------------------------------------------------------------- */
  private serviceURL = 'http://localhost:8585/persona';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  /* -------------------------------------------------------------------------------------------------------------- */

  constructor(private httpClient: HttpClient) {
  }

  /* -------------------------------------------------------------------------------------------------------------- */

  public personaList(params: any): Observable<any> {
    let url: string = this.serviceURL + '/all';

    return this.httpClient
      .get(url, {headers: this.httpHeaders, params: params});
  }

  /* -------------------------------------------------------------------------------------------------------------- */
}
