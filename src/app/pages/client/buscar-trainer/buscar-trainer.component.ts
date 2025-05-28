import { Component, OnInit } from '@angular/core';
import { Client } from '../../../services/clientService/client.service';
import { SidebarDashboardClientComponent } from "../../../components/client/sidebar-dashboard-client/sidebar-dashboard-client.component";

@Component({
  selector: 'app-buscar-trainer',
  imports: [SidebarDashboardClientComponent],
  templateUrl: './buscar-trainer.component.html',
  styleUrl: './buscar-trainer.component.css'
})
export class BuscarTrainerComponent implements OnInit {

  client!: Client

  constructor() { }

  ngOnInit(): void {
    this.client = JSON.parse(localStorage.getItem('client') || '{}')
  }

}
