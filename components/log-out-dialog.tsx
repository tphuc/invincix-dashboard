"use client";

import { Button, Dialog } from "@/components/common";
import { signOut } from "next-auth/react";

interface PropsT {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function LogOutDialog(props: PropsT) {
  return (
    <Dialog
      open={props.open}
      title="Are you sure you want to log out?"
      content={<></>}
      description=""
      footer={
        <div className="flex items-center justify-end space-x-3">
          <Button onClick={() => props.setOpen(false)} variant="outline">
            Cancel
          </Button>
          <Button onClick={() => signOut()}>Logout</Button>
        </div>
      }
    ></Dialog>
  );
}
