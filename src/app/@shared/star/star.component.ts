import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  public values: number[] = [1,2,3,4,5];

  @Input() rating: number = 3;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {}

  public onClick(value: number) {
    console.log('The clicked value is', value);
    this.ratingChange.emit(value);
  }

}
