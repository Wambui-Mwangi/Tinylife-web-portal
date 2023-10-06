import dynamic from 'next/dynamic';
const NairobiMap = dynamic(() => import('@/app/atoms/map'), {
  ssr: false,
});

export default NairobiMap;