import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import { Link, withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Product(props) {
  const { items } = props;
  const classes = useStyles();

  return (
    <>
      {items ? (
        <div className="container">
          <div className="row">
            {items.map((product) => (
              <div key={product.barcode} className="col-6 mt-3">
                <Card className={classes.root}>
                  <CardHeader
                    action={<IconButton aria-label="settings"></IconButton>}
                    title={product.name}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image={product.image}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Link
                      to={`/shop/category/${product.category}/${product.barcode}/modal`}
                    >
                      View
                    </Link>{" "}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default withRouter(Product);
