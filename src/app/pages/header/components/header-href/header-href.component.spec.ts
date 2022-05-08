import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHrefComponent } from './header-href.component';

describe('HeaderHrefComponent', () => {
  let component: HeaderHrefComponent;
  let fixture: ComponentFixture<HeaderHrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
