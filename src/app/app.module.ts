import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Start Services
import { LoadScriptsService } from "./load-scripts.service";
// End Services

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGvsComponent } from './list-gvs/list-gvs.component';
import { CreateEGvsComponent } from './create-e-gvs/create-e-gvs.component';
import { EditEGvsComponent } from './edit-e-gvs/edit-e-gvs.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { L1GvsComponent } from './l1-gvs/l1-gvs.component';
import { L2GvsComponent } from './l2-gvs/l2-gvs.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    ListGvsComponent,
    CreateEGvsComponent,
    EditEGvsComponent,
    L1GvsComponent,
    L2GvsComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
  LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
