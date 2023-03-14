import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoRocket, IoHome, IoDocumentText, IoCreate } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { AsideNavigation, AsideUserGroup } from '../../components/Aside';

interface AsideProps extends React.ComponentPropsWithoutRef<'aside'> {
  contentWidthFullScreen: boolean;
}

const Aside = (props: AsideProps) => {
  const { className, children, contentWidthFullScreen } = props;

  if (contentWidthFullScreen) {
    return null;
  }

  return (
    <aside
      className={twMerge(
        'flex flex-col w-72 pt-7 m-7 shadow rounded-lg fixed bg-white text-blue-900',
        className
      )}>
      <div className='logo flex items-center px-7 mb-5'>
        <IoRocket className='h-8 w-8 mr-5' />
        <h1 className='text-xl font-bold'>Article application</h1>
      </div>
      <AsideNavigation className='px-5'>
        <li className='navbar-item'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }>
            <IoHome className='h-4 mr-5' />
            <span>Home</span>
          </NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink
            to='/posts/my'
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }>
            <IoDocumentText className='h-4 mr-5' />
            <span>My list</span>
          </NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink
            to='/auth/register'
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }>
            <IoCreate className='h-4 mr-5' />
            <span>Create article</span>
          </NavLink>
        </li>
      </AsideNavigation>

      <AsideUserGroup className='flex items-center mt-auto px-5 py-5 rounded-b-lg border border-blue-900 bg-blue-900 text-blue-100' />
    </aside>
  );
};

export default Aside;
