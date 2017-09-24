import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { SharedModule } from './shared.module';

import { AboutMe } from './aboutMe/aboutMe.component';
import { LeaveMessage } from './leaveMessage/leaveMessage.component';
import { BlogDetailComponent } from './blogDetail/blogDetail.component';
import { AllService } from './services/all.service';

import { TranslatePipe } from './utils/translate';

import { ParentService } from './services/ParentService';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutMe,
    LeaveMessage,
    BlogDetailComponent,
    TranslatePipe
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
    AllService,
    ParentService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
