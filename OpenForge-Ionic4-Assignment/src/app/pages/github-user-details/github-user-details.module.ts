import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GithubUserDetailsPage } from './github-user-details.page';

const routes: Routes = [
  {
    path: '',
    component: GithubUserDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GithubUserDetailsPage]
})
export class GithubUserDetailsPageModule {}
