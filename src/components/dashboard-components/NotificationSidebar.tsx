import React, { useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "../../lib/utils";
import { useUIStore } from "../../store/ui";
import {
  notifications,
  activities,
  contacts,
  NotificationItem as NotificationItemType,
  ActivityItem,
  Contact,
} from "../../data";

// Notification item component
const NotificationItem: React.FC<{ notification: NotificationItemType }> = ({
  notification,
}) => {
  const getIconBg = (type: string) => {
    switch (type) {
      case "bug":
        return "bg-blue-100 text-blue-600";
      case "user":
        return "bg-gray-100 text-gray-600";
      case "subscription":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg transition-colors duration-200 bg-transparent"
      )}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          getIconBg(notification.type)
        )}
      >
        {notification.icon}
      </div>

      <div className="flex-1 min-w-0">
        <p className="notification-sidebar-text">{notification.title}</p>
        <p className="notification-timestamp mt-1">{notification.timestamp}</p>
      </div>
    </div>
  );
};

// Activity item component
const ActivityItemComponent: React.FC<{
  activity: ActivityItem;
  index: number;
}> = ({ activity, index }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
          <img
            src={activity.user.avatar}
            alt={activity.user.name}
            className="w-6 h-6 rounded-full object-cover"
          />
        </div>
        {index !== activities.length - 1 && (
          <div className="w-px h-3.5 bg-neutral-200 mt-2" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-neutral-900">
          <span className="notification-sidebar-text"> {activity.action}</span>{" "}
        </p>
        <p className="notification-timestamp mt-1 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {activity.timestamp}
        </p>
      </div>
    </div>
  );
};

// Contact item component
const ContactItem: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <div className="flex items-center p-1 gap-2 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
      <div className="relative">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        {contact.isOnline && (
          <div
            className={cn(
              "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white",
              contact.status === "active" ? "bg-green-500" : "bg-yellow-500"
            )}
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="notification-sidebar-text">{contact.name}</p>
      </div>
    </div>
  );
};

// Notification sidebar component
export const NotificationSidebar: React.FC = () => {
  const { notificationOpen } = useUIStore();

  return (
    <div
      className={`h-full flex flex-col p-5 gap-6 
  transition-all duration-300 ease-in-out
  ${notificationOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex-1 overflow-y-auto scrollbar-hide gap-2">
        <div className="notification-heading mb-2">Notification</div>
        <div className="space-y-1">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>

        <div className="">
          <div className="notification-heading mb-2">Activity</div>
          <div className="space-y-1">
            {activities.map((activity, index) => (
              <div key={activity.id}>
                <ActivityItemComponent activity={activity} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <div className="notification-heading ">Contact</div>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
};
