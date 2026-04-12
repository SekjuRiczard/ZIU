import React, { useMemo } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Todo, FilterType } from "../../types/todo";

interface TodoListProps {
  todos: Todo[];
  filter?: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, filter = "all", onToggle, onDelete }: TodoListProps) {
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "all":
      default:
        return todos;
    }
  }, [todos, filter]);

  if (filteredTodos.length === 0) {
    return (
      <Typography variant="body1" sx={{ textAlign: "center", mt: 4, color: "text.secondary" }}>
        Brak zadań. Dodaj pierwsze!
      </Typography>
    );
  }

  return (
    <Paper elevation={2}>
      <List>
        {filteredTodos.map((todo) => (
          <ListItem
            key={todo.id}
            divider
            secondaryAction={
              <IconButton 
                edge="end" 
                aria-label="Usuń zadanie" 
                onClick={() => onDelete(todo.id)}
              >
                <DeleteOutlineIcon color="error" />
              </IconButton>
            }
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                inputProps={{ "aria-label": todo.text }}
              />
            </ListItemIcon>
            
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "text.disabled" : "text.primary",
              }}
            />

            {todo.completed && (
              <Chip 
                label="Gotowe" 
                size="small" 
                color="success" 
                variant="outlined" 
                sx={{ mr: 1 }} 
              />
            )}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}