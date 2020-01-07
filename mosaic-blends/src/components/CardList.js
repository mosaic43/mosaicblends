import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { containers } from "./../data/data.js";
export default function CardList() {
  return (
    <div className="row cardContainer">
      {containers.map(function(container, index) {
        return (
          <div key={index} className="col-3 cardEach">
            <Card style={{ height: "60" }}>
              <CardActionArea>
                <img
                  style={{ maxWidth: "90", height: "50px" }}
                  src={container.image}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {container.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
                <Button size="small" color="primary">
                  Add
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions> */}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
