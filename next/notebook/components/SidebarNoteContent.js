'use client'; // 客户端
import { useState, useRef, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // 集成了路由

export default function SidebarNoteContent({
  id,
  title,
  children,
  expandedChildren
}) {
  console.log('当前id:',id)
  const router = useRouter(); 
  //当前路由路径
  const pathname = usePathname();
  
  //路径中对应的note的id
  const selectedId = pathname?.split('/')[2] || null;
  // console.log(selectedId, '////')
  // 展开收起的状态
  const [isExpanded, setIsExpanded] = useState(false);
  const itemRef = useRef(null)
  
  //
  const [isPending] = useTransition()
  const isActive = id === selectedId;

  useEffect(() => {
    // setInterval(() => {
    //   // classList.add 重复添加无效：classList.add 方法在添加已经存在的类名时不会产生任何效果。所以，每次定时器触发时，尝试添加 flash 类，但因为类已经存在，不会有新的变化。
    //   itemRef.current.classList.add('flash');
    // }, 3000)
  }, [])
  // console.log(selectedId, '////')
  // list 没有去到详情
  // 详情 id
  // 展开收起
  return (
    <div 
      ref={itemRef}
      onAnimationEnd={() => {
        // itemRef.current.classList.remove('flash');
      }}
      className={[
      'sidebar-note-list-item',
      isExpanded? 'note-expanded': ''
    ].join(' ')}>
    {children}
      <button 
        className="sidebar-note-open"
        style={{
          backgroundColor: isPending
          ?'var(--gray-80)'
          :isActive
          ?'var(--tertiary-blue)':'',
          border: isActive ? '1px solid var(--primary-border':'1px solid transparent'
        }}
        onClick={
          () => {
            router.push(`/note/${id}`)
          }
        }
      >
        Open note for preview
      </button>

      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {
          isExpanded ? (
            <img 
              src="/chevron-down.svg"
              width="10px"
              height="10px"
              alt="Collapse"
            />
          ): (
            <img src="/chevron-up.svg" width="10px" height="10px" alt="Expand"/>
          )
        }
      </button>
      {isExpanded && expandedChildren}
    </div>
  )
}