import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowcaseComponent } from './showcase.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShowcaseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ 
          RouterTestingModule,
          FormsModule,
          BrowserAnimationsModule,
          AutoCompleteModule
        ],
        declarations: [ ShowcaseComponent ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ShowcaseComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
