import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'' , component: MainComponent},
  {path:'about' , component: AboutComponent},
  {path:'portfolio' , component: PortfolioComponent},
  {path:'contact' , component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
