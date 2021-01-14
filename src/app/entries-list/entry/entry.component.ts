import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Entry} from '../../models/entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryComponent  {
  @Input() public entry: Entry;
}
