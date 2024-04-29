import React, { useState } from "react";
import RoomCard from "../components/RoomCard";
import Map from "../components/Map";

function PriceBox({ hotel }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div>
      <RoomCard hotel={hotel} setSelectedRoom={setSelectedRoom} />
      {selectedRoom && <Map selectedRoom={selectedRoom} />}
    </div>
  );
}

export default PriceBox;