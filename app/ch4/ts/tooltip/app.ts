import { HostListener, Input, Injectable, ElementRef, Inject, Directive, Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

class Overlay {
  private el: HTMLElement;
  constructor() {
    var el = document.createElement('div');
    el.className = 'tooltip';
    this.el = el;
  }
  close() {
    this.el.hidden = true;
  }
  open(el, text) {
    this.el.innerHTML = text;
    this.el.hidden = false;
    var rect = el.nativeElement.getBoundingClientRect();
    this.el.style.left = rect.left + 'px';
    this.el.style.top = rect.top + 'px';
  }
  attach(target) {
    target.appendChild(this.el);
  }
  detach() {
    this.el.parentNode.removeChild(this.el);
  }
}

class OverlayMock {
  constructor() { }
  close() { }
  open(el, text) { }
  attach(target) { }
  detach() { }
}

@Directive({
  selector: '[saTooltip]'
})
export class Tooltip {
  @Input() saTooltip: string;

  constructor(private el: ElementRef, private overlay: Overlay) {
    this.overlay.attach(el.nativeElement);
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.overlay.open(this.el, this.saTooltip);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.overlay.close();
  }
}

@Component({
  selector: 'app',
  templateUrl: './app.html',
  // providers:一个数组，包括在对前模块及导入当前模块的模块中的内容物（组件、指令、管道、提供商等）可见的依赖注入提供商。
  providers: [Overlay],
  // directives : 一个数组 ， 包含内部和下级用到的所有指令 可以避免命名冲突，终于可以不啥名字都带个前缀了
  directives: [Tooltip]
})
class App { }

bootstrap(App);
