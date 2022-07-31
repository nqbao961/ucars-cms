import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarBrand } from 'src/app/services/models';

@Component({
  selector: 'app-brands-content',
  templateUrl: './brands-content.component.html',
  styleUrls: ['./brands-content.component.scss'],
})
export class BrandsContentComponent implements OnInit {
  @Input() brands: CarBrand[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDetails(id: number) {
    this.router.navigate(['car-brands', id]);
  }
}
