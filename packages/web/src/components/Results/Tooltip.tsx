import React, { PropsWithChildren } from 'react'

import { Popover, PopoverBody, PopoverProps } from 'reactstrap'

export function Tooltip({ children, placement, ...restProps }: PropsWithChildren<PopoverProps>) {
  return (
    <Popover
      className="popover-mutation"
      placement={placement ?? 'auto'}
      hideArrow
      delay={0}
      fade={false}
      {...restProps}
    >
      <PopoverBody>{children}</PopoverBody>
    </Popover>
  )
}
