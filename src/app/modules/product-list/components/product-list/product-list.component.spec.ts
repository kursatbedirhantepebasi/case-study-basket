import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { createReducer, StoreModule } from '@ngrx/store';
import { Product } from '../../../../shared/models/product.model';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

export const mockProductList: Product[] = [
  { name: 'product1', price: 15, productId: 'product1Id', quantity: 1 },
  { name: 'product2', price: 20, productId: 'product2Id', quantity: 1 },
  { name: 'product3', price: 30, productId: 'product3Id', quantity: 1 },
  { name: 'product4', price: 40, productId: 'product4Id', quantity: 1 },
  { name: 'product5', price: 50, productId: 'product5Id', quantity: 1 },
];

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement: DebugElement;

  //for this error = "Some of your tests did a full page reload!"
  beforeAll(() => {
    window.onbeforeunload = jasmine.createSpy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [
        StoreModule.forRoot({
          list: createReducer(mockProductList),
          basketProductList: createReducer([]),
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should to be Product List', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('Product List');
  });

  it('table rows length should to be true', () => {
    const rowHtmlElements = debugElement.nativeElement.querySelectorAll('tbody tr');
    expect(rowHtmlElements.length).toBe(5);
  });

  it('should call addProduct function when clicked add button', () => {
    spyOn(component, 'addProduct').and.callThrough();

    const button = debugElement.nativeElement.querySelectorAll('tbody tr td button')[0];
    button.click();

    expect(component.addProduct).toHaveBeenCalledWith({
      name: 'product1',
      price: 15,
      productId: 'product1Id',
      quantity: 1,
    } as Product);
  });
});
