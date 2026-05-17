import { slugify } from "./slugify"

export type BoardSubtask = {
  title: string
  isCompleted: boolean
}

export type BoardTask = {
  title: string
  description: string
  status: string
  subtasks: BoardSubtask[]
}

export type BoardColumn = {
  name: string
  tasks: BoardTask[]
}

export type Board = {
  name: string
  columns: BoardColumn[]
}

export type BoardsData = {
  boards: Board[]
}

let cachedData: BoardsData | null = null

async function loadBoardsData(): Promise<BoardsData> {
  if (cachedData) {
    return cachedData
  }

  // In a real app, this would fetch from a database or API
  // For now, we'll import the data.json file
  const data = await import("../data.json")
  cachedData = data
  return cachedData
}

export async function getBoardBySlug(slug: string): Promise<Board | null> {
  const data = await loadBoardsData()

  const board = data.boards.find((board) => slugify(board.name) === slug)

  return board || null
}

export async function getAllBoards(): Promise<Board[]> {
  const data = await loadBoardsData()
  return data.boards
}

export async function getBoards(): Promise<Board[]> {
  return getAllBoards()
}

export function getBoardSlug(boardName: string): string {
  return slugify(boardName)
}
