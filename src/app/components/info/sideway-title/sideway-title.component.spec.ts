import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewayTitleComponent } from './sideway-title.component';

describe('SidewayTitleComponent', () => {
  let component: SidewayTitleComponent;
  let fixture: ComponentFixture<SidewayTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidewayTitleComponent]
    });
    fixture = TestBed.createComponent(SidewayTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
