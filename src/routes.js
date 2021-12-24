import { Routes, Route } from 'react-router-dom';
import { CategoryListingScreen } from './features/category';
import { LocationFormScreen, LocationListingScreen } from './features/locations';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/locations" element={<LocationListingScreen />} />
      <Route path="/locations/new" element={<LocationFormScreen />} />
      <Route path="/categories" element={<CategoryListingScreen />} />
    </Routes>
  );
};
