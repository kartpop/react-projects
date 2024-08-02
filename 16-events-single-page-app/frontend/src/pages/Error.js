import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const routeError = useRouteError();

  let title = "Error";
  let message = "Something went wrong.";

  if (routeError.status === 500) {
    message = routeError.data.message;
  }

  if (routeError.status === 404) {
    title = "Page Not Found";
    message = "The page you are looking for does not exist.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
