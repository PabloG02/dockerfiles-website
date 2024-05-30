import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/pages/landing/landing.component';
import { SearchListComponent } from './search-list/search-list.component';
import { OntologyEditorComponent } from './ontology-editor/ontology-editor.component';
import { ContainerComponent } from './features/containers/container/container.component';
import { TutorialComponent } from './features/tutorials/pages/tutorial/tutorial.component';
import { TutorialsLandingComponent } from './features/tutorials/pages/tutorials-landing/tutorials-landing.component';
import { SearchGuidedComponent } from './features/containers/pages/search-guided/search-guided.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Bioinformatics Docker Images Project',
        component: LandingComponent,
    },
    {
        path: 'about',
        title: 'Bioinformatics Docker Images Project',
        component: LandingComponent,
    },
    {
        path: 'search',
        component: SearchGuidedComponent,
    },
    {
        path: 'containers',
        component: SearchListComponent,
    },
    {
        path: 'container/:name',
        component: ContainerComponent,
    },
    {
        path: 'tutorials',
        component: TutorialsLandingComponent,
    },
    {
        path: 'tutorials/:name',
        component: TutorialComponent,
    },
    {
        path: 'edit-ontology',
        component: OntologyEditorComponent,
    },
];
