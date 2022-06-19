import Head from "next/head";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
function index() {
  return (
    <div>
      <Head>
        <title>Newsroom</title>
        <meta
          name="description"
          content="Arrow Nap| Arrow Nap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <body class="bg-neutral-50 ...">
        <h1 class="ml-2 underline decoration-4">Newsroom</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 0, sm: 1, md: 0 }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <span>
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    component="img"
                    alt="oi"
                    height="140"
                    image="https://cdn1.expresscomputer.in/wp-content/uploads/2021/03/24161745/EC_Artificial_Intelligence_AI_750.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Artificial intelligence challenges what it means to be
                      creative
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      When British artist Harold Cohen met his first computer in
                      1968, he wondered if the machine might help solve a
                      mystery that had long puzzled him: How can we look at a
                      drawing, a few little scribbles, and see a face? Five
                      years later, he devised a robotic artist called AARON to
                      explore this idea. He equipped it with basic rules for
                      painting and for how body parts are represented in
                      portraiture and then set it loose making art.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </span>
            </Grid>

            <Grid item xs={2} sm={2} md={2} key={index}>
            <span>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://cdn1.expresscomputer.in/wp-content/uploads/2021/03/24161745/EC_Artificial_Intelligence_AI_750.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Artificial intelligence challenges what it means to be creative
              </Typography>
              <Typography variant="body2" color="text.secondary">
                When British artist Harold Cohen met his first computer in 1968,
                he wondered if the machine might help solve a mystery that had
                long puzzled him:
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </span>
          </Grid>
          <Grid item xs={2} sm={2} md={2} key={index}>
          <span>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://cdn1.expresscomputer.in/wp-content/uploads/2021/03/24161745/EC_Artificial_Intelligence_AI_750.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Artificial inte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                When British ar
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </span>
          </Grid>
          
          <Grid item xs={2} sm={2} md={2} key={index}>
          <span>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://cdn1.expresscomputer.in/wp-content/uploads/2021/03/24161745/EC_Artificial_Intelligence_AI_750.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Artificial intelligence challenges what it means to be creative
              </Typography>
              <Typography variant="body2" color="text.secondary">
                When British artist Harold Cohen met his first computer in 1968,
                he wondered if the machine might help solve a mystery that had
                long puzzled
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </span>
          </Grid>
          </Grid>
        </Box>

        
       
     
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    12 Jun 2019
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    12 Jun 2019
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Meditation bushwick direct trade taxidermy shaman
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Woke master cleanse drinking vinegar salvia
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default index;
