// 从angular模块的core模块引入@Component装饰器
import {Component} from '@angular/core';
// 从browser模块引入bootstrap启动函数
import {bootstrap} from '@angular/platform-browser-dynamic';
// ng2引导应用通过bootstrap类实例化，AppComponent的@Component的selector属性选择dom进行渲染
@Component({
  selector: 'app',
  // 模版html
  // 还可以直接template: 'Hello {{name}}'
  templateUrl: './app.html'
//   还可以有样式 例如
//   styles: ['.primary {color: red}']
// styleUrls: ['my-component.css']
})
// 定义一个类 叫 App
class App {
  target:string;
  //类的构造函数会在所有其它生命周期钩子之前调用。使用它来 - 注入依赖 - ，但是要避免用它做较重的工作。
  constructor() {
    this.target = 'world';
  }
}
// 启动APP
bootstrap(App);

