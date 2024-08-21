import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Fellow } from "./details/fellowship";
import { Towers } from "./details/towers";
import { Return } from "./details/return";
import { Home } from "./main/home";
import { DetailsLayoutComponent } from "./details/details-layout.component";

const routes: Routes = [
	{
		path: "",
		component: Home,
	},
	{
		path: "details",
		component: DetailsLayoutComponent,
		children: [
			{ path: "fellowship", component: Fellow },
			{ path: "towers", component: Towers },
			{ path: "return", component: Return },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
