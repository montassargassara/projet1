import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule 
  ]
})
export class DefaultModule { }
