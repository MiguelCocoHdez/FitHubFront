import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../services/trainerService/trainer.service';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";
import { Client } from '../../../services/clientService/client.service';
import { CardsClientesComponent } from "../../../components/trainer/cards-clientes/cards-clientes.component";

@Component({
  selector: 'app-pagina-clientes',
  imports: [SidebarDashboardTrainerComponent, CardsClientesComponent],
  templateUrl: './pagina-clientes.component.html',
  styleUrl: './pagina-clientes.component.css'
})
export class PaginaClientesComponent implements OnInit {

  trainer!: Trainer
  clientes!: Client[]

  ngOnInit(): void {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}')

    if(this.trainer.clientes.length > 0) {
      this.clientes = this.trainer.clientes
    }
    else {
      this.clientes = []
    }

    console.log(this.clientes)
  }
}
