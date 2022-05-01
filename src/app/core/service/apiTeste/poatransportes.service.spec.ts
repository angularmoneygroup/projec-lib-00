/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoatransportesService } from './poatransportes.service';

describe('Service: Poatransportes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoatransportesService]
    });
  });

  it('should ...', inject([PoatransportesService], (service: PoatransportesService) => {
    expect(service).toBeTruthy();
  }));
});
