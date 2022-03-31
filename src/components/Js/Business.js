import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./style/All.css";
import axios from "axios";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Business = () => {
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    const loadNewsBusiness = async () => {
      const responseBusiness = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=391b845c95b64b0ea4a5c67fe7d31a41"
      );
      setBusiness(responseBusiness.data.articles);
      console.log(responseBusiness.data);
    };
    loadNewsBusiness();
  }, []);
  return (
    <>
      <div className="container my-4">
        <div className="row">
            <h1>Posts</h1>
          {business &&
            business.map((item, index) => {
              return (
                <>
                  <div className="col-md-4 d-flex my-3">
                    <Card sx={{ maxWidth: 345 }} key={index}>
                      <CardHeader
                        avatar={<Avatar style={{backgroundColor:"#212529"}} aria-label="recipe"></Avatar>}
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={item.author}
                        subheader={item.publishedAt}
                      />
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={item.urlToImage}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Business;
