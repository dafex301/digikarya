import { Info, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

interface NotificationProps {
  message: string;
  type?: "success" | "warning" | "error" | "info";
  className?: string;
  darkMode?: boolean;
}

export default function Notification({
  message,
  type = "info",
  className,
  darkMode = true,
}: NotificationProps) {
  let bgColor, textColor, Icon;

  switch (type) {
    case "success":
      bgColor = "bg-green-500/30";
      textColor = darkMode
        ? "text-green-900 dark:text-green-200"
        : "text-green-900";
      Icon = CheckCircle;
      break;
    case "warning":
      bgColor = "bg-yellow-500/30";
      textColor = darkMode
        ? "text-yellow-900 dark:text-yellow-200"
        : "text-yellow-900";
      Icon = AlertTriangle;
      break;
    case "error":
      bgColor = "bg-red-500/30";
      textColor = darkMode ? "text-red-900 dark:text-red-200" : "text-red-900";
      Icon = AlertCircle;
      break;
    case "info":
    default:
      bgColor = "bg-blue-500/30";
      textColor = darkMode
        ? "text-blue-900 dark:text-blue-200"
        : "text-blue-900";
      Icon = Info;
      break;
  }

  return (
    <div
      className={`${bgColor} p-3 rounded-md flex items-center gap-x-2 text-sm ${textColor} ${className}`}
    >
      <Icon />
      <p className="font-medium">{message}</p>
    </div>
  );
}
