import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ThankYouController extends Controller {
  @service router;

  queryParams = ['selectedTickets', 'selectedDate', 'guestName', 'guestEmail', 'guestPhone'];
  @tracked selectedTickets;
  @tracked selectedDate;
  @tracked guestName;
  @tracked guestEmail;
  @tracked guestPhone;

  get parsedTickets() {
    return JSON.parse(this.selectedTickets);
  }

  @action
  goToBooking() {
    this.router.transitionTo('booking');
  }
}
