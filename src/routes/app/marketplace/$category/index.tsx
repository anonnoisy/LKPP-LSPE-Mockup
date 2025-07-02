import { findCategoryBySlug } from "@/data";
import { DashboardMarketplaceView } from "@/modules/dashboard/views/dashboard-marketplace-view";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/app/marketplace/$category/")({
  component: DashboardMarketplace,
});

function DashboardMarketplace() {
  const { category: categorySlug } = Route.useParams();

  const category = findCategoryBySlug(categorySlug);

  if (!category) throw notFound();

  return <DashboardMarketplaceView category={category} />;
}
