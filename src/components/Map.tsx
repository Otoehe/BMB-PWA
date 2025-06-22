import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { users } from '../data/users';

// Виправляємо шлях до іконок Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  return (
    <MapContainer center={[50.4501, 30.5234]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      {users.map(user => (
        <Marker key={user.id} position={[user.lat, user.lng]}>
          <Popup>
            <img src={user.avatarUrl} alt={user.name} width="50" /><br />
            <strong>{user.name}</strong><br />
            <em>{user.role}</em><br />
            {user.description}<br />
            <video src={user.storyVideoUrl} width="200" controls />
          </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
};

export default MapComponent;
