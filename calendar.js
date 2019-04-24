$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: '2019-06-03',
    //defaultView: 'week',
    navLinks: true, // can click day/week names to navigate views
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    events: [
        {
          title: 'Morning Shift',
          start: '2019-06-03T08:00:00',
          end: '2019-06-03T12:00:00'
        },
        {
          title: 'Afternoon Shift',
          start: '2019-06-03T12:00:00',
          end: '2019-06-03T16:00:00'
        },
        {
          title: 'Evening Shift',
          start: '2019-06-03T16:00:00',
          end: '2019-06-03T20:00:00'
        },
        {
          title: 'Morning Shift',
          start: '2019-06-04T08:00:00',
          end: '2019-06-04T12:00:00'
        },
        {
          title: 'Afternoon Shift',
          start: '2019-06-04T12:00:00',
          end: '2019-06-04T16:00:00'
        },
        {
          title: 'Evening Shift',
          start: '2019-06-04T16:00:00',
          end: '2019-06-04T20:00:00'
        },
        {
          title: 'Morning Shift',
          start: '2019-06-05T08:00:00',
          end: '2019-06-05T12:00:00'
        },
        {
          title: 'Afternoon Shift',
          start: '2019-06-05T12:00:00',
          end: '2019-06-05T16:00:00'
        },
        {
          title: 'Evening Shift',
          start: '2019-06-05T16:00:00',
          end: '2019-06-05T20:00:00'
        },
        {
          title: 'Morning Shift',
          start: '2019-06-06T08:00:00',
          end: '2019-06-06T12:00:00'
        },
        {
          title: 'Afternoon Shift',
          start: '2019-06-06T12:00:00',
          end: '2019-06-06T16:00:00'
        },
        {
          title: 'Evening Shift',
          start: '2019-06-06T16:00:00',
          end: '2019-06-06T20:00:00'
        },
        {
          title: 'Morning Shift',
          start: '2019-06-07T08:00:00',
          end: '2019-06-07T12:00:00'
        },
        {
          title: 'Afternoon Shift',
          start: '2019-06-07T12:00:00',
          end: '2019-06-07T16:00:00'
        },
        {
          title: 'Evening Shift',
          start: '2019-06-07T16:00:00',
          end: '2019-06-07T20:00:00'
        }
    ]

    });
  });
