import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { WorldBankService } from './world-bank.service';

describe('WorldBankService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: WorldBankService = TestBed.get(WorldBankService);
    expect(service).toBeTruthy();
  });
});
