import { ModelDefinition } from '@ts-webapp/common';
export const DemoModelUrl = '/demo';
export interface DemoModelDefinition extends ModelDefinition {
  name?: string;
  dob?: Date;
  time?: Date;
};
export const DemoModelScheme = {
  name: {type: String},
  dob: {type: Date},
  time: {type: Date},
};
