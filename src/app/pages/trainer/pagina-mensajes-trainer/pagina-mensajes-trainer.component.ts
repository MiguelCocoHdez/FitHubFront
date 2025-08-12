import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../../services/trainerService/trainer.service';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";

@Component({
  selector: 'app-pagina-mensajes-trainer',
  imports: [SidebarDashboardTrainerComponent],
  templateUrl: './pagina-mensajes-trainer.component.html',
  styleUrl: './pagina-mensajes-trainer.component.css'
})
export class PaginaMensajesTrainerComponent implements OnInit {

  trainer!: Trainer

  constructor() {}

  ngOnInit(): void {
    this.trainer = JSON.parse(localStorage.getItem('trainer') || '{}')
  }

}
