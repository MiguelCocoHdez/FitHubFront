import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'register',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/login/eleccion-rol/eleccion-rol.component').then(m => m.EleccionRolComponent)
            },
            {
                path: 'trainer',
                loadComponent: () => import('./pages/login/registro-trainer/registro-trainer.component').then(m => m.RegistroTrainerComponent),
            },
            {
                path: 'trainer/suscripcion',
                loadComponent: () => import('./pages/login/eleccion-suscripcion/eleccion-suscripcion.component').then(m => m.EleccionSuscripcionComponent)         
            }
        ]
    }
];