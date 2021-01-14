import { Component, OnInit } from '@angular/core';
import {EntriesService} from '../entries.service';
import {Observable} from 'rxjs';
import {Entry} from '../models/entry.model';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss']
})
export class EntriesListComponent implements OnInit {
  public entries: Observable<Entry[]>;

  constructor(private entriesService: EntriesService) {}

  public ngOnInit(): void {
    this.entries = this.entriesService.entries;
  }

}
