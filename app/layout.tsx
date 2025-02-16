"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  CssBaseline,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
} from "@mui/material"
import {
  Dashboard as DashboardIcon,
  CalendarToday as CalendarIcon,
  Book as BookIcon,
  AssignmentTurnedIn as AssignmentIcon,
  BarChart as BarChartIcon,
  Timer as TimerIcon,
  SmartToy as SmartToyIcon,
  LocalLibrary as LibraryIcon,
  Help as HelpIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material"
import Link from "next/link"
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext"
import { TimerSettingsProvider } from "@/contexts/TimerSettingsContext"
import { TimerProvider } from "@/contexts/TimerContext"
import { TextbookProvider, useTextbook } from "@/contexts/TextbookContext"

const drawerWidth = 240

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/signup"
  const { mode, toggleColorMode, scheduledTheme } = useTheme()
  const { isTextbookOpen } = useTextbook()

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, href: "/" },
    { text: "Schedule", icon: <CalendarIcon />, href: "/schedule" },
    { text: "Courses", icon: <BookIcon />, href: "/courses" },
    { text: "Assignments", icon: <AssignmentIcon />, href: "/assignments" },
    { text: "Grades", icon: <BarChartIcon />, href: "/grades" },
    { text: "Study Timer", icon: <TimerIcon />, href: "/study-timer" },
    { text: "AI Coach", icon: <SmartToyIcon />, href: "/ai-coach" },
    { text: "Resource Library", icon: <LibraryIcon />, href: "/resource-library" },
    { text: "Support", icon: <HelpIcon />, href: "/support" },
    { text: "Settings", icon: <SettingsIcon />, href: "/settings" },
    { text: "Logout", icon: <LogoutIcon />, href: "/login" },
  ]

  const drawer = (
    <div>
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", my: 2 }}>
          <Image
            src={
              mode === "light"
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1h7AsPVzmFcMAVxvF5RDXRnnXO5VhM.png"
                : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wt0xz484LuNz7HU6CqgwqvlCX2pJ31.png"
            }
            alt="Study Buddy Logo"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "0.75rem", // Approximately 12px (13px - 1px)
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
        <IconButton onClick={toggleColorMode} color="inherit" disabled={scheduledTheme.enabled}>
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </div>
  )

  // This is a placeholder for actual authentication logic
  const isAuthenticated = true

  return (
    <>
      <CssBaseline />
      {!isAuthenticated || isAuthPage ? (
        children
      ) : (
        <Box sx={{ display: "flex" }}>
          {!isTextbookOpen && (
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
          )}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: isTextbookOpen ? "100%" : { sm: `calc(100% - ${drawerWidth}px)` },
              minHeight: "100vh",
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <TimerSettingsProvider>
            <TimerProvider>
              <TextbookProvider>
                <Layout>{children}</Layout>
              </TextbookProvider>
            </TimerProvider>
          </TimerSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
