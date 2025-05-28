import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, ClientService } from '../../../services/clientService/client.service';
import { SidebarDashboardClientComponent } from "../../../components/client/sidebar-dashboard-client/sidebar-dashboard-client.component";

@Component({
  selector: 'app-dashboard-client',
  imports: [SidebarDashboardClientComponent],
  templateUrl: './dashboard-client.component.html',
  styleUrl: './dashboard-client.component.css'
})
export class DashboardClientComponent implements OnInit {

  constructor(private router: Router, private clientService: ClientService, private cdr: ChangeDetectorRef) {}

  client!: Client

  ngOnInit(): void {
    const token = localStorage.getItem('token')

    if (token) {
      this.clientService.verClient(token).subscribe({
        next: (client) => {
          this.client = client

          localStorage.setItem('client', JSON.stringify(client))

          console.log('Client obtenido:', client)
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error al obtener el cliente:', error)
        }
      });
    } else {
      this.router.navigate(['/login'])
    }
  }
}
