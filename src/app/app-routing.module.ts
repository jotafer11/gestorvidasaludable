import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGvsComponent } from './list-gvs/list-gvs.component'
import { CreateEGvsComponent } from './create-e-gvs/create-e-gvs.component'
import { EditEGvsComponent } from './edit-e-gvs/edit-e-gvs.component'

const routes: Routes = [
	
	{
		component:ListGvsComponent,
		path:'list'
	},

	{
		component:CreateEGvsComponent,
		path:'create'
	},

	{
		component:EditEGvsComponent,
		path:'edit'
	},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
