import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertNotePage } from './upsert-note.page';

describe('UpsertNotePage', () => {
  let component: UpsertNotePage;
  let fixture: ComponentFixture<UpsertNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsertNotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
