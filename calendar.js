$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: '2016-12-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2019-4-19'
      },
      {
        title: 'Long Event',
        start: '2019-4-07',
        end: '2019-4-10'
      },
      {
        id: 999,
        title: 'Wage is Cool',
        start: '2019-4-09T16:00:00'
      },
      {
        id: 999,
        title: 'Wage Party',
        start: '2019-4-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-12-11',
        end: '2019-12-13'
      },
      {
        title: 'Meeting',
        start: '2019-5-12T10:30:00',
        end: '2019-5-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-4-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2019-4-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2019-4-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2019-4-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-4-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2019-4-28'
      }
    ]
  });

});
