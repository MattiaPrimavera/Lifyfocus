import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Menu } from '../../app/models/menu-entry';

/**
 * Generated class for the MpSlidingItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mp-sliding-item',
  templateUrl: 'mp-sliding-item.html'
})
export class MpSlidingItemComponent {
  @Input() item: any;
  @Input() menu: Menu;
  @Output('itemClick') onClick = new EventEmitter();
  @Output('optionClick') onOptionClick = new EventEmitter();

  onItemClicked(item) {
    this.onClick.emit(item);
  }

  onOptionClicked(optionId, item) {
    this.onOptionClick.emit({optionId, item});
  }
}
