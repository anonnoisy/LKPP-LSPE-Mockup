import { marketplaces, type Category, type Marketplace } from "@/data";
import { Header } from "../components/header";
import { useNavigate } from "@tanstack/react-router";

export function DashboardMarketplaceView(props: { category: Category }) {
  const { category } = props;

  return (
    <>
      <div className="col-span-10">
        <Header category={category} />
        <div className="h-full col-span-10 bg-gray-100">
          <div className="h-full mx-12 pt-6">
            <h4 className="mb-3">Pilihan Operator</h4>
            <div className="flex items-start justify-start gap-3">
              {marketplaces.map((marketplace, key) => (
                <Marketplace key={key} categorySlug={category.slug} marketplace={marketplace} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Marketplace(props: { categorySlug: Category["slug"]; marketplace: Marketplace }) {
  const { categorySlug, marketplace } = props;

  const navigate = useNavigate();

  return (
    <button
      className="w-[200px] h-[180px] bg-white rounded-2xl flex flex-col items-center justify-center px-6 cursor-pointer"
      onClick={async () =>
        navigate({
          to: "/app/marketplace/$category/$marketplace",
          params: { category: categorySlug, marketplace: marketplace.slug },
        })
      }
    >
      <img src={marketplace.icon} />
      <h4 className="font-medium text-slate-800 pt-3">{marketplace.name}</h4>
    </button>
  );
}
