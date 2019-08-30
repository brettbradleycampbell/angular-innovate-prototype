import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';
//
import { FlexLayoutModule } from '@angular/flex-layout';
//
import { DragDropModule } from '@angular/cdk/drag-drop';


//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';


// My Components
import { QuestionsComponent } from './questions/questions.component';
import { QuestionGroupsComponent } from './question-groups/question-groups.component';
import { QuestionSettingsComponent } from './question-settings/question-settings.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateDesignComponent } from './create-design/create-design.component';
import { CreateSettingsComponent } from './create-settings/create-settings.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { ShareComponent } from './share/share.component';
import { ResultsComponent } from './results/results.component';
import { ThemesComponent } from './themes/themes.component';
import { LibraryComponent } from './library/library.component';
import { DialogImageComponent } from './dialog-image/dialog-image.component';
import { DialogLogicComponent } from './dialog-logic/dialog-logic.component';
import { DialogLibraryComponent } from './dialog-library/dialog-library.component';
import { QuestionTypeComponent } from './question-type/question-type.component';
import { ImagesComponent } from './images/images.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyQuestionsComponent } from './survey-questions/survey-questions.component';
import { SurveyAnswersComponent } from './survey-answers/survey-answers.component';
import { ResultsSummaryComponent } from './results-summary/results-summary.component';
import { ResultsResponsesComponent } from './results-responses/results-responses.component';
import { ResultsReportsComponent } from './results-reports/results-reports.component';
import { ResultsReportNewComponent } from './results-report-new/results-report-new.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionGroupsComponent,
    QuestionSettingsComponent,
    CreateComponent,
    DashboardComponent,
    CreateDesignComponent,
    CreateSettingsComponent,
    CreateContentComponent,
    ShareComponent,
    ResultsComponent,
    ThemesComponent,
    LibraryComponent,
    DialogImageComponent,
    DialogLogicComponent,
    DialogLibraryComponent,
    QuestionTypeComponent,
    ImagesComponent,
    SurveyComponent,
    SurveyQuestionsComponent,
    SurveyAnswersComponent,
    ResultsSummaryComponent,
    ResultsResponsesComponent,
    ResultsReportsComponent,
    ResultsReportNewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    //
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
    //
    AppRoutingModule,
    //
    ReactiveFormsModule,
    //
    FlexLayoutModule,
    //
    DragDropModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogImageComponent,
    DialogLogicComponent,
    DialogLibraryComponent,
  ]

})

export class AppModule { }
