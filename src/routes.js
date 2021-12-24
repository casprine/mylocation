import { Routes, Route } from 'react-router-dom';
import { CategoryListingScreen } from './features/category';
import { LocationFormScreen, LocationListingScreen, LocationDetailScreen } from './features/locations';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/locations" element={<LocationListingScreen />}></Route>
      <Route path="/locations/:id" element={<LocationDetailScreen />} />
      <Route path="/locations/:id/edit" element={<LocationFormScreen />} />
      <Route path="/locations/new" element={<LocationFormScreen />} />
      <Route path="/categories" element={<CategoryListingScreen />} />
    </Routes>
  );
};
