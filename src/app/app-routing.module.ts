import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
    // Add your component here

// This is my case
const routes: Routes = [

     {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
