import dynamic from 'next/dynamic'

const Scrollbar = dynamic(() => import('./Scrollbar'), {ssr: false})

export default Scrollbar;
