import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SidebarDashboardTrainerComponent } from "../../../components/trainer/sidebar-dashboard-trainer/sidebar-dashboard-trainer.component";
import { Trainer, TrainerService } from '../../../services/trainerService/trainer.service';
import { Router } from '@angular/router';
import { CardsInfoDashboardComponent } from "../../../components/trainer/cards-info-dashboard/cards-info-dashboard.component";

@Component({
  selector: 'app-dashboard-trainer',
  imports: [SidebarDashboardTrainerComponent, CardsInfoDashboardComponent],
  templateUrl: './dashboard-trainer.component.html',
  styleUrl: './dashboard-trainer.component.css'
})
export class DashboardTrainerComponent implements OnInit {

  constructor(private trainerService: TrainerService, private router: Router, private cdr: ChangeDetectorRef) {}

  trainer!: Trainer
  
  ngOnInit(): void {
    const token = localStorage.getItem('token')

    if(token) {
      this.trainerService.verTrainer(token).subscribe({
        next: (trainer) => {
          this.trainer = trainer
          console.log('Trainer obtenido:', this.trainer)
          
          this.cdr.detectChanges()
        },
        error: (error) => {
          console.error('Error al obtener el trainer:', error)
        }
      })
    }
    else {
      this.router.navigate(['/register'])
    }
  }
}
