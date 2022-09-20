import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktestdisComponent } from './booktestdis.component';

describe('BooktestdisComponent', () => {
  let component: BooktestdisComponent;
  let fixture: ComponentFixture<BooktestdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktestdisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktestdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
