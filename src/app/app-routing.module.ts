// import { TaskPageComponent } from './modules/task/page/task-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginPageComponent } from '@modules/auth/page/login-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m=>m.AuthModule) // This is a lazy loading
  },
  {
    path: 'task',
    loadChildren: () => import('@modules/task/task.module').then(m=>m.TaskModule) // This is a lazy loading
  }
  // {
  //   path:'',
  //   component: LoginPageComponent
  // },
  // {
  //   path:'task',
  //   component: TaskPageComponent
  // },
  // {
  //   path: '**', // Routes that are not mapped
  //   // component: LoginPageComponent,
  //   redirectTo: '/task' // to redirect the page to the specified url
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
