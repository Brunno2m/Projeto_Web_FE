import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RecomendacoesComponent } from './pages/recomendacoes/recomendacoes.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { CorollaComponent } from './pages/corolla/corolla.component';
import { LandroverComponent } from './pages/landrover/landrover.component';
import { CronosComponent } from './pages/cronos/cronos.component';
import { SealComponent } from './pages/seal/seal.component';
import { TcrossComponent } from './pages/tcross/tcross.component';
import { HondafitComponent } from './pages/hondafit/hondafit.component';
import { ClientesComponent } from './pages/clientes/clientes.component';


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

    {
        path: 'landrover',
        title: 'LandRoverAnalise',
        component: LandroverComponent
    },

    {
        path: 'cronos',
        title: 'FiatCronosAnalise',
        component: CronosComponent
    },

    {
        path: 'seal',
        title: 'BYDSealAnalise',
        component: SealComponent
    },

    {
        path: 'tCross',
        title: 'TCrossAnalise',
        component: TcrossComponent
    },

    {
        path: 'fit',
        title: 'HondaFitAnalise',
        component: HondafitComponent
    },

    {
        path: 'clientes',
        title: 'Clientes',
        component: ClientesComponent
    }
];
