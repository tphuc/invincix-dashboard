"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useSWR from "swr";
import { Button } from "@/components/ui/button";
import { useSWRConfig } from "swr";
import { useEffect, useRef, useState } from "react";
import { Loader, Loader2, Trash, Trash2 } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useRouter } from "next/navigation";

import { toast, useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRequestAuthenticated } from "@/utils/http";


export function DeleteDatasetForm({
    id,
}: {
    id: string;
}) {
    const router = useRouter();
    const user = useSession()?.data?.user as any;
    const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
    const { fetch: authedFetch } = useRequestAuthenticated();
    const { mutate } = useSWRConfig();
    const closeRef = useRef<any>();

    return (
        <div>
            <AlertDialogHeader>
                <AlertDialogTitle>Do you want to proceed?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action is cannot be undone
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel ref={closeRef}>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={async (event) => {
                        try {
                            event.preventDefault();
                            setIsDeleteLoading(true);

                            const deleted = await authedFetch(
                                `/api/dataset/${id}`,
                                {
                                    method: "DELETE",
                                }
                            );

                            toast({
                                title: "Delete User Sucessfully",
                            });

                            closeRef?.current?.click();

                            // router?.prefetch('/talent-dashboard/my-orders')
                            mutate(
                                key => typeof key === 'string' && key.startsWith('/api/user'),
                                undefined,
                                { revalidate: true }
                            )
                            router.refresh()
                            setIsDeleteLoading(false);
                        } catch (e) {
                            toast({
                                title: "Something went wrong",

                            });
                        }
                    }}
                    className="bg-red-600 focus:ring-red-600"
                >
                    {isDeleteLoading ? (
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Trash2 className="mr-2 h-4 w-4" />
                    )}
                    <span>Delete</span>
                </AlertDialogAction>
            </AlertDialogFooter>
        </div>
    );
}
