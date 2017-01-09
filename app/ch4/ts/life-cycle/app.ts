import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'panel',
  inputs: ['title', 'caption'],
  template: '<ng-content></ng-content>'
})
class Panel {
  // 组件输入属性值发生改变（首次调用一定会发生在 ngOnInit之前。）
  ngOnChanges(changes) {
    console.log('On changes', changes);
  }
  // 组件初始化完成（在第一轮 ngOnChanges 完成之后调用。 ( 译注：也就是说当每个输入属性的值都被触发了一次 ngOnChanges 之后才会调用 ngOnInit ，此时所有输入属性都已经有了正确的初始绑定值 )）
  ngOnInit() {
    console.log('Initialized');
    console.warn('OnChanges和DoCheck钩子不要同时出现，互斥！。本例仅供学习');
  }
  // 脏值检测器被调用后调用
  ngDoCheck() {
    console.log('Do check');
  }
  // 组件销毁之前
  ngOnDestroy() {
    console.log('Destroy');
  }
  // 组件-内容-初始化完成 PS：指的是ContentChild或者Contentchildren
  ngAfterContentInit() {
    console.log('After content init');
  }
  // 组件内容脏检查完成
  ngAfterContentChecked() {
    console.log('After content checked');
  }
  // 组件视图初始化完成 PS：指的是ViewChild或者ViewChildren
  ngAfterViewInit() {
    console.log('After view init');
  }
  // 组件视图脏检查完成之后
  ngAfterViewChecked() {
    console.log('After view checked');
  }
}

@Component({
  selector: 'app',
  template: `
    <button (click)="toggle()">Toggle</button>
    <div *ngIf="counter % 2 == 0">
      <panel caption="Sample caption" title="Sample">Hello world!</panel>
    </div>
  `,
  directives: [Panel]
})
class App {
  counter: number = 0;
  toggle() {
    this.counter += 1;
  }
}

bootstrap(App);
