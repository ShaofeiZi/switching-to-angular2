import {Component,  ViewChildren, ContentChildren, QueryList} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'user-badge',
  template: '<h2>View child</h2>'
})
class UserBadge {}

@Component({
  selector: 'user-rating',
  template: '<h2>Content child</h2>'
})
class UserRating {}

@Component({
  selector: 'user-panel',
  template: '<user-badge></user-badge>',
  directives: [UserBadge]
})
class UserPanel {
  // 视图子节点 组件模板自身里面使用的
  @ViewChildren(UserBadge)
  viewChildren: QueryList<UserBadge>;
  // 内容子节点 组件内嵌的标签
  @ContentChildren(UserRating)
  contentChildren: QueryList<UserRating>;

  ngAfterViewInit() {
    // view children are initialized
  }

  ngAfterContentInit() {
    // content children are initialized
  }
}


@Component({
  selector: 'app',
  template: '<user-panel><user-rating></user-rating></user-panel>',
  directives: [UserPanel, UserRating]
})
class App {
  // constructor() {}
}

bootstrap(App);

