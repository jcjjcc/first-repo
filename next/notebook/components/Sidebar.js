import React,{Suspense} from 'react';
import Link from 'next/link';
import { getAllNotes } from '@/lib/redis';
import SidebarNoteList from '@/components/SiderbarNoteList';
import EditButton from '@/components/EditButton';
import NoteListSkeleton from '@/components/NoteListSkeleton';

export default async function Sidebar() {

  //获取所有笔记
  const notes = await getAllNotes()
  // console.log(notes)

  return (
    <>
      <section className="col sidebar">
        {/* 点击跳转到首页 */}
        <Link href="/" className="link--unstyled">
          <section className="sidebar-header">
            <img 
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt="Logo"
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu">
          { /* SideSearchField */}
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          {/* SidebarNoteList */}
          {/* 渲染笔记列表 */}
          <Suspense fallback={<NoteListSkeleton/>}>
             <SidebarNoteList notes={notes}/>
          </Suspense>
        </nav>
      </section>
    </>
  )
}