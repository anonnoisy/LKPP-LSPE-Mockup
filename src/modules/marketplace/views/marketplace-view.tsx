export function MarketplaceView(props: { link: string }) {
  const { link } = props;

  return (
    <div className="col-span-10 row-span-2">
      <div className="w-full h-[90px] bg-red-900 flex items-center justify-start ps-3">
        <h1 className="text-white font-medium text-center text-2xl">Bela Pengadaan</h1>
      </div>
      <iframe src={link} className="w-full h-full overflow-hidden" />
    </div>
  );
}
