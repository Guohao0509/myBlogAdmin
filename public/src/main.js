// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import http from '@/service/http';
import reload from '@/service/reload';
import highlight from '@/service/highlight';
import md5 from '@/service/md5';
import valid from '@/service/valid';
import dictionary from '@/service/dictionary';

Vue.use(http);
Vue.use(reload);
Vue.use(highlight);
Vue.use(md5);
Vue.use(valid);
Vue.use(dictionary);


Vue.config.productionTip = false;
/* eslint-disable no-new */
import {
    Aside,
    // B
    Badge, Button,Breadcrumb, BreadcrumbItem,
    // C
    Col, Container,
    // D
    Dialog, DatePicker,
    // F
    Footer, Form, FormItem,
    // H
    Header,
    // I
    Icon, Input,
    // L
    Loading,
    // M
    Main, Menu, MenuItem, MenuItemGroup, Message, MessageBox,
    
    // N
    Notification,
    // O
    Option,
    // P
    Pagination, Popover,
    // R
    Radio, RadioGroup, RadioButton, Row,
    // S
    Select, Submenu, Switch,
    // T
    Tabs, TabPane, Table, TableColumn, Tag
} from 'element-ui';

Vue.component(Aside.name, Aside);
// B
Vue.component(Badge.name, Badge);
Vue.component(Button.name, Button);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Breadcrumb.name, Breadcrumb);
// C
Vue.component(Col.name, Col);
Vue.component(Container.name, Container);
Vue.component(Footer.name, Footer);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
//D
Vue.component(Dialog.name, Dialog);
Vue.component(DatePicker.name, DatePicker);
// H
Vue.component(Header.name, Header);
// I
Vue.component(Icon.name, Icon);
Vue.component(Input.name, Input);
// M
Vue.component(Main.name, Main);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
// O
Vue.component(Option.name, Option);
// P
Vue.component(Pagination.name, Pagination);
Vue.component(Popover.name, Popover);
// R
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(RadioButton.name, RadioButton);
Vue.component(Row.name, Row);
// S
Vue.component(Select.name, Select);
Vue.component(Submenu.name, Submenu);
Vue.component(Switch.name, Switch);
// T
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Tag.name, Tag);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
