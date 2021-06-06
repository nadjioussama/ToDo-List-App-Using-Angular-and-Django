import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCategoryComponent } from './share-category.component';

describe('ShareCategoryComponent', () => {
  let component: ShareCategoryComponent;
  let fixture: ComponentFixture<ShareCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
