// component
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/home/app',
  },
  {
    title: 'Content',
    path: '/home/content',
  },
  {
    title: 'Room',
    path: '/home/room',
  },
  {
    title: 'Admin',
    path: '/home/room',
  },
  {
    title: 'Spoke',
    path: '/home/room',
  },
  {
    title: 'Profile',
    path: '/home/profile',
  },
  {
    title: 'User',
    path: '/home/user',
  },
];

export default navConfig;
