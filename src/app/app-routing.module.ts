import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Fellow } from "./components/fellowship";
import { Towers } from "./components/towers";
import { Return } from "./components/return";

const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "./components/fellowship", component: Fellow },
	{ path: "./components/tower", component: Towers },
	{ path: "./components/return", component: Return },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
