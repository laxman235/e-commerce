import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule] // important for ngModel
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty email and password by default', () => {
    expect(component.email).toBe('');
    expect(component.password).toBe('');
  });

  it('should update email and password when input changes', () => {
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;

    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));

    passwordInput.value = '123456';
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.email).toBe('test@example.com');
    expect(component.password).toBe('123456');
  });

  it('should call login method on form submit', () => {
    spyOn(component, 'login');

    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));

    expect(component.login).toHaveBeenCalled();
  });
});
