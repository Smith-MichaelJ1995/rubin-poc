import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildContentComponent } from './build-content.component';

describe('BuildContentComponent', () => {
  let component: BuildContentComponent;
  let fixture: ComponentFixture<BuildContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
