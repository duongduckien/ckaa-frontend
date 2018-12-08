import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Modules
import { HomeModule } from './components/home/home.module';
import { ContactModule } from './components/contact/contact.module';
import { ProductsModule } from './components/products/products.module';
import { ProjectsModule } from './components/projects/projects.module';
import { AboutUsModule } from './components/about-us/about-us.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        ContactModule,
        ProductsModule,
        ProjectsModule,
        AboutUsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
