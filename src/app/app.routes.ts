import { Routes } from '@angular/router';
import { IngresosComponent } from './paginas/ingresos/ingresos.component';
import { GastosComponent } from './paginas/gastos/gastos.component';

export const routes: Routes = [
    {path: 'ingresos', component: IngresosComponent},
    {path:'gastos', component:GastosComponent}
];
