import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntriesService} from '../entries.service';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public query: FormControl;

  private querySubscription: Subscription;

  constructor(private entriesService: EntriesService) {
    this.query =  new FormControl('');
  }


  public ngOnInit(): void {
    this.entriesService.updateEntries('');
    this.querySubscription = this.query.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((query: string) => {
        this.entriesService.updateEntries(query);
    });
  }

  public ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
