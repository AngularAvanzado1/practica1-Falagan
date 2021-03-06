import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UiModule } from '@world-bank/ui';
import { HomeModule } from './home/home.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ModalsModule} from "./services/modals/modals-templates/modals.module";
import {ServiceWorkerModule} from "@angular/service-worker";


describe('GIVEN: an AppComponent declared in AppModule', () => {
  describe('WHEN: the AppModule is compiled', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
          RouterTestingModule,
          UiModule,
          HomeModule,
          ModalsModule,
          HttpClientTestingModule,
          ServiceWorkerModule.register('', {enabled: false})
        ]
      }).compileComponents();
    }));
    it('THEN: should create the component', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
    it(`THEN: should have a property title with value 'World Bank App'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.headerData.title).toEqual('World Bank App');
    });
    it(`THEN: should have a property subTitle with value 'Informer Section'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.headerData.subTitle).toEqual('Informer Section');
    });
  });
});
