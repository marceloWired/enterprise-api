"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _ = require('./controllers/enterprise/');

const routes = _express.Router.call(void 0, )

routes.get('/enterprises', _.enterpriseListController.listAll)

routes.get('/enterprises/:id',_.enterpriseFindController.find)

routes.post('/enterprises', _.enterpriseCreateController.store)

routes.delete('/enterprises/:id', _.enterpriseDeleteController.delete)

routes.put('/enterprises/:id', _.enterpriseUpdateController.update)

exports. default = routes
