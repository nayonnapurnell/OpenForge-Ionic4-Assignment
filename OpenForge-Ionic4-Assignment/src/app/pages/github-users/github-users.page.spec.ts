import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersPage } from './github-users.page';

describe('GithubUsersPage', () => {
  let component: GithubUsersPage;
  let fixture: ComponentFixture<GithubUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
