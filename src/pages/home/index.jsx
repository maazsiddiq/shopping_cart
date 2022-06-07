import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import video from "../../assests/animation.mp4";

export default function LandingImg() {
	return (
		<div>
			<Grid container>
				<video width="100%" height="100%" muted loop autoPlay>
					<source src={video} type="video/mp4" />
				</video>
			</Grid>
		</div>
	);
}
