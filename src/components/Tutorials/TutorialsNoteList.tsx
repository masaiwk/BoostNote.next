import React, { useCallback, KeyboardEvent, useRef } from 'react'
import { TutorialsNavigatorTreeItem } from '../../lib/tutorials'
import TutorialsNoteItem from './TutorialsNoteItem'
import { StyledNoteListContainer } from '../NotePage/NoteList/NoteList'

type TutorialsNoteListProps = {
  currentTree: TutorialsNavigatorTreeItem
  basePathname: string
  parentTree?: TutorialsNavigatorTreeItem
  selectedNote?: TutorialsNavigatorTreeItem
  navigateUp: () => void
  navigateDown: () => void
}

const TutorialsNoteList = ({
  currentTree,
  parentTree,
  navigateUp,
  navigateDown,
  basePathname,
  selectedNote
}: TutorialsNoteListProps) => {
  const handleListKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          navigateDown()
          break
        case 'ArrowUp':
          navigateUp()
          break
      }
    },
    [navigateUp, navigateDown]
  )

  const listRef = useRef<HTMLUListElement>(null)

  const focusList = useCallback(() => {
    listRef.current!.focus()
  }, [])

  const notes =
    currentTree.type !== 'note'
      ? currentTree.children.filter(child => child.type === 'note')
      : parentTree == null
      ? []
      : parentTree.children.filter(child => child.type === 'note')

  return (
    <StyledNoteListContainer>
      <ul tabIndex={0} onKeyDown={handleListKeyDown} ref={listRef}>
        {notes.map(note => {
          const noteIsCurrentNote =
            selectedNote != null &&
            note.absolutePath === selectedNote.absolutePath
          return (
            <li key={note.slug}>
              <TutorialsNoteItem
                active={noteIsCurrentNote}
                note={note}
                basePathname={basePathname}
                focusList={focusList}
              />
            </li>
          )
        })}
        {notes.length === 0 && <li className='empty'>No notes</li>}
      </ul>
    </StyledNoteListContainer>
  )
}

export default TutorialsNoteList
