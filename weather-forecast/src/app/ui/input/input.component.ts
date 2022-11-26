import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() inputEvent = new EventEmitter<{ text: string }>()
  searchText: string;
  textUpdate = new Subject<string>();

  constructor() {
    this.textUpdate.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(value => {
        this.onChangeInput();
      })
  }

  ngOnInit() {
  }

  onChangeInput() {
    this.inputEvent.emit({ text: this.searchText });
  }
}
