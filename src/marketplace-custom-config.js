/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'fashion_beauty',
    label: 'Fashion and Beauty',
  },
  {
    key: 'corporate_headshots',
    label: 'Corporate Headshots',
  },
  {
    key: 'social_events',
    label: 'Social Events',
  },
  {
    key: 'live_entertainment',
    label: 'Live Entertainment',
  },
  {
    key: 'sports_fitness',
    label: 'Sports and Fitness',
  },
  {
    key: 'family',
    label: 'Family',
  },
];

export const categories = [
  { key: 'smoke', label: 'Smoke' },
  { key: 'electric', label: 'Electric' },
  { key: 'wood', label: 'Wood' },
  { key: 'other', label: 'Other' },
];

export const weekdaysAvailability = [
  { key: 'daytime', label: 'Daytime only' },
  { key: 'evening', label: 'Evenings only' },
  { key: 'daytime_evening', label: 'Daytime and evenings' },
  { key: 'unavailable', label: 'Unavailable' },
];

export const weekendsAvailability = [
  { key: 'daytime', label: 'Daytime only' },
  { key: 'evening', label: 'Evenings only' },
  { key: 'daytime_evening', label: 'Daytime and evenings' },
  { key: 'unavailable', label: 'Unavailable' },
];

export const yesNoOptions = [
  { key: 'yes', label: 'Yes' },
  { key: 'no', label: 'No' }
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// 
export const timeSlotList = [
  {key: '08:00', label: '08:00', hour: 8, minute: 0},
  {key: '08:30', label: '08:30', hour: 8, minute: 30},
  {key: '09:00', label: '09:00', hour: 9, minute: 0},
  {key: '09:30', label: '09:30', hour: 9, minute: 30},
  {key: '10:00', label: '10:00', hour: 10, minute: 0},
  {key: '10:30', label: '10:30', hour: 10, minute: 30},
  {key: '11:00', label: '11:00', hour: 11, minute: 0},
  {key: '11:30', label: '11:30', hour: 11, minute: 30},
  {key: '12:00', label: '12:00', hour: 12, minute: 0},
  {key: '12:30', label: '12:30', hour: 12, minute: 30},
  {key: '13:00', label: '13:00', hour: 13, minute: 0},
  {key: '13:30', label: '13:30', hour: 13, minute: 30},
  {key: '14:00', label: '14:00', hour: 14, minute: 0},
  {key: '14:30', label: '14:30', hour: 14, minute: 30},
  {key: '15:00', label: '15:00', hour: 15, minute: 0},
  {key: '15:30', label: '15:30', hour: 15, minute: 30},
  {key: '16:00', label: '16:00', hour: 16, minute: 0},
  {key: '16:30', label: '16:30', hour: 16, minute: 30},
  {key: '17:00', label: '17:00', hour: 17, minute: 0},
  {key: '17:30', label: '17:30', hour: 17, minute: 30},
  {key: '18:00', label: '18:00', hour: 18, minute: 0},
  {key: '18:30', label: '18:30', hour: 18, minute: 30},
  {key: '19:00', label: '19:00', hour: 19, minute: 0},
  {key: '19:30', label: '19:30', hour: 19, minute: 30},
  {key: '20:00', label: '20:00', hour: 20, minute: 0},
  {key: '20:30', label: '20:30', hour: 20, minute: 30},
  {key: '21:00', label: '21:00', hour: 21, minute: 0},
  {key: '21:30', label: '21:30', hour: 21, minute: 30},
  {key: '22:00', label: '22:00', hour: 22, minute: 0},
  {key: '22:30', label: '22:30', hour: 22, minute: 30},
  {key: '23:00', label: '23:00', hour: 23, minute: 0},
  {key: '23:30', label: '23:30', hour: 23, minute: 30}
]

export const durationSlotList = [
  {key: '0.5 hours', label: '0.5 hours', duration: 0.5},
  {key: '1 hour', label: '1 hour', duration: 1},
  {key: '1.5 hours', label: '1.5 hours', duration: 1.5},
  {key: '2 hours', label: '2 hours', duration: 2},
  {key: '2.5 hours', label: '2.5 hours', duration: 2.5},
  {key: '3 hours', label: '3 hours', duration: 3},
  {key: '3.5 hours', label: '3.5 hours', duration: 3.5},
  {key: '4 hours', label: '4 hours', duration: 4},
]