import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import currencyFormatter from "currency-formatter";
import * as actionCreators from "../../store/actions/A-home";

import shop1 from "../../assests/phone.jpg";
import shop2 from "../../assests/handfree.jpg";
import shop3 from "../../assests/watch.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		marginTop: "50px",
		margin: "auto",
		maxWidth: 900,
	},
	image: {
		width: "100%",
		height: 200,
	},
	paperBox: {
		display: "flex",
		"& > *": {
			// margin: theme.spacing(1),
			width: theme.spacing(6),
			height: theme.spacing(6),
		},
	},
	counters: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	discountPrice: {
		fontSize: "12px",
		color: "#A9A9A9",
	},
	actualPrice: {
		textDecoration: "line-through",
	},
}));

const Details = (props) => {
	const classes = useStyles();

	const [Product, SetProduct] = React.useState(null);

	const [Quantity, setQuantity] = React.useState(1);

	const decQuantity = () => {
		if (Quantity > 1) {
			setQuantity(Quantity - 1);
		}
	};

	const a = [
		{
			_id: 1,
			IMG: shop1,
			Title: "iphone",
			Description:
				"men watch good with over6,000 species, ranging across all continents except Antarctica",
			Price: 12,
			Discount: 2,
			DiscountPrice: 12 - (2 / 100) * 12,
		},
		{
			_id: 2,
			IMG: shop2,
			Title: "Handfree",
			Description:
				"men watch good with over6,000 species, ranging across all continents except Antarctica",
			Price: 10,
			Discount: 2,
			DiscountPrice: 10 - (2 / 100) * 10,
		},
		{
			_id: 3,
			IMG: shop3,
			Title: "Luxury Watch",
			Description:
				"men watch good with over6,000 species, ranging across all continents except Antarctica",
			Price: 15,
			Discount: 5,
			DiscountPrice: 15 - (5 / 100) * 15,
		},
		{
			_id: 4,
			IMG: shop3,
			Title: "Luxury Watch",
			Description:
				"men watch good with over6,000 species, ranging across all continents except Antarctica",
			Price: 15,
			Discount: 5,
			DiscountPrice: 15 - (5 / 100) * 15,
		},
	];

	useEffect(() => {
		getProduct();
	}, []);

	const getProduct = () => {
		if (props.match.params.id) {
			const res = a;
			const data = res.filter((item) => {
				return item._id == props.match.params.id;
			});
			SetProduct(data);
		}
	};

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				{Product
					? Product.map((_products) => {
							return (
								<div>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={4}>
											<div key={_products._id}>
												<img className={classes.image} src={_products.IMG} />
											</div>
										</Grid>
										<Grid item xs={12} sm container>
											<Grid item xs container direction="column" spacing={2}>
												<Grid item xs>
													<Typography gutterBottom variant="h5" component="h2">
														{_products.Title}
													</Typography>
													<Grid container justify="space-between">
														<Typography inline variant="subtitle1" align="left">
															<span className={classes.actualPrice}>
																{currencyFormatter.format(_products.Price, {
																	code: "USD",
																})}
															</span>
															<span className={classes.discountPrice}>
																{" "}
																{_products.Discount}%
															</span>
														</Typography>
														<Typography
															inline
															variant="subtitle1"
															align="right"
														>
															{currencyFormatter.format(
																_products.DiscountPrice,
																{ code: "USD" }
															)}
														</Typography>
													</Grid>
													<Typography
														variant="body1"
														gutterBottom
														color="textSecondary"
													>
														{_products.Description}
													</Typography>
													<div className={classes.paperBox}>
														<Paper
															className={classes.counters}
															variant="outlined"
															onClick={decQuantity}
														>
															<RemoveIcon fontSize="small" />
														</Paper>
														<Paper
															className={classes.counters}
															variant="outlined"
														>
															{Quantity}
														</Paper>
														<Paper
															className={classes.counters}
															variant="outlined"
															onClick={() => setQuantity(Quantity + 1)}
														>
															<AddIcon fontSize="small" />
														</Paper>
													</div>
												</Grid>
											</Grid>
										</Grid>
										<Grid item>
											<Button
												size="small"
												variant="contained"
												color="secondary"
												onClick={() =>
													props.ADDTOCART({ ...Product[0], Quantity: Quantity })
												}
											>
												add to cart +
											</Button>
										</Grid>
									</Grid>
								</div>
							);
					  })
					: null}
			</Paper>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		ADDTOCART: (payload) => dispatch(actionCreators.AddToCart(payload)),
	};
};

export default connect(null, mapDispatchToProps)(Details);
