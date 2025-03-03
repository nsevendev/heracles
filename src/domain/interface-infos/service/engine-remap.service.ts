import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EngineRemap } from '../models/interface-infos.models';

@Injectable({
  providedIn: 'root',
})
export class EngineRemapService {
  private apiUrl = 'https://heph.api.local/api/engine-remap';

  constructor(private http: HttpClient) {}

  getFirstEngineRemap(): Observable<EngineRemap> {
    return this.http.get<EngineRemap>(this.apiUrl);
  }
}
