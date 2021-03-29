import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { PersonComponent } from './person/person.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { ImageComponent } from './image/image.component';
import { RefDemoComponent } from './ref-demo/ref-demo.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    PersonComponent,
    AddFruitComponent,
    VersionParentComponent,
    VersionChildComponent,
    ImageComponent,
    RefDemoComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
