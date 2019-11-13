import { TestBed } from '@angular/core/testing';

import { NgxbUiService } from './ngxb-ui.service';

describe('NgxbUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxbUiService = TestBed.get(NgxbUiService);
    expect(service).toBeTruthy();
  });
});
