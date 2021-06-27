import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
})
export class CaseComponent implements OnInit {
  @HostBinding('attr.class') cssClass: string;

  @Input() color: string | null;
  @Output() colorChange = new EventEmitter();

  constructor() {
    this.cssClass = 'card';
    this.color = '';
  }

  ngOnInit(): void {}

  colorUpdate(): void {
    this.color = prompt('Enter a color');
    this.colorChange.emit(this.color);
  }
}
