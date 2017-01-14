import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CompetitionComponent } from './competition/competition.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{path: 'home', component: HomeComponent},
	{path: 'competition/detail/:id', component: CompetitionComponent},

]


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})


export class AppRoutingModule { }


