import { Component, OnInit, Input } from '@angular/core';
import { UserService, LoaderService } from '../../../../wa-front-angular';

@Component({
  selector: 'app-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss']
})
export class JsonTreeComponent implements OnInit {
  @Input() item: any;
  @Input() key = '';
  loop: string[];
  expanded = false;
  constructor() {}
  ngOnInit() {}
  itemType() {
    let itemType: string = typeof this.item;
    if (['number', 'string', 'boolean'].indexOf(itemType) > -1) {
      return 'single';
    } else {
      this.loop = Object.keys(this.item);
      return 'object';
    }
  }
}
