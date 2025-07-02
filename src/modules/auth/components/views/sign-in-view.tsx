import { SignInForm } from "../forms/sign-in-form";

export function SignInView() {
  return (
    <>
      <div className="my-3 mx-12 flex justify-between items-center">
        <img
          className="w-[10%] h-[10%]"
          src="https://lpse.lkpp.go.id/eproc4/public/images/imgng/instansi-logo.png"
        />
        <img
          className="w-[130px]"
          src="https://lpse.lkpp.go.id/eproc4/public/images/imgng/lpse-logo.png"
        />
      </div>
      <div className="pe-10 flex justify-end bg-amber-300 h-10"></div>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-3">
        <img
          className="w-[150px]"
          src="https://lpse.lkpp.go.id/eproc4/public/images/imgng/lpse-logo.png"
        />
        <SignInForm />
      </div>
    </>
  );
}
