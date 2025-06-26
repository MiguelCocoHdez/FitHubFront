import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../services/trainerService/trainer.service';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";

@Component({
  selector: 'app-pagina-clientes',
  imports: [SidebarDashboardTrainerComponent],
  templateUrl: './pagina-clientes.component.html',
  styleUrl: './pagina-clientes.component.css'
})
export class PaginaClientesComponent implements OnInit {

  trainer!: Trainer

  ngOnInit(): void {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}')

    console.log(this.trainer)
  }
}
