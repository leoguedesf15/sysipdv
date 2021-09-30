import { TestBed } from '@angular/core/testing';

import { BodyTransformerInterceptor } from './body-transformer.interceptor';

describe('BodyTransformerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BodyTransformerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BodyTransformerInterceptor = TestBed.inject(BodyTransformerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
