import { Info, CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

interface NotificationProps {
  message: string;
  type?: "success" | "warning" | "error" | "info";
  className?: string;
}

export default function Notification({
  message,
  type = "info",
  className,
}: NotificationProps) {
  let bgColor, textColor, Icon;

  switch (type) {
    case "success":
      bgColor = "bg-green-500/30";
      textColor = "text-green-900 dark:text-green-200";
      Icon = CheckCircle;
      break;
    case "warning":
      bgColor = "bg-yellow-500/30";
      textColor = "text-yellow-900 dark:text-yellow-200";
      Icon = AlertTriangle;
      break;
    case "error":
      bgColor = "bg-red-500/30";
      textColor = "text-red-900 dark:text-red-200";
      Icon = AlertCircle;
      break;
    case "info":
    default:
      bgColor = "bg-blue-500/30";
      textColor = "text-blue-900 dark:text-blue-200";
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
