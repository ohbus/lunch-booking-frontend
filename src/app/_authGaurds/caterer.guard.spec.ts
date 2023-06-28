import { TestBed } from '@angular/core/testing';

import { CatererGuard } from './caterer.guard';

describe ('CatererGuard', () => {
  let guard: CatererGuard;

  beforeEach (() => {
    TestBed.configureTestingModule ({});
    guard = TestBed.inject (CatererGuard);
  });

  it ('should be created', () => {
    expect (guard).toBeTruthy ();
  });
});
