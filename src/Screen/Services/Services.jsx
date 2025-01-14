import Case from "../Cases/Case";
import { Helmet } from "react-helmet-async";
const Services = () => {
	return (
		<div>
			<Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
			<Case />
		</div>
	);
};

export default Services;
