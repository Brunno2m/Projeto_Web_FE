import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RecomendacoesComponent } from './pages/recomendacoes/recomendacoes.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { CorollaComponent } from './pages/corolla/corolla.component';


export const routes: Routes = [ // Criação dos paths para que seja possível realizar o roteamento entre as páginas do angular
    {
        path: 'servicos',
        title: 'Serviços',
        component: ServicosComponent
    },

    {
        path: 'veiculos',
        title: 'Veiculos',
        component: VeiculosComponent
    },

    {
        path: '',
        title:'Home',
        component:MainComponent
    },

    {
        path: 'avaliacoes',
        title: 'Avaliações',
        component: RecomendacoesComponent
    },

    {
        path: 'corolla',
        title: 'CorollaCrossAnalise',
        component: CorollaComponent
    },
];
