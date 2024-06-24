export const activity = {
    id: 'activity_1',
    name: 'Awesome Walking Tour',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tickets: [
      {
        id: 'ticket_1',
        name: 'Adult',
        price: {
          amount: '10.00',
          currency: 'USD',
          formatted: '$10.00',
        },
      },
      {
        id: 'ticket_2',
        name: 'Child',
        price: {
          amount: '5.00',
          currency: 'USD',
          formatted: '$5.00',
        },
      },
    ],
  };
  
  export const availabilityDates = [
    {
      date: '2024-06-01',
      status: 'AVAILABLE',
      availabilityTimes: [
        { time: '8:00 AM', spotsLeft: 8, status: 'AVAILABLE' },
        { time: '12:00 PM', spotsLeft: 8, status: 'AVAILABLE' },
        { time: '3:00 PM', spotsLeft: 8, status: 'AVAILABLE' },
      ],
    },
    {
      date: '2024-06-02',
      status: 'SOLD_OUT',
      availabilityTimes: [
        { time: '8:00 AM', spotsLeft: 0, status: 'SOLD_OUT' },
        { time: '12:00 PM', spotsLeft: 0, status: 'SOLD_OUT' },
        { time: '3:00 PM', spotsLeft: 0, status: 'SOLD_OUT' },
      ],
    },
    // Add more dates as needed
  ];
  
  export default {
    activity,
    availabilityDates,
  };
  