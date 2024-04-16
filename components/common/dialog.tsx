import {
  Dialog as SDialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface DialogPropsT {
  children?: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  isTriggerBtn?: boolean;
}

export function Dialog(props: DialogPropsT) {
  return (
    <SDialog open={props?.open}>
      {props?.children && (
        <DialogTrigger asChild={props.isTriggerBtn}>
          {props.children}
        </DialogTrigger>
      )}
      <DialogContent className="border-secondary">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          {props.description && (
            <DialogDescription>{props.description}</DialogDescription>
          )}
        </DialogHeader>
        <div className="max-h-[500px] overflow-y-scroll">{props.content}</div>
        {props.footer && <DialogFooter>{props.footer}</DialogFooter>}
      </DialogContent>
    </SDialog>
  );
}
