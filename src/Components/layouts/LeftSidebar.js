import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Toolbar } from '@material-ui/core'
import SidebarMenuItem from '../common/SidebarMenuItem'

const LeftSidebar = ({ isPermanent, open, handleSidebarOpen, menuItems }) => {
  const classes = useStyles()
  return (
    <Drawer
      anchor="left"
      className={classes.drawer}
      open={open}
      variant={isPermanent ? 'permanent' : 'temporary'}
      onClose={handleSidebarOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />

      <div className={classes.drawerContainer}>
        {menuItems.map((menuItem, index) => {
          const { label, subMenus, path } = menuItem
          return (
            <SidebarMenuItem
              key={index}
              label={label}
              path={path}
              subMenus={subMenus}
            />
          )
        })}
      </div>
    </Drawer>
  )
}

export default LeftSidebar

// styles

const drawerWidth = 270

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: '#fff',
    flexShrink: 0,
    fontSize: '0.82rem',
    color: 'rgba(0,0,0,0.8)',
    overflow: 'hidden',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  sidebarMenu: {
    paddingLeft: '2rem',
    transition: 'all .1s ease-in',
    borderRadius: '1rem',
    marginRight: '1rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: ' #f5f5f5',
      color: '#000',
    },
  },
}))
