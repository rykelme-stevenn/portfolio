import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HelloComponent } from './view/hello/hello.component';
import { SocialMediasComponent } from './shared/social-medias/social-medias.component';
import { ProjectComponent } from './view/projects/projects.component';
import { JogoVelhaComponent } from './view/game/jogo-velha/jogo-velha.component';
import { CircleComponent } from './shared/circle/circle.component';
import { XComponent } from './shared/x/x.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CronometroComponent } from './view/game/cronometro/cronometro.component';
import { PresentationScreenComponent } from './view/presentation-screen/presentation-screen.component';
import { FooterComponent } from './view/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HelloComponent,
    SocialMediasComponent,
    ProjectComponent,
    JogoVelhaComponent,
    CircleComponent,
    XComponent,
    CronometroComponent,
    PresentationScreenComponent,
    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
