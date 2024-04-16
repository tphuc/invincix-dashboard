interface PropsT {
  color: "primary" | "destructive" | "danger";
  title: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function Chip(props: PropsT) {
  return (
    <span className="flex items-center justify-center space-x-4 py-2 px-3 rounded-full border border-[#A1A1A1]">
      {props.startIcon && <span>{props.startIcon}</span>}
      <span
        className="text-sm"
        style={{
          color:
            props.color == "primary"
              ? "#43EC9B"
              : props.color == "destructive"
              ? "#FF2E2E"
              : "#E5C520",
        }}
      >
        {props.title}
      </span>
      {props.endIcon && <span>{props.endIcon}</span>}
    </span>
  );
}
