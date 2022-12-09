import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ButtonComponent } from './components/atoms/button/button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';

import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { TasksComponent } from './components/organisms/tasks/tasks.component';
import { TaskComponent } from './components/molecules/task/task.component';
import { AddTaskComponent } from './components/molecules/add-task/add-task.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    ClickedOutsideDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    PickerModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
