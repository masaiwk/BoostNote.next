import React, { useCallback, KeyboardEvent, useRef } from 'react'
import NoteItem from './NoteItem'
import { NoteDoc } from '../../../lib/db/types'
import styled from '../../../lib/styled'
import { mdiMagnify, mdiSquareEditOutline } from '@mdi/js'
import Icon from '../../atoms/Icon'
import { borderBottom } from '../../../lib/styled/styleFunctions'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  outline: none;
  & > ul {
    flex: 1;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-y: auto;

    li.empty {
      color: ${({ theme }) => theme.uiTextColor};
    }
  }

  .control {
    height: 50px;
    display: flex;
    ${borderBottom}
  }
  .searchInput {
    flex: 1;
    position: relative;
    height: 32px;
    .icon {
      position: absolute;
      top: 4px;
      left: 4px;
      height: 24px;
      width: 24px;
      z-index: 0;
    }
    .input {
      position: relative;
      width: 100%;
      background-color: transparent;
      height: 32px;
      padding-left: 18px;
      border-radius: 2px;
      box-sizing: border-box;
    }
  }
  .newNoteButton {
  }
`

type NoteListProps = {
  storageId: string
  notes: NoteDoc[]
  createNote: () => Promise<void>
  basePathname: string
  currentNoteIndex: number
  navigateUp: () => void
  navigateDown: () => void
}

const NoteList = ({
  notes,
  currentNoteIndex,
  createNote,
  storageId,
  basePathname,
  navigateUp,
  navigateDown
}: NoteListProps) => {
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

  return (
    <StyledContainer>
      <div className='control'>
        <div className='searchInput'>
          <input className='input' value={''} onChange={() => {}} />
          <Icon className='icon' path={mdiMagnify} />
        </div>
        <button className='newNoteButton' onClick={createNote}>
          <Icon path={mdiSquareEditOutline} />
        </button>
      </div>
      <ul tabIndex={0} onKeyDown={handleListKeyDown} ref={listRef}>
        {notes.map((note, index) => {
          const noteIsCurrentNote = index === currentNoteIndex
          return (
            <li key={note._id}>
              <NoteItem
                active={noteIsCurrentNote}
                note={note}
                storageId={storageId}
                basePathname={basePathname}
                focusList={focusList}
              />
            </li>
          )
        })}
        {notes.length === 0 && <li className='empty'>No notes</li>}
      </ul>
    </StyledContainer>
  )
}

export default NoteList
