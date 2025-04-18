export default function NoteListSkeleton() {
  return (
    <div>
        <ul className="notes-list skeleton-container">
            <li className="v-stack">
                <div
                 className="sidebar-note-list-item skeleton"
                 style={{height: '5em'}}
                >
                </div>
            </li>
            <li className="v-stack">
                <div
                 className="sidebar-note-list-item skeleton"
                 style={{height: '5em'}}
                >
                </div>
            </li>
            <li className="v-stack">
                <div
                 className="sidebar-note-list-item skeleton"
                 style={{height: '5em'}}
                >
                </div>
            </li>
        </ul>
    </div>
  )
}