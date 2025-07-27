import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductDetail } from './product-detail';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('ProductDetail', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;
  let httpMock: HttpTestingController;

  const mockProduct = {
    id: 1,
    name: 'Tilapia Tank A',
    description: 'Large fish tank with tilapia.',
    status: 'low',
    quantity: 150,
    fishTypes: [
      { type: 'Tilapia', kgs: 100, freshness: 'Fresh', status: 'in stock' },
      { type: 'Catfish', kgs: 50, freshness: 'Stale', status: 'low' }
    ]
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductDetail, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch product details and display them', () => {
    const req = httpMock.expectOne('https://your-api-url.com/api/products/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);

    fixture.detectChanges();

    const title = fixture.debugElement.query(By.css('mat-card-title')).nativeElement;
    expect(title.textContent).toContain('Tilapia Tank A');

    const quantity = fixture.debugElement.query(By.css('mat-card-content')).nativeElement;
    expect(quantity.textContent).toContain('150 kg');

    const fishList = fixture.debugElement.queryAll(By.css('mat-card-content p'));
    expect(fishList.length).toBeGreaterThan(1);
    expect(fishList[2].nativeElement.textContent).toContain('🐟 Tilapia');
    expect(fishList[3].nativeElement.textContent).toContain('🐟 Catfish');
  });

  it('should fallback gracefully on error', () => {
    const req = httpMock.expectOne('https://your-api-url.com/api/products/1');
    req.error(new ErrorEvent('Network error'));

    // No crash
    expect(component.product).toBeUndefined();
  });
});
