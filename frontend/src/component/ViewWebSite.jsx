import Link from 'next/link';
import React from 'react';

const ViewWebSite = () => {
  return <div>
    <Link href={'/'} className='border px-3 py-1 shadow-md font-poppins'>
        View Website
    </Link>
  </div>;
};

export default ViewWebSite;