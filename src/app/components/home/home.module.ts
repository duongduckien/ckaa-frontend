import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';
import { SliderComponent } from '../slider/slider.component';
import { AboutHomeComponent } from '../about-home/about-home.component';
import { LastestDesignsHomeComponent } from '../lastest-designs-home/lastest-designs-home.component';

@NgModule({
    declarations: [
        HomeComponent,
        SliderComponent,
        AboutHomeComponent,
        LastestDesignsHomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
