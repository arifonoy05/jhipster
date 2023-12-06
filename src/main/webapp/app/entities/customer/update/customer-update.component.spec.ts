import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { CustomerFormService } from './customer-form.service';
import { CustomerService } from '../service/customer.service';
import { ICustomer } from '../customer.model';
import { IProductType } from 'app/entities/product-type/product-type.model';
import { ProductTypeService } from 'app/entities/product-type/service/product-type.service';

import { CustomerUpdateComponent } from './customer-update.component';

describe('Customer Management Update Component', () => {
  let comp: CustomerUpdateComponent;
  let fixture: ComponentFixture<CustomerUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let customerFormService: CustomerFormService;
  let customerService: CustomerService;
  let productTypeService: ProductTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [CustomerUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(CustomerUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(CustomerUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    customerFormService = TestBed.inject(CustomerFormService);
    customerService = TestBed.inject(CustomerService);
    productTypeService = TestBed.inject(ProductTypeService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call ProductType query and add missing value', () => {
      const customer: ICustomer = { id: 456 };
      const productType: IProductType = { id: 73310 };
      customer.productType = productType;

      const productTypeCollection: IProductType[] = [{ id: 36759 }];
      jest.spyOn(productTypeService, 'query').mockReturnValue(of(new HttpResponse({ body: productTypeCollection })));
      const additionalProductTypes = [productType];
      const expectedCollection: IProductType[] = [...additionalProductTypes, ...productTypeCollection];
      jest.spyOn(productTypeService, 'addProductTypeToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ customer });
      comp.ngOnInit();

      expect(productTypeService.query).toHaveBeenCalled();
      expect(productTypeService.addProductTypeToCollectionIfMissing).toHaveBeenCalledWith(
        productTypeCollection,
        ...additionalProductTypes.map(expect.objectContaining)
      );
      expect(comp.productTypesSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const customer: ICustomer = { id: 456 };
      const productType: IProductType = { id: 85857 };
      customer.productType = productType;

      activatedRoute.data = of({ customer });
      comp.ngOnInit();

      expect(comp.productTypesSharedCollection).toContain(productType);
      expect(comp.customer).toEqual(customer);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ICustomer>>();
      const customer = { id: 123 };
      jest.spyOn(customerFormService, 'getCustomer').mockReturnValue(customer);
      jest.spyOn(customerService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ customer });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: customer }));
      saveSubject.complete();

      // THEN
      expect(customerFormService.getCustomer).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(customerService.update).toHaveBeenCalledWith(expect.objectContaining(customer));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ICustomer>>();
      const customer = { id: 123 };
      jest.spyOn(customerFormService, 'getCustomer').mockReturnValue({ id: null });
      jest.spyOn(customerService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ customer: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: customer }));
      saveSubject.complete();

      // THEN
      expect(customerFormService.getCustomer).toHaveBeenCalled();
      expect(customerService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ICustomer>>();
      const customer = { id: 123 };
      jest.spyOn(customerService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ customer });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(customerService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareProductType', () => {
      it('Should forward to productTypeService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(productTypeService, 'compareProductType');
        comp.compareProductType(entity, entity2);
        expect(productTypeService.compareProductType).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
