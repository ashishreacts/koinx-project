
import React from 'react';
import { Box, Typography } from '../Elements';
type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      {/* <Head title={title} /> */}
      <Box sx={{backgroundColor:"gray"}}>
        <Box>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
};
