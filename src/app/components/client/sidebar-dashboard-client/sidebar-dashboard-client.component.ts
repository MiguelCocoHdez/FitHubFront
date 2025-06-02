import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../services/clientService/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-dashboard-client',
  imports: [CommonModule],
  templateUrl: './sidebar-dashboard-client.component.html',
  styleUrl: './sidebar-dashboard-client.component.css'
})
export class SidebarDashboardClientComponent implements OnInit {

  constructor(private router: Router) {}

  @Input() client!: Client

  rutaActual!: string;

  ngOnInit(): void {
    this.rutaActual = this.router.url;
  }

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  botonLogout(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  irADashboard(): void {
    this.router.navigate(['/client/dashboard'])
  }

  irABuscarTrainer(): void {
    this.router.navigate(['/client/buscar-trainer']);
  }
}
