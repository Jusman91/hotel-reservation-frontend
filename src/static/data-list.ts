import { LiaBedSolid, LiaTaxiSolid } from 'react-icons/lia';
import { PiAirplaneInFlight } from 'react-icons/pi';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdAttractions } from 'react-icons/md';
import { IListNav } from '@/types';

export const listNav: IListNav[] = [
  {
    label: 'Stay',
    path: '/',
    icon: LiaBedSolid
  },
  {
    label: 'Flights',
    path: 'flights',
    icon: PiAirplaneInFlight
  },
  {
    label: 'Car Rentals',
    path: 'car-rentals',
    icon: IoCarSportOutline
  },
  {
    label: 'Attractions',
    path: 'attractions',
    icon: MdAttractions
  },
  {
    label: 'Airport Taxis',
    path: 'airport-taxis',
    icon: LiaTaxiSolid
  },
]