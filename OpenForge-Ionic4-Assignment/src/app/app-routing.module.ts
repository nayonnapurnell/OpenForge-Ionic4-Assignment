import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'github-users', pathMatch: 'full' },
  { path: 'github-users', loadChildren: './pages/github-users/github-users.module#GithubUsersPageModule' },
  { path: 'github-user-details', loadChildren: './pages/github-user-details/github-user-details.module#GithubUserDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
