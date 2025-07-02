import { Menu } from "./menu";

export function Sidebar() {
  return (
    <>
      <div className="px-3 py-4 flex items-center">
        <img
          className="w-[150px]"
          src="https://lpse.lkpp.go.id/eproc4/public/images/imgng/instansi-logo.png"
        />
      </div>
      <Menu />
    </>
  );
}
