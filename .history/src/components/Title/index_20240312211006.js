import { Helmet, HelmetProvider } from "react-helmet-async";

function Title({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default Title;
