import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

export function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  })
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  )
}
