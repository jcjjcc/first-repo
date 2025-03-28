// 'use client'
import dayjs from "dayjs";

export default async function NoteList({ notes }){
    const arr = Object.entries(notes);
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
          const { title, updateTime } = JSON.parse(note)
          // 使用 dayjs 格式化日期
          const formattedTime = dayjs(updateTime).format('YYYY-MM-DD HH:mm:ss');
          return (
            <li key={noteId}>
              <header className="sidebar-note-header">
                <strong>{title}</strong>
                {/* 显示格式化后的日期 */}
                <small>{formattedTime}</small>
              </header>
            </li>
          )
        })
      }
      </ul>
    )
  }