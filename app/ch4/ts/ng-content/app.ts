import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'fancy-button',
  template: '<button><ng-content></ng-content></button>'
})
class FancyButton { /* Extra behavior */ }

@Component({
  selector: 'panel',
  styles: [
    `.panel {
      width: auto;
      display: inline-block;
      border: 1px solid black;
    }
    .panel-title {
      border-bottom: 1px solid black;
      background-color: #eee;
    }
    .panel-content,
    .panel-title {
      padding: 5px;
    }`
  ],
  // select是ng-content的CSS选择器
  //  <div class="panel-title">对应的<panel-title>Sample title</panel-title>
  template: `
    <div class="panel">
      <div class="panel-title">
        <ng-content select="panel-title"></ng-content>
      </div>
      <div class="panel-content">
        <ng-content select="panel-content"></ng-content>
      </div>
    </div>`
})
class Panel { }

@Component({
  selector: 'app',
  template: `
    <fancy-button>
      <span>I will <i>be</i> projected</span>
    </fancy-button>
    <br>
    <panel>
     
      <panel-title>Sample title</panel-title>
      <panel-content>Content</panel-content>
    </panel>
  `,
  directives: [FancyButton, Panel]
})
class App {

}

bootstrap(App);
