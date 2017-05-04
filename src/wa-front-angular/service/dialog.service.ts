import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DialogClass, DialogDef } from '@ts-webapp/common';

@Injectable()
export class DialogService {
  private isModal = false;
  constructor () {}
  modal() {
    this.isModal = true;
    return this;
  }
  error(message: string): Observable<any>;
  error(title: string, message: string): Observable<any>;
  error(title: string, message: string, buttons: any[]): Observable<any>;
  error(title: string, message?: string, buttons: any[] = ['OK']): Observable<any> {
    return this.alert(title, message);
  }
  alert(message: string): Observable<any>;
  alert(title: string, message: string): Observable<any>;
  alert(title: string, message: string, buttons: any[]): Observable<any>;
  alert(title: string, message?: string, buttons: any[] = ['OK']): Observable<any> {
    let result = new Subject<any>();
    if (!message) {
      message = title;
      title = '';
    }
    setTimeout(() => {
      alert(((title && title !== '') ? title + '\n' : '') + message);
      result.next();
      result.complete();
    }, 1);
    return result;
  }
  confirm(message: string): Observable<any>;
  confirm(title: string, message: string): Observable<any>;
  confirm(title: string, message: string, buttons: any[]): Observable<any>;
  confirm(title: string, message?: string, buttons: any[] = ['OK', 'Cancel']): Observable<any> {
    let result = new Subject<any>();
    if (!message) {
      message = title;
      title = '';
    }
    setTimeout(() => {
      result.next(confirm(((title && title !== '') ? title + '\n' : '') + message));
      result.complete();
    }, 1);
    return result;
  }
  ask(message: string): Observable<any>;
  ask(title: string, message: string): Observable<any>;
  ask(title: string, message: string, value?: string): Observable<any>;
  ask(title: string, message?: string, value: string = ''): Observable<any> {
    let result = new Subject<any>();
    if (!message) {
      message = title;
      title = '';
    }
    setTimeout(() => {
      result.next(prompt(((title && title !== '') ? title + '\n' : '') + message, value));
      result.complete();
    }, 1);
    return result;
  }
}