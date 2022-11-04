import React from 'react'

import { Spinner } from 'flowbite-react';

export const Spin = () => {
  return (
    <div className='text-center spinner'>
      <Spinner color="failure" size="xl" aria-label="Center-aligned spinner example" />
    </div>
  )
}
