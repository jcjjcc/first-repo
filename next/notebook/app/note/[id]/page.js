// /note/123/
import Note from '@/components/Note'
import { getNote } from '@/lib/redis'

export default async function Page({ params }) {
  const {id : noteId} = params
  // console.log('当前noteId:',noteId)
  const note = await getNote(noteId)

  // console.log('当前note:',note)
 const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(2000);
  

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
        Click a note on the left to view something!
        </span>
      </div>
    )
  }

  return (
    <Note noteId={noteId} note={JSON.parse(note)} />
  )
} 