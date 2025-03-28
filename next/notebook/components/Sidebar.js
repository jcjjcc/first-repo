import React from 'react';
import Link from 'next/link';
import { getAllNotes } from '@/lib/redis';
import SidebarNoteList from '@/components/SiderbarNoteList';

export default async function Sidebar() {
  const notes = await getAllNotes()
  // console.log(notes)

  return (
    <>
      <section className="col sidebar">
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
        </section>
        <nav>
          {/* SidebarNoteList */}
          <SidebarNoteList notes={notes}/>
        </nav>
      </section>
    </>
  )
}