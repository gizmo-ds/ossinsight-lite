import { cache } from 'react';
import { getAllDashboardNames, getDashboard } from '@/app/api/layout/operations';

export const serverDashboard = cache(getDashboard);

export const serverDashboardNames = cache(getAllDashboardNames);