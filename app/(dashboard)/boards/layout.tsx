import { AppSidebar } from "@/components/app-sidebar"
import { getBoards } from "@/lib/data"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default async function BoardsLayout({ children }: { children: React.ReactNode }) {
  const boards = await getBoards()

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="sidebar" boards={boards} />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
