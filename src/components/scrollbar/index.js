import dynamic from 'next/dynamic'

const Scrollbar = dynamic(() => import('./Scrollbar'))

export default Scrollbar;
