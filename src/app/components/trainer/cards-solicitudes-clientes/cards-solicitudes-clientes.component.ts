import { Component, Input } from '@angular/core';
import { Client } from '../../../services/clientService/client.service';

@Component({
  selector: 'app-cards-solicitudes-clientes',
  imports: [],
  templateUrl: './cards-solicitudes-clientes.component.html',
  styleUrl: './cards-solicitudes-clientes.component.css'
})
export class CardsSolicitudesClientesComponent {

  @Input() client!: Client
  @Input() mensaje!: string
}
