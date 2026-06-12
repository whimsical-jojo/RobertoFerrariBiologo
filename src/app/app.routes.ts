import { Routes } from '@angular/router';
import { Vita } from './pages/vita/vita';
import { Research } from './pages/research/research';
import { HomePage } from './pages/home-page/home-page';
import { Videos } from './pages/videos/videos';
import { Publications } from './pages/publications/publications';

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
    },
    {
        path: 'video',
        component: Videos
    },
    {
        path: 'pubblicazioni',
        component: Publications
    }
];
