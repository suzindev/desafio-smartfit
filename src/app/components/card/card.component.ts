import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  card!: Location;
}
