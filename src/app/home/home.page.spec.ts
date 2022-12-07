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
    const dataService = jasmine.createSpyObj('log', ['data']);
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContent).toContain('User');
  })
});

// .htaccess start

// Options -MultiViews

// RewriteEngine On

// RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-f

// RewriteRule ^ index.html [QSA,L]

// <FilesMatch "\.(html?|txt|css|js|php|pl)$">

//     SetOutputFilter DEFLATE

//  </FilesMatch>

// # php -- BEGIN cPanel-generated handler, do not edit
// # Set the “ea-php74” package as the default “PHP” programming language.
// <IfModule mime_module>
//   AddHandler application/x-httpd-ea-php74 .php .php7 .phtml
// </IfModule>
// # php -- END cPanel-generated handler, do not edit

// .htaccess end
