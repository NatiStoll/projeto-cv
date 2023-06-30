import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InfoComponent } from './components/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidewayTitleinfoComponent } from './components/sideway-titleinfo/sideway-titleinfo.component';
import { SidewayTitleComponent } from './components/info/sideway-title/sideway-title.component';
import { ContentComponent } from './components/info/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    InfoComponent,
    SidewayTitleinfoComponent,
    SidewayTitleComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
