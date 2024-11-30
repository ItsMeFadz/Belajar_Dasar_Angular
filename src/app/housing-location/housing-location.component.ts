import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
  <img
    class="listing-photo"
    [src]="housingLocation.photo"
    alt="Exterior photo of {{ housingLocation.name }}"
    crossorigin
  />
  <h2 class="listing-heading">{{ housingLocation.name }}</h2>
  <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
  <!-- Gunakan routerLink untuk navigasi -->
  <a [routerLink]="['/details', housingLocation.id]">Detail Lokasi</a>
</section>
`,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;
}

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
