import { Injectable } from '@angular/core';
import { ModelClient } from '../../../wa-front-angular';
import {
  UserModelDefinition, UserModelUrl,
/// imports
} from '../../../common/db';
import { Http } from '@angular/http';
@Injectable() export class UserModel extends ModelClient<UserModelDefinition> {
  public url = UserModelUrl;
  constructor(public http: Http) { super(); };
}
/// exports
export const MODELS = [
  UserModel,
/// models
];
export function modelFromName(modelName: string): ModelClient<any> {
  switch (modelName) {
    case 'user': return <ModelClient<any>>(UserModel as any);
/// model names
  }
}