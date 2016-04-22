import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
 
@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class Socially { }
 
bootstrap(Socially);
