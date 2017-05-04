import '../common/route';
import { Server, DB } from '@ts-webapp/back';
import { ROUTES } from './routes';

import { UserModel, DemoModel } from './db';
import { dummy } from './dummy';
require('console.table');
// console.table(dummy);

export const server: Server = Server.bootstrap();

DB.connect('mongodb://localhost/db').subscribe(con => {
  // DemoModel.remove().subscribe(res => {
  //   DemoModel.create(dummy).subscribe(res => {
  //     // DemoModel.list().subscribe(demos => console.table(demos.map(item => (<any>item)._doc)));
  //   });
  // });
  // console.log('DB connected');
  // // DemoModel.remove().subscribe(res => {
  // //   DemoModel.create(dummy).subscribe(res => {
  // //     // DemoModel.list().subscribe(demos => console.table(demos.map(item => (<any>item)._doc)));
  // //   });
  // // });
  // DemoModel.create({
  //   name: 'Ash',
  //   dob: new Date('1992-08-12'),
  //   time: new Date()
  // });
  // DemoModel.update({name: 'Ash'}, {dob: new Date('1989-07-13')});
  // DemoModel.list({name: 'at'}, {name: true, _id: true, other: '$_id', other2: '$name'}).subscribe(demos => console.table(demos.map(item => (<any>item)._doc)));
  // DemoModel.list({
  //   conditions: {name: 'vitae'},
  //   // projection: {name: true},
  //   sort: {dob: !true}
  // }).subscribe(demos => console.log(demos));

  // DemoModel.find({
  //   // conditions: {name: 'vitae'},
  //   projection: {dob: true, name: true, _id: false},
  //   sort: {dob: !true, name: !true},
  //   start: 0,
  //   limit: 20
  // }).subscribe(demos => console.log(demos));
  UserModel.set('58fd7abc8364d410235362b1', {name: 'Ashraf Cheraa'}).subscribe(res => {
    UserModel.list({conditions: {}}).subscribe(users => console.log(users));
  });
});

server.route('/api/routes', function(req, res, next) {
  res.json(server.routeReport());
});

server.applyRoutes(ROUTES);
server.start(() => console.log('server started on ' + server.config.host + ':' + server.config.port));
