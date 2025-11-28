import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nintendo } from './nintendo';

describe('Nintendo', () => {
  let component: Nintendo;
  let fixture: ComponentFixture<Nintendo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nintendo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nintendo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
