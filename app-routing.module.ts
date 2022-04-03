import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddonComponent } from './user-addon/user-addon.component';
import { UserAddondisplayComponent } from './user-addondisplay/user-addondisplay.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';



const routes: Routes = [
  { path: 'user-addon', component: UserAddonComponent},
  { path: 'user-addondisplay', component: UserAddondisplayComponent},
 { path: 'user-display', component: UserDisplayComponent} ,
 { path: 'viewdetails', component:ViewdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



