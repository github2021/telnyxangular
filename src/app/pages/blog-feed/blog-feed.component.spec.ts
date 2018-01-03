import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogFeedComponent } from './blog-feed.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { CdkTableModule } from '@angular/cdk/table'
import { MatButtonModule } from '@angular/material/button'
import {
  MatExpansionModule,
  MatInputModule,
  MatSortModule,
  MatSelectModule,
  MatListModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule
} from '@angular/material'

import { RestfulApiService } from '../../restful-api.service'

import { RouterTestingModule } from '@angular/router/testing'


describe('BlogFeedComponent', () => {
  let component: BlogFeedComponent;
  let fixture: ComponentFixture < BlogFeedComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [BlogFeedComponent],
        imports: [
          BrowserModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule,

          BrowserAnimationsModule,
          MatExpansionModule,
          MatInputModule,
          MatCardModule,
          MatTableModule,
          MatToolbarModule,
          MatSortModule,
          CdkTableModule,
          MatButtonModule,
          MatSelectModule,
          MatListModule,
          MatIconModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatSnackBarModule,

          RouterTestingModule,



        ],
        providers: [RestfulApiService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
