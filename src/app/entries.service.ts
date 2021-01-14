import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Entry} from './models/entry.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  static baseUrl = 'https://api.publicapis.org/entries?';

  private readonly entriesSubject: BehaviorSubject<Entry[]>;

  constructor(private http: HttpClient) {
    this.entriesSubject = new BehaviorSubject<Entry[]>([]);
  }

  public get entries(): Observable<Entry[]> {
    return this.entriesSubject.asObservable();
  }

  public updateEntries(queries: string): void {
    this.http.get(EntriesService.baseUrl + queries).subscribe(
      (entries: { entries: Entry[] }) => {
        this.entriesSubject.next(entries.entries);
    });
  }
}
