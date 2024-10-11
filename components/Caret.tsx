import clsx from 'clsx';
import React from 'react';

const Caret = ({ className }: {className?: string}) => {
  return (
    <div className={clsx(
      "caret",
      className
    )}>
    </div>
  );
};

export default Caret;