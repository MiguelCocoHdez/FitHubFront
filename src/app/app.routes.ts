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
                path: 'client',
                loadComponent: () => import('./pages/login/registro-client/registro-client.component').then(m => m.RegistroClientComponent)
            },
            {
                path: 'trainer/suscripcion',
                loadComponent: () => import('./pages/login/eleccion-suscripcion/eleccion-suscripcion.component').then(m => m.EleccionSuscripcionComponent)         
            }
        ],
    },
    {
        path: 'login',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/login/login-page/login-page.component').then(m => m.LoginPageComponent)
            }
        ]
    },
    {
        path: 'suscripcion',
        children: [
            {
                path: 'success',
                loadComponent: () => import('./pages/login/suscripcion-success/suscripcion-success.component').then(m => m.SuscripcionSuccessComponent)
            }
        ]
    },
    {
        path: 'trainer',
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/trainer/dashboard-trainer/dashboard-trainer.component').then(m => m.DashboardTrainerComponent)
            }
        ]
    },
    {
        path: 'client',
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/client/dashboard-client/dashboard-client.component').then(m => m.DashboardClientComponent)
            }
        ]
    }
];