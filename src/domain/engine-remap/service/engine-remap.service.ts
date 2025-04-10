import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EngineRemap } from '../models/engine-remap.models';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EngineRemapService {
  private apiUrl = 'https://heph.api.local/api/engine-remap';

  constructor(private http: HttpClient) {}

  getFirstEngineRemap() {
    return this.http.get<{ statusCode: number; data: any }>(this.apiUrl).pipe(
      map((response) => {
        if (response.statusCode === 200) {
          return {
            libelle: response.data.infoDescriptionModel.libelle,
            description: response.data.infoDescriptionModel.description,
          } as EngineRemap;
        } else {
          throw new Error('Réponse API invalide');
        }
      }),
      catchError((error) => {
        console.error('Erreur lors de la récupération des données:', error);
        return throwError(() => new Error('Erreur API'));
      })
    );
  }
}
