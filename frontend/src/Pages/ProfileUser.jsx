import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider, DashboardLayout, PageContainer } from '@toolpad/core';
import HomeIcon from '@mui/icons-material/Home';
import UploadIcon from '@mui/icons-material/Upload';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FaceIcon from '@mui/icons-material/Face';

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'dashboard',
    title: 'Diario',
    icon: <ImportContactsIcon />,
  },
  {
    segment: 'orders',
    title: 'Publicar',
    icon: <UploadIcon  />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Análisis',
  },
  {
    segment: 'reports',
    title: 'Reportes',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Visitados',
        icon: <FaceIcon />,
      },
      {
        segment: 'traffic',
        title: 'Me gusta',
        icon: <FavoriteIcon />,
      },
    ],
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function ProfileUser(props) {
  

  const router = useDemoRouter('/home'); // Ruta inicial configurada a "/dashboard"

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <PageContainer>
          {/* Bienvenida visible solo en la página inicial */}
          {router.pathname === '/home' && (
            <Box
              sx={{
                padding: 2,
                textAlign: 'center',
                backgroundColor: '#e0f7fa',
                borderRadius: 2,
                marginBottom: 2,
              }}
            >
              <Typography variant="h5" component="h1">
                ¡Bienvenido a SDAY!
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                Tu plataforma de análisis y gestión.
              </Typography>
            </Box>
          )}

          <Box>
            <Grid container spacing={2}>
              <Grid size={5} />
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>
              <Grid size={4}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={8}>
                <Skeleton height={100} />
              </Grid>

              <Grid size={12}>
                <Skeleton height={150} />
              </Grid>
              <Grid size={12}>
                <Skeleton height={14} />
              </Grid>

              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
              <Grid size={3}>
                <Skeleton height={100} />
              </Grid>
            </Grid>
          </Box>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
