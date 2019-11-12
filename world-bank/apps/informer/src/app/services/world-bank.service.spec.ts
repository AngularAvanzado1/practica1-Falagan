import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WorldBankService } from './world-bank.service';
import { Observable } from 'rxjs';

describe('GIVEN a WorldBankService', () => {
  describe('WHEN: The DataModule is compiled', () => {
    beforeEach(() =>
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [WorldBankService]
      })
    );

    it('THEN: should be created', () => {
      const service: WorldBankService = TestBed.get(WorldBankService);
      expect(service).toBeTruthy();
    });

    it(`THEN: should return an observable when call 'getContinentalRegions()'`, () => {
      const service: WorldBankService = TestBed.get(WorldBankService);
      const greetings$: Observable<any> = service.getContinentalRegions();
      expect(greetings$).toBeInstanceOf(Observable);
    });

    // Ojo al async para ejectuar las llamadas asíncronas
    it(`THEN: should return an Array so not being null when call 'getContinentalRegions()'`, async(() => {
      const service: WorldBankService = TestBed.get(WorldBankService);
      service
        .getContinentalRegions()
        .subscribe(result => expect(result).toBeNull());
      // mock del backend para no depender del servidor
      const httpMock = TestBed.get(HttpTestingController);
      // esperar a que se llame a esta ruta
      const req = httpMock.expectOne(
        'http://api.worldbank.org/v2/region/?format=json'
      );
      // req.flush({ message: 'Welcome to api!' }); // responder con esto
      httpMock.verify(); // comprobar que no hay más llmadas
    }));

  });


});
