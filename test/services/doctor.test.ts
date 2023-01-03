import assert from 'assert';
import app from '../../src/app';

describe('\'doctor\' service', () => {
  it('registered the service', () => {
    const service = app.service('doctor');

    assert.ok(service, 'Registered the service');
  });
});
