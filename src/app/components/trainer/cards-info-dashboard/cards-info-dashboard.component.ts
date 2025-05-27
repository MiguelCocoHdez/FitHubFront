import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cards-info-dashboard',
  imports: [],
  templateUrl: './cards-info-dashboard.component.html',
  styleUrl: './cards-info-dashboard.component.css'
})
export class CardsInfoDashboardComponent {

  @Input() titulo: string = ''
  @Input() valor: string | number = ''
  @Input() subtitulo: string = ''


}
