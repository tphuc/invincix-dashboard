import { RefreshCcw } from "lucide-react";

export default function Spin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <RefreshCcw className="h-10 w-10 animate-spin" />
    </div>
  );
}
