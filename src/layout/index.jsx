import React, { Children } from "react";
import Header from "./header/index";
import Footer from "./footer/index";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
