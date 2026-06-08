import { Routes } from '@angular/router';
import { Vita } from './pages/vita/vita';
import { Research } from './pages/research/research';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'vita',
        component: Vita
    },
    {
        path: 'ricerche',
        component: Research
    }
];
