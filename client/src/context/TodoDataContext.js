import { createContext } from 'react';
import { todos } from '../__mock-data';

export const TodoDataContext = createContext(todos);