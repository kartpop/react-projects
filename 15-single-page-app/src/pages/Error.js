import MainNavigation from "../components/MainNavigation";

export function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>404</h1>
        <p>Page not found</p>
      </main>
    </>
  );
}

export default ErrorPage;
