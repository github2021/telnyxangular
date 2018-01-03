import { TestBed, inject } from '@angular/core/testing';

import { RestfulApiService } from './restful-api.service';

describe('RestfulApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestfulApiService]
    });
  });

  // it('should be created', inject([RestfulApiService], (service: RestfulApiService) => {
  //   expect(service).toBeTruthy();
  // }));
});
