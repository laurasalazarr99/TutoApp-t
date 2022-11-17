import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardpruebaComponent } from './dashboardprueba.component';

describe('DashboardpruebaComponent', () => {
  let component: DashboardpruebaComponent;
  let fixture: ComponentFixture<DashboardpruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardpruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
