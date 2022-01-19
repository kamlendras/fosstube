

const Itema = [
    {
      
      text: "Home",
      icon: < HomeIcon />,
    
    },
    {
      text: "Code",
      icon: <CodeIcon />,
    },
    {
      text: "Courses",
      icon: <BookIcon />,

    },
    {
      text: "Explore",
      icon: <ExploreIcon />,

    }
  ];


   
  
 
    const Itemb = [
      {
        text: "Favorites",
        icon: < FavoriteIcon />,
      
      },
      {
        text: "Bookmark",
        icon: <BookmarksIcon />,
    
      }
  
    ];
  


    const Itemc = [
      {
        text: "Ask",
        icon: <QuickreplyIcon />
      }
    ];
  

 
    const Itemd = [
      {
        text: "Help",
        icon: < ContactSupportIcon />
      },
      {
        text: "FeedBack",
        icon: <FeedbackIcon />,
    
      }
    ];

    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
    
    
    
    
    
    
         
            <List>
              {Itema.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          
          <Divider />
      
            <List>
              {Itemb.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
    
          <Divider />
            <List>
              {Itemc.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
         
          <Divider />
         
            <List>
              {Itemd.map((item, index) => {
                const { text, icon, onClick } = item;
                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
        
    
    
    
    
    
    
        </Box>
      );

  

