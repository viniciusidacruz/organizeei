import { FormSignIn, Logo } from "@/components";

export default function PageSignIn() {
  return (
    <main className="bg-gray-50">
      <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Logo className="mb-6" />
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Entrar com sua conta
            </h1>

            <FormSignIn />
          </div>
        </div>
      </section>
    </main>
  );
}
