import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'animals/:id',
    loadChildren: () =>
      import('./pages/animal-detail/animal-detail.module')
        .then( m => m.AnimalDetailPageModule)
  },
  {
    path: 'animals',
    loadChildren: () =>
      import('./pages/animal-list/animal-list.module')
        .then( m => m.AnimalListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
