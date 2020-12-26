import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "src/app/about/about.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponentComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path:"article",
    component:ArticleComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
