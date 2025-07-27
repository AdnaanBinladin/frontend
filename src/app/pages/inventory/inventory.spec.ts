import { Inventory } from './inventory';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

describe('Inventory', () => {
  let inventory: Inventory;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    const http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    inventory = new Inventory(http);
  });

  it('should fetch products on init', () => {
    const mockData = [{ name: 'Tuna', status: 'low', quantity: 5 }];
    inventory.ngOnInit();

    const req = httpMock.expectOne('https://your-api-url.com/api/inventory');
    req.flush(mockData);

    expect(inventory.products).toEqual(mockData);
    httpMock.verify();
  });

  it('should filter products correctly', () => {
    inventory.products = [
      { name: 'Salmon' },
      { name: 'Tuna' },
      { name: 'Sardine' }
    ];
    inventory.searchQuery = 'tun';
    const result = inventory.filteredProducts;

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Tuna');
  });
});
