import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface StatsCardProps {
  title: string;
  value: number;
  icon: SvgIconComponent;
  color: string;
  bgColor: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
  bgColor,
}: StatsCardProps) {
  return (
    <Card>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar sx={{ bgcolor: bgColor, color: color }}>
          <Icon />
        </Avatar>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
