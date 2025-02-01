import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('App Routing', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideRouter(routes, withComponentInputBinding())]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to public home page (`/`)', async () => {
    await router.navigate(['']);
    expect(location.path()).toBe('');
  });

  it('should navigate to dashboard (`/dashboard`)', async () => {
    await router.navigate(['/dashboard']);
    expect(location.path()).toBe('/dashboard');
  });

  it('should navigate to internal error page (`/500`)', async () => {
    await router.navigate(['/500']);
    expect(location.path()).toBe('/500');
  });

  it('should navigate to not found page (`/random-path` -> `/**`)', async () => {
    await router.navigate(['/random-path']);
    expect(location.path()).toBe('/random-path');
  });
});
