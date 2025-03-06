import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EngineRemap } from '../models/engine-remap.models';

@Injectable({
  providedIn: 'root',
})
export class EngineRemapService {
  private apiUrl = 'https://heph.api.local/api/engine-remap';

  constructor(private http: HttpClient) {}

  getFirstEngineRemap() {
    let test = this.http.get<EngineRemap>(this.apiUrl);
    console.log('ma requete : ', test);
    return this.http.get<EngineRemap>(this.apiUrl);
  }
}
