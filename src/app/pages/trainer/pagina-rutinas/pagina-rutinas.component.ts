import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../services/trainerService/trainer.service';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";

@Component({
  selector: 'app-pagina-rutinas',
  imports: [SidebarDashboardTrainerComponent],
  templateUrl: './pagina-rutinas.component.html',
  styleUrl: './pagina-rutinas.component.css'
})
export class PaginaRutinasComponent implements OnInit {

  trainer!: Trainer

  ngOnInit(): void {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}');
  }
}
