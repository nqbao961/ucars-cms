import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CarBrand } from './models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const brands = [
      {
        id: 1,
        logo: 'data:image/png;base64,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',
        name: 'Toyota',
        status: true,
        description:
          'HttpClient is Angular`s mechanism for communicating with a remote server over HTTP.',
        numberOfModels: 1200,
        updateAt: 1659241673379,
      },
      {
        id: 2,
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAcCAYAAAB8pKH7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZsSURBVHgB7VpfTptHEJ/ZDygNrXFPEOcEMZUa4vSh5gRxT4BzAsxDpdSOhCPFJFIfYk4QcwLICeI8pIRWKuQEcU7QDygtMv52OrPGxja7axts8+KfZGx29pud3dnZ+bMfAuObvadpFQSrSJSW/wGxpiPaPkltVsCD2MfCG0TIWkg11NFKmHpVgymuDYzv/5ohUDs2IpFeP374smyjxfeeJkgFn63PIVSOH5SewBQ3gmLFbLiIiG6axsBJU1H0HKa4MRR/kh56fP6vwt0rjWw1juPMWM30OBsNFCBUPfTa2felL72NU6uZDBSe0zp/166SMETQ672tU6uZHGbCHzcPecFXNAUZDPAnaeRA4IuiqGxdaIVJUYKN2dRqpphiitsHxj/kk1pBxkZUoKph6kXVRovt5YvgwHFq00lrwSS+FCRhBu63GwlC0vQpAF0d1nfFD3Jx/d9CtotfRF808/on9apq+gwx1/j+s4zW2hrJKg274g665qKCx8DuwJUXLnz4JRngXLpLPouMnZhhqZKo0Bp9sXDyVbXRXM9coGhrNAvYuLOGWuVYE3HTSFf4clMAi38Uqrqht04evdwFDwzP+sIG1SGHQQ8/5hVAsLG4XzAVC24ZeK5aRxlUatXWNwKq8dehKCVQwRv+nWiOp+T5LuWYPgFHtwRp23w7ZdSanndWZRRMCKaiUF84QI3FtmJ84MmoQO3E/sxv9OUJkOvDTaoZB5w2JGFEELlYMe+gpRhfn5Zi/EgohW8W9/M7suGkYSLKuSj1eCfigigztl94baMNyTNOiGswAqgA15qbzDPYXj7br48dmJGTwIwDEwAvotTuEnBNiGVIDbCz7cKiEnAboP4WSMq3ETBsfhxUme/es/TYlSM7CLwlIiOkONcaeMA1wC7r4V2Zhb4Q3+BehDHDOmckWD9afvGdfNgP3nPJp1Fnxq4cUuqxh8yOurF0tFySzz1ecF8Sm5DdJD/EyYLPargkJRM/Wt68d7kIfuWPEvGDotOnaoR2rVIiUtR6XZL63g9HRn/PwPiRdhFYGU86Q2YOZYux3wshby/r5FAMHkzYmwY3akcPSiudDTIGL9gS1RufBwpGBkONIthSRFVQc127P1wqhov7z0LbWHJkcWSWYQVUuRLz9rxxfnia+q1iG2CsyjGBgGcxbDnU8aNSGfqCEnChqCsU0lvWsXjBYh/z2ziaoMCE5keP3LkYab3lSTcSfLxlEVRWzcyBKJKQdkVZJ8uXqcPEQmkLanBNoAoWXTQij4/hJBdGAE6Ut/slyZKIsyxbMBjHuCiLT4QdtqrPsqml9TaVc+3jhXR05KIhjuzYco8/4MY6fvgih5qe9LmW6YVJOyTX8R9rAd61NTePqwEwPx9C/dxFNRd5vfdF8xe7xs7uLAyXyuyTPGFoMwAp22m4ChNG2Mz4KyaxrH+T1qTTLMd9vl9JevxfQp/dyXmVw6aWYUU87zVhuWxDGEAwcYxchnFlyHPnkDsDaN8Z+d5LEERnd+S9hArfrR+SSwAeS3Kg4x8225Ffq8QDE8qLvpWcTHcvfHQmfxtwknrVrmZI9EmKLss/HZCNxMrRVTYR1zhxMbEYLzBF0XtpkLd0BixHGFBE73kga3+JXJh3XHjjjLpLfXKXwMjKmJ/bhXrjtWvnSWbOZ3eW6axEDKmOGYTxH3eX4wPX5QKrlbLiwpbTl4Ao9rFQdV1ezohV8EQkCXQlis3IQgVNBgOdZ5dQ83NlDmHXnAvZ4q39fJBoq2XBJvLaK7xFBb5jKsFPiezDC31DKAgqHKWu2mni9PO7pOGTuA2Zv5UJQs0EBNxhG8YEWUhJtOBmqMFX/xY7G9T8bO4Ws38vTIrgDQLYkjnMdiqGIe8NGuWED0tlNsXBFYRwCENAnGKf7N+H5guKEgh08hSlN/TKUApCrMKEgLOzPwMMt07tZ1kXcnXQDqXDVCk7SFwuxwvOnq7AkJDsnxUkz9UGfcaMNXe65Mop5MJLyj/9eWIoNS2M9NhOiF7I5pGy1MWmrA36nPQXXZjfvUSJmDSqXDPck0zcdAuJ6L0itdvK6jkKe+caoLd8cmUMc8tIbNrmVrDD14kVEFsKvuXbrq7bxn6QAmuzjmdkTnbxgoZ5K0jG5UzcWiHASBLLy4suueltvfByta8soP2G2C6bpAcq3S1fC1KcVYcSOKmvTyudJ8T/YqYae6rST9oAAAAASUVORK5CYII=',
        name: 'Honda',
        status: false,
        description:
          'HttpClient is Angular`s mechanism for communicating with a remote server over HTTP.',
        numberOfModels: 1200,
        updateAt: 1659241673379,
      },
      {
        id: 3,
        logo: 'data:image/png;base64,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',
        name: 'Yamaha',
        status: true,
        description:
          'HttpClient is Angular`s mechanism for communicating with a remote server over HTTP.',
        numberOfModels: 1200,
        updateAt: 1659241673379,
      },
      {
        id: 4,
        logo: 'data:image/png;base64,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',
        name: 'Ucars',
        status: true,
        description:
          'HttpClient is Angular`s mechanism for communicating with a remote server over HTTP.',
        numberOfModels: 1200,
        updateAt: 1659241673379,
      },
      {
        id: 5,
        logo: 'data:image/png;base64,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',
        name: 'VinFast',
        status: false,
        description:
          'HttpClient is Angular`s mechanism for communicating with a remote server over HTTP.',
        updateAt: 1659241673379,
      },
    ];
    return { brands };
  }

  genId(brands: CarBrand[]): number {
    return brands.length > 0
      ? Math.max(...brands.map((brand) => brand.id)) + 1
      : 5;
  }
}