import { SiteHeader } from "@/components/site-header"
// import { SidebarInset } from "@/components/ui/sidebar"
import { getBoardBySlug } from "@/lib/data"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ boardId: string }>
}

export default async function Page({ params }: { params: Promise<PageProps> }) {
  const { boardId } = await params
  const currentBoard = await getBoardBySlug(boardId)

  if (!currentBoard) {
    notFound()
  }

  return (
    <>
      <SiteHeader title={currentBoard.name} />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              {/* Board content will go here */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
