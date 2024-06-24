import Route from '@ember/routing/route';
import { activity, availabilityDates } from '../mock-data';

export default class BookingRoute extends Route {
  model() {
    return {
      activity,
      availabilityDates
    };
  }
}
