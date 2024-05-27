import React from "react";
import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotifications
} from "../store/atoms";

function Navbar() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const totalNoti = useRecoilValue(totalNotifications)
  
  return (
    <div>
      <div>
        <button>Home </button>

        <button>
          My Network(
          {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
        </button>
        <button>Jobs({jobsCount})</button>
        <button>Messaging({messageCount})</button>
        <button>Notifications({notificationCount})</button>

        <button>Me({totalNoti})</button>
      </div>
    </div>
  );
}

export default Navbar;
