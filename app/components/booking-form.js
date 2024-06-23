import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BookingFormComponent extends Component {
  @service router;
  @tracked selectedTickets = {};
  @tracked selectedDate;
  @tracked guestName = '';
  @tracked guestEmail = '';
  @tracked guestPhone = '';

  @action
  updateTickets(ticket, event) {
    const value = event.target.value;
    this.selectedTickets = {
      ...this.selectedTickets,
      [ticket.id]: value,
    };
  }

  @action
  selectDate(event) {
    this.selectedDate = event.target.value;
  }

  @action
  updateGuestName(event) {
    this.guestName = event.target.value;
  }

  @action
  updateGuestEmail(event) {
    this.guestEmail = event.target.value;
  }

  @action
  updateGuestPhone(event) {
    this.guestPhone = event.target.value;
  }

  @action
  confirmBooking() {
    const bookingDetails = {
      selectedTickets: this.selectedTickets,
      selectedDate: this.selectedDate,
      guestName: this.guestName,
      guestEmail: this.guestEmail,
      guestPhone: this.guestPhone,
    };

    console.log('Booking confirmed with details:', bookingDetails);

    // Route to thank you page
    this.router.transitionTo('thank-you');
  }
}
