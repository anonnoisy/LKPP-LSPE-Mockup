import { categories } from "@/data";
import { MenuItem } from "./menu-item";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useAuth } from "@/lib/providers/auth-provider";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Label } from "@/components/ui/label";

export function Menu() {
  const router = useRouter();
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      auth.logout().then(() => {
        router.invalidate().finally(() => {
          navigate({ to: "/" });
        });
      });
    }
  };

  return (
    <div className="overflow-y-auto divide-y divide-gray-200">
      {categories.map((category, key) => (
        <MenuItem key={key} category={category} />
      ))}

      <div>
        <button className="w-full cursor-pointer border-b" onClick={handleLogout}>
          <div className="flex gap-2 px-3 py-3">
            <Icon icon="solar:logout-2-bold" style={{ fontSize: "28px" }} />
            <Label className="text-md text-slate-600 cursor-pointer">Logout</Label>
          </div>
        </button>
      </div>
    </div>
  );
}
