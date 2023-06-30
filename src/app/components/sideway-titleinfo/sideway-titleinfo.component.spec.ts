import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewayTitleinfoComponent } from './sideway-titleinfo.component';

describe('SidewayTitleinfoComponent', () => {
  let component: SidewayTitleinfoComponent;
  let fixture: ComponentFixture<SidewayTitleinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidewayTitleinfoComponent]
    });
    fixture = TestBed.createComponent(SidewayTitleinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
