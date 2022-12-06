import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be title', () => {
    expect(component.title).toBe('Vishal');
  })

  it('should be sum', () => {
    expect(component.sum(40,60)).toBe(100);
  })

  it('should be testing html', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain('User');
  })
});
