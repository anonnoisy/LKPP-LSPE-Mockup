import { findCategoryBySlug, findMarketplaceBySlug } from "@/data";
import { postAuth } from "@/lib/api/marketplace";
import { MarketplaceView } from "@/modules/marketplace/views/marketplace-view";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/app/marketplace/$category/$marketplace")({
  component: Marketplace,
  loader: async ({ params, context }) => {
    const category = findCategoryBySlug(params.category);
    const marketplace = findMarketplaceBySlug(params.marketplace);

    if (!category || !marketplace || !context.auth.user) throw notFound();

    return await postAuth(marketplace, category, {
      payload: context.auth.user,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    });
  },
});

function Marketplace() {
  const authData = Route.useLoaderData();

  console.log(authData);

  const { category: categorySlug, marketplace: marketplaceSlug } = Route.useParams();

  const category = findCategoryBySlug(categorySlug);
  const marketplace = findMarketplaceBySlug(marketplaceSlug);

  if (!category || !marketplace) throw notFound();

  const link = marketplace.link(category.slug, authData?.data?.token);

  return <MarketplaceView link={link} />;
}
