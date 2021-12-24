import { Routes, Route } from 'react-router-dom';
import { LocationListingScreen } from './features/locations';
import { CollectionListingScreen } from './features/collections';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/collections" element={<CollectionListingScreen />} />
      <Route path="/locations" element={<LocationListingScreen />} />
    </Routes>
  );
};
