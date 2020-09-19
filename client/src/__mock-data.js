import React from 'react';
import {
  Grid3x3Gap,
  CalendarDate,
  Alarm,
  ListCheck,
  Star,
} from 'react-bootstrap-icons';

export const menuItemsPrimary = [
  { name: 'Overview', icon: <Grid3x3Gap />, howMany: 0 },
  { name: 'Today', icon: <CalendarDate />, howMany: 0 },
  { name: 'Important', icon: <Star />, howMany: 3 },
  { name: 'Scheduled', icon: <Alarm />, howMany: 9 },
  { name: 'Done', icon: <ListCheck />, howMany: 0 },
];

export const menuItemsSecondary = [
  { name: 'Design', icon: null, howMany: 21, color: 'blue' },
  { name: 'Marketing', icon: null, howMany: 8, color: 'orange' },
  { name: 'Development', icon: null, howMany: 37, color: 'salmon' },
];

export const todos = [
  {
    id: 1,
    title: 'Calendar component iteration',
    important: true,
    content: `<p>
      Few would argue that, despite the advancement of feminism over the
      past three decades, women still face a double standard when it
      comes to their behaviour.
    </p>
    <p>
      While men's bodreline-inappropriate behaviour is often laught off
      as "boys will be boys", women face higher conduct standards -
      especially in the workplace. That's why it's crucial that, as
      women, our behaviour on the job is beyond reproach.
    </p>
    <p>Small Towns and Big States</p>`,
    done: false,
    attachments: [],
    remind_at: '2020-12-23T12:30:00Z',
    created: '2020-09-02T16:34:00Z',
    updated: '2020-09-02T16:34:00Z',
  },
  {
    id: 2,
    title: 'Test heading for new note',
    important: false,
    content:
      'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    done: true,
    attachments: ['file', 'picture'],
    remind_at: '2020-12-23T12:30:00Z',
    created: '2020-09-02T16:34:00Z',
    updated: '2020-09-02T16:34:00Z',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    important: false,
    content:
      'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    done: false,
    attachments: [],
    remind_at: '2020-12-23T12:30:00Z',
    created: '2020-09-02T16:34:00Z',
    updated: '2020-09-02T16:34:00Z',
  },
  {
    id: 4,
    title: 'Something new',
    important: false,
    content:
      'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
    done: false,
    attachments: ['file', 'picture'],
    remind_at: '2020-12-23T12:30:00Z',
    created: '2020-09-02T16:34:00Z',
    updated: '2020-09-02T16:34:00Z',
  },
];
