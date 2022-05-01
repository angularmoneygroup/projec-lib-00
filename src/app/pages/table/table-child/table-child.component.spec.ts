/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableChildComponent } from './table-child.component';

describe('TableChildComponent', () => {
  let component: TableChildComponent;
  let fixture: ComponentFixture<TableChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
