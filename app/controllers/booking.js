import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BookingController extends Controller {
  @service router;

  @action
  goHome() {
    this.router.transitionTo('index');
  }

  @action
  confirmBooking(booking) {
    this.router.transitionTo('thank-you');
  }
}

