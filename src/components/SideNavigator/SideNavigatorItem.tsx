import React, { useState } from 'react'
import styled from '../../lib/styled'
import { Link } from '../../lib/router'
import Icon from '../atoms/Icon'
import { mdiChevronDown, mdiChevronRight } from '@mdi/js'

const StyledContainer = styled.div``

export interface NavigatorNode {
  iconPath?: string
  name: string
  key?: string
  href?: string
  children?: NavigatorNode[]
}

interface SideNavigatorItemProps {
  node: NavigatorNode
  depth?: number
}

const SideNavigatorItem = ({
  node: item,
  depth = 0
}: SideNavigatorItemProps) => {
  const { iconPath, name, href, children } = item
  const [open, setOpen] = useState(true)
  const childrenExists = children != null && children.length > 0
  return (
    <StyledContainer>
      <div>
        {depth}
        {childrenExists && (
          <button onClick={() => setOpen(prevOpen => !prevOpen)}>
            <Icon path={open ? mdiChevronDown : mdiChevronRight} />
          </button>
        )}
        <Link href={href}>
          {iconPath != null && <Icon path={iconPath} />}
          {name}
        </Link>
      </div>
      {open &&
        childrenExists &&
        children!.map((child, index) => (
          <SideNavigatorItem
            key={child.key || `${index}-${child.href}`}
            node={child}
            depth={depth + 1}
          />
        ))}
    </StyledContainer>
  )
}

export default SideNavigatorItem
