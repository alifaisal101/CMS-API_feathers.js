// Initializes the `doctor` service on path `/doctor`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Doctor } from './doctor.class';
import createModel from '../../models/doctor.model';
import hooks from './doctor.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'doctor': Doctor & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/doctor', new Doctor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('doctor');

  service.hooks(hooks);
}
