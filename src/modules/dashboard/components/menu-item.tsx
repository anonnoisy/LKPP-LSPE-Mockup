import { Label } from "@/components/ui/label";
import type { Category } from "@/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "@tanstack/react-router";

export function MenuItem(props: { category: Category }) {
  const { category } = props;

  return (
    <div>
      <Link to="/app/marketplace/$category" params={{ category: category.slug }}>
        <div className="flex gap-2 px-3 py-3">
          <Icon icon={category.icon} style={{ fontSize: "28px" }} />
          <Label className="text-md text-slate-600 cursor-pointer">{category.label}</Label>
        </div>
      </Link>
    </div>
  );
}
