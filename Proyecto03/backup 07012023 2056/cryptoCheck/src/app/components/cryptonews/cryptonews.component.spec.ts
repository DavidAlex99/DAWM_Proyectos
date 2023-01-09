import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptonewsComponent } from './cryptonews.component';

describe('CryptonewsComponent', () => {
  let component: CryptonewsComponent;
  let fixture: ComponentFixture<CryptonewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptonewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptonewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
