import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

// ** PrimeNg Modules**/

import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {PanelModule, MessageService } from 'primeng/primeng';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {PasswordModule} from 'primeng/password';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    AccordionModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    CardModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    PanelModule,
    SidebarModule,
    ToolbarModule,
    CalendarModule,
    PasswordModule,
    InputSwitchModule,
    InputMaskModule,
    SplitButtonModule,
    DialogModule,
    TableModule,
    ConfirmDialogModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
