import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-content',
  templateUrl: './brands-content.component.html',
  styleUrls: ['./brands-content.component.scss'],
})
export class BrandsContentComponent implements OnInit {
  today = Date.now();

  constructor() {}

  ngOnInit(): void {}
}
