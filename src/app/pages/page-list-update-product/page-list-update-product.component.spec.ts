import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListUpdateProductComponent } from './page-list-update-product.component';

describe('PageListUpdateProductComponent', () => {
  let component: PageListUpdateProductComponent;
  let fixture: ComponentFixture<PageListUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListUpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
