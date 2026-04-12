// src/components/dashboard/DashboardLayout.tsx
import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import { AppHeader } from './AppHeader';

interface DashboardLayoutProps {
  title?: string;
  children: React.ReactNode;
  drawerWidth?: number;
}

export function DashboardLayout({
  title = 'Dashboard',
  children,
  drawerWidth = 240,
}: DashboardLayoutProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: (theme) => theme.palette.grey[100],
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}