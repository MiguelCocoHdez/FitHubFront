import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../services/trainerService/trainer.service';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";

@Component({
  selector: 'app-solicitudes-clientes',
  imports: [SidebarDashboardTrainerComponent],
  templateUrl: './solicitudes-clientes.component.html',
  styleUrl: './solicitudes-clientes.component.css'
})
export class SolicitudesClientesComponent implements OnInit {

  trainer!: Trainer

  ngOnInit(): void {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}')

    console.log(this.trainer)
  }
}
