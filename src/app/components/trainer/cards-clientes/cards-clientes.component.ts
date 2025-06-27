import { Component, Input } from '@angular/core';
import { Client } from '../../../services/clientService/client.service';

@Component({
  selector: 'app-cards-clientes',
  imports: [],
  templateUrl: './cards-clientes.component.html',
  styleUrl: './cards-clientes.component.css'
})
export class CardsClientesComponent {

  @Input() cliente!: Client
}
