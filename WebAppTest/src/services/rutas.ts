import { HomeComponent } from '../app/home/home.component';
import { IndexComponent } from '../app/index/index.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from '../app/dashboard/dashboard.component';
import { SpecialComponent } from '../app/especiales/special.component';
import { SearchComponent } from '../app/search/search.component';
import { DetalleProductoComponent } from '../app/model/detalleProducto.component';
const rutas: Routes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        // declaración de la ruta Busqueda
        path: 'busqueda',
        component: SearchComponent
    },
    {
        path: 'whatsapp',
        component: DashBoardComponent
    },
    {
        path: 'especiales',
        component: SpecialComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleProductoComponent
    },
    {
        path: 'categoria/:id',
        component: DetalleProductoComponent
    },
    {
        path: 'categoria/all',
        component: DetalleProductoComponent
    },
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full',
    }
];

export const routing: ModuleWithProviders =  RouterModule.forRoot(rutas);
