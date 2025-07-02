import type { Category } from "@/data";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Header(props: { category: Category }) {
  const { category } = props;

  return (
    <div className="bg-gray-100">
      <div className="w-full h-[90px] bg-red-900 flex items-center justify-center">
        <h1 className="text-white font-medium text-center text-2xl">Bela Pengadaan</h1>
      </div>
      <div className="w-full bg-white flex items-center justify-start rounded-tl-2xl rounded-bl-2xl shadow-md ms-12 p-3 ps-6">
        <Icon icon={category.icon} className="text-6xl text-red-700" />
        <h1 className="ps-3 font-medium text-center text-3xl">{category.label}</h1>
      </div>
    </div>
  );
}
