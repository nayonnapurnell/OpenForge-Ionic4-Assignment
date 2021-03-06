import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';

import { GithubUsersPage } from './github-users.page';

const routes: Routes = [
  {
    path: '',
    component: GithubUsersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GithubUsersPage]
})
export class GithubUsersPageModule {}
