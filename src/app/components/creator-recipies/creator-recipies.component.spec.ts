import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorRecipiesComponent } from './creator-recipies.component';

describe('CreatorRecipiesComponent', () => {
  let component: CreatorRecipiesComponent;
  let fixture: ComponentFixture<CreatorRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorRecipiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
