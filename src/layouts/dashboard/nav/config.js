// component
// import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/home/app',
  },
  {
    title: 'User',
    path: '/home/user',
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
    title: 'Sign in',
    path: '/auth/signin',
  },
  {
    title: 'Not found',
    path: '/404',
  },
];

export default navConfig;
