import { listNav } from '@/static/data-list'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { IMobileLlist } from '@/types'

const List = ({mobile}: IMobileLlist) => {

  const flex = `w-full flex flex-row-reverse items-center justify-center gap-2 text-lg`
  
  return (
    <ul>
      <li className={`flex gap-4 lg:gap-8 ${mobile ? 'flex-col items-start gap-y-8 text-white' : ''}`}>
      {listNav.map((item,idx) => (
        <div
          key={idx}
          className='relative group'>
              <NavLink
              to={item.path}
              className={({isActive}) => isActive ? `text-teal-600 jus ${flex} bg-teal-200 bg-opacity-30 px-4 rounded-xl` : flex}>
                {item.label}
                <span>{React.createElement(item.icon)}</span>
              </NavLink>
          <div className='peer absolute -bottom-[18px] w-full h-[2px] bg-teal-600 scale-x-0 group-hover:scale-x-100 duration-300'></div>
        </div>
      ))}
      </li>
    </ul>
  )
}

export default List