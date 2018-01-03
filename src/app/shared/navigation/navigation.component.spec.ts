import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { MatCardModule } from '@angular/material/card'
import { RouterTestingModule } from '@angular/router/testing'

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture < NavigationComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [NavigationComponent],
        imports: [
          MatCardModule,
          RouterTestingModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`pages includes 'Home'`, async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const i = fixture.debugElement.componentInstance;
    expect(i.pages[0].title).toEqual('Home');
  }));

  it('has mat card', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card').innerHTML).toBeTruthy();
  }));


});
