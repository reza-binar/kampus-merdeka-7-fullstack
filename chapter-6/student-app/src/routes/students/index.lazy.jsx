import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/students/')({
  component: () => <div>Hello /students/!</div>,
})
