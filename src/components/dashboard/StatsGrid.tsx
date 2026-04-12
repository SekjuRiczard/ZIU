import { Grid } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import StatsCard from './StatsCard';
import { useTodos } from '../../app/context/TodoContext';

export default function StatsGrid() {
  const { todos } = useTodos();

  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <StatsCard
          title="Wszystkie"
          value={total}
          icon={FormatListBulletedIcon}
          color="#1976d2"
          bgColor="#e3f2fd"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatsCard
          title="Ukończone"
          value={completed}
          icon={CheckCircleIcon}
          color="#388e3c"
          bgColor="#e8f5e9"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <StatsCard
          title="Oczekujące"
          value={pending}
          icon={RadioButtonUncheckedIcon}
          color="#f57c00"
          bgColor="#fff3e0"
        />
      </Grid>
    </Grid>
  );
}