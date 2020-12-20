import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { createReducer, StoreModule } from '@ngrx/store';
import { Product } from '../../../../shared/models/product.model';
import { BasketComponent } from './basket.component';

export const mockBasketList: Product[] = [
  { name: 'product1', price: 15, productId: 'product1Id', quantity: 5 },
  { name: 'product2', price: 20, productId: 'product2Id', quantity: 7 },
  { name: 'product3', price: 30, productId: 'product3Id', quantity: 9 },
  { name: 'product4', price: 40, productId: 'product4Id', quantity: 11 },
];

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;
  let debugElement: DebugElement;

  //for this error = "Some of your tests did a full page reload!"
  beforeAll(() => {
    window.onbeforeunload = jasmine.createSpy();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        StoreModule.forRoot({
          basketProductList: createReducer(mockBasketList),
        }),
        ReactiveFormsModule,
      ],
    });

    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should to be Basket', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('Basket');
  });

  it('table rows length should to be true', () => {
    const rowHtmlElements = debugElement.nativeElement.querySelectorAll('tbody tr');
    expect(rowHtmlElements.length).toBe(4);
  });

  it('first input value should to be true', () => {
    expect(component.productsFormArray.controls[0].value).toBe(5);
  });

  it('forms should to be invalid when quantity is lower than 1', () => {
    component.productsFormArray.controls[0].setValue(0);
    expect(component.form.invalid).toBeTruthy();
  });

  it('should call deleteProduct function when clicked delete button', () => {
    spyOn(component, 'deleteProduct').and.callThrough();

    const button = debugElement.nativeElement.querySelectorAll('tbody tr td button')[0];
    button.click();

    expect(component.deleteProduct).toHaveBeenCalledWith({
      name: 'product1',
      price: 15,
      productId: 'product1Id',
      quantity: 5,
    } as Product);
  });
});
