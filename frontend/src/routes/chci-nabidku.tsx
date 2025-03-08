import { createFileRoute } from '@tanstack/react-router'
import LeadForm from '@/components/LeadForm';

export const Route = createFileRoute('/chci-nabidku')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <LeadForm />
  </div>
}
