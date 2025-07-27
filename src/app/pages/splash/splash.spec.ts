import { ComponentFixture, TestBed } from '@angular/core/testing';

import { splash } from './splash';

describe('splash', () => {
  let component: splash;
  let fixture: ComponentFixture<splash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [splash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(splash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
