import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListUpdateDeleteProductComponent } from './page-list-update-delete-product.component';

describe('PageListUpdateDeleteProductComponent', () => {
  let component: PageListUpdateDeleteProductComponent;
  let fixture: ComponentFixture<PageListUpdateDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListUpdateDeleteProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListUpdateDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
