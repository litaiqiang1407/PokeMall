import { Helmet } from "react-helmet";

function title({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default title;
