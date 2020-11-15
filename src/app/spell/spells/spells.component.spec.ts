import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SpellsComponent } from './spells.component';

describe('SpellsComponent', () => {
  let component: SpellsComponent;
  let fixture: ComponentFixture<SpellsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsComponent);
    component = fixture.componentInstance;
    component.spells = [];
    component.spells.push({ id: '1', description: 'Test',
      group: '',
      level: 0,
      levelList: [],
      classes: [],
      creatureList: [],
      creatures: []
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('getSpellCreatures should return void', () => {
    expect(component.getSpellCreatures()).toBeUndefined();
  });
});
