import { TestBed } from '@angular/core/testing';

import { TeleportService } from './teleport.service';

describe('TeleportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeleportService = TestBed.get(TeleportService);
    expect(service).toBeTruthy();
  });
});
