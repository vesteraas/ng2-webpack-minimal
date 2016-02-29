import {
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    TestComponentBuilder,
} from 'angular2/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import {provide} from "angular2/core";

// Load the implementations that should be tested
import {AppComponent} from './app';

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        AppComponent,
    ]);


    it('Should work', injectAsync([TestComponentBuilder], (tcb) => {

        return tcb.createAsync(AppComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;

            console.log(compiled.innerHTML);
        });
    }));
});