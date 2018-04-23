import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTopicComponent } from './navbar-topic.component';

describe('NavbarTopicComponent', () => {
  let component: NavbarTopicComponent;
  let fixture: ComponentFixture<NavbarTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
