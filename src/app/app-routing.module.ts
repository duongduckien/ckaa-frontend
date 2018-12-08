import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
