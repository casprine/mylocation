import { Routes, Route } from 'react-router-dom';
import { CategoryListingScreen } from './features/category';
import { LocationFormScreen, LocationListingScreen } from './features/locations';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/locations" element={<LocationListingScreen />}></Route>
      <Route path=":id" element={() => <p>hellow ro</p>} />
      <Route path="/locations/:id/edit" element={<LocationFormScreen />} />
      <Route path="/locations/new" element={<LocationFormScreen />} />
      <Route path="/categories" element={<CategoryListingScreen />} />
    </Routes>
  );
};
