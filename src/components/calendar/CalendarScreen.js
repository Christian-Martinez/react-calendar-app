import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch } from 'react-redux';

import { Navbar } from '../ui/NavBar';
import { uiOpenModal } from '../../actions/ui';
import { CalendarModal } from './CalendarModal';
import { CalendarEvent } from './CalendarEvent';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { eventSetActive } from '../../actions/events';

moment().locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const dispatch = useDispatch();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const myEventsList = [
    {
      title: 'Dia del padre',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      color: '#fafafa',
      notes: 'Compra el pastel',
      user: {
        name: 'Ronald',
      },
    },
  ];

  const onDoubleClick = (e) => {
    console.log(e);
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    console.log(e);
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    //console.log(e);
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  /* const onSelectSlot = (e) => {
    console.log(e);
    // dispatch( eventClearActiveEvent() );
  }; */

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    };

    return {
      style,
    };
  };

  return (
    <div className='calendar-screen'>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <CalendarModal />
    </div>
  );
};
