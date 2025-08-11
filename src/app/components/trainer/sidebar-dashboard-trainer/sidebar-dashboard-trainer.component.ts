import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from '../../../services/trainerService/trainer.service';

@Component({
  selector: 'app-sidebar-dashboard-trainer',
  imports: [CommonModule],
  templateUrl: './sidebar-dashboard-trainer.component.html',
  styleUrl: './sidebar-dashboard-trainer.component.css'
})
export class SidebarDashboardTrainerComponent implements OnInit {

  constructor(private router: Router) {}

  @Input() trainer!: Trainer

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
    this.router.navigate(['/trainer/dashboard'])
  }

  irAMisClientes(): void {
    this.router.navigate(['/trainer/mis-clientes'])
  }

  irASolicitudesClientes(): void {
    this.router.navigate(['/trainer/solicitudes-clientes'])
  }

  irARutinas(): void {
    this.router.navigate(['/trainer/rutinas'])
  }

  irAMensajes(): void {
    this.router.navigate(['/trainer/mensajes'])
  }
}
