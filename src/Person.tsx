import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Person({
  name,
  title,
  description,
  profile_picture,
  long_description = "",
  weblink = "",
  twitter = "",
  instagram = "",
  facebook = "",
  linkedin = "",
  github = "",
  email = "",
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 350, minHeight: 500, minWidth: 330 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "black" }}
            aria-label={name}
            src={profile_picture}
          >
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={title}
      />
      <CardMedia
        component="img"
        height="300"
        image={profile_picture}
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {email && (
          <IconButton
            aria-label="Email"
            href={`mailto: ${email}`}
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
        )}
        {weblink && (
          <IconButton aria-label="Web" href={weblink} target="_blank">
            <LinkIcon />
          </IconButton>
        )}
        {linkedin && (
          <IconButton aria-label="linkedin" href={linkedin} target="_blank">
            <LinkedInIcon />
          </IconButton>
        )}
        {twitter && (
          <IconButton aria-label="twitter" href={twitter} target="_blank">
            <TwitterIcon />
          </IconButton>
        )}
        {github && (
          <IconButton aria-label="github" href={github} target="_blank">
            <GitHubIcon />
          </IconButton>
        )}
        {instagram && (
          <IconButton aria-label="instagram" href={instagram} target="_blank">
            <InstagramIcon />
          </IconButton>
        )}
        {facebook && (
          <IconButton aria-label="facebook" href={facebook} target="_blank">
            <FacebookIcon />
          </IconButton>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{long_description}</CardContent>
      </Collapse>
    </Card>
  );
}
