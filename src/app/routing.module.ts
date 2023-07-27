import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project.component';
import { ProjectResolve } from './services/project.resolve';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    resolve: {
      ready: ProjectResolve,
    },
  },
  {
    path: '**',
    redirectTo: '/', // make 404
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableBlocking for SSR
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
