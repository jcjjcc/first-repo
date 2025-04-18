// "use client";
// import dayjs from "dayjs";
import SidebarNoteItem from "@/components/SidebarNoteItem";

export default async function NoteList({ notes }){
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(1000);
  const arr = Object.entries(notes);
  // console.log(arr) 其中一条：
    // [  '1702459188837',
    //   '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'      
    // ],
  if (arr.length === 0) {
    return (
      <div className="notes-empty">
        {'No notes created yet!'}
      </div>
    )
  }

  return (
    <ul className="notes-list">
    {
      arr.map(([noteId, note]) => {
        // const { title, updateTime } = JSON.parse(note)
        return (
          <li key={noteId}>
            {/* 每个sidebarNoteItem组件传入一条note对象，以及对应的id */}
            <SidebarNoteItem noteId={noteId} note={JSON.parse(note)}/>
          </li>
        )
      })
    }
    </ul>
  )
}