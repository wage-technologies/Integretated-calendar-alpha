$(document).ready(function() {

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: '2019-04-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2019-04-19'
      },
      {
        title: 'Long Event',
        start: '2019-04-07',
        end: '2019-04-10'
      },
      {
        id: 999,
        title: 'Wage is Cool',
        start: '2019-04-09T16:00:00'
      },
      {
        id: 999,
        title: 'Wage Party',
        start: '2019-04-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-04-11',
        end: '2019-04-13'
      },
      {
        title: 'Meeting',
        start: '2019-05-12T10:30:00',
        end: '2019-05-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-04-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2019-04-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2019-04-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2019-04-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-04-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2019-04-28'
      }
    ]
  });

});
