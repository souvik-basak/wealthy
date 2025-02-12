"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { accountSchema } from "@/app/lib/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "./ui/switch";
import useFetch from "@/hooks/useFetch";
import { createAccount } from "@/actions/dashboard";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { set } from "date-fns";

export function CreateAccountDrawer({ children }){
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });
  const {
    data: newAccount,
    error,
    fn: createAccountFn,
    loading: createAccountLoading,
  } = useFetch(createAccount);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to create account");
    }
  }, [error]);

  useEffect(() => {
    if (newAccount && !createAccountLoading) {
      toast.success("Account created successfully");
      reset();
      setOpen(false);
    }
  }, [newAccount, createAccountLoading]);


  const onsubmit = async (data) => {
    await createAccountFn(data);
  };
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create new Account</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Account Name
                </label>
                <Input
                  id="name"
                  placeholder="e.g., Main Checking"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="type"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Account Type
                </label>
                <Select
                  onValueChange={(value) => setValue("type", value)}
                  defaultValue={watch("type")}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CURRENT">Current</SelectItem>
                    <SelectItem value="SAVINGS">Savings</SelectItem>
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="text-red-500 text-sm">{errors.type.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Initial Balance
                </label>
                <Input
                  id="balance"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...register("balance")}
                />
                {errors.balance && (
                  <p className="text-red-500 text-sm">
                    {errors.balance.message}
                  </p>
                )}
              </div>
              <div className="flex item-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <label htmlFor="isDefault" className="text-sm font-medium">
                    Set as Default
                  </label>
                  <p className="text-sm text-muted-foreground">
                    This Account will be selected by default for transaction
                  </p>
                </div>
                <Switch
                  id="isDefault"
                  onCheckedChange={(checked) => setValue("isDefault", checked)}
                  checked={watch("isDefault")}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <DrawerClose asChild>
                  <Button
                    type="destructive"
                    className="flex-1 bg-red-100 text-red-600 hover:bg-red-200"
                    onClick={() => {
                      reset();
                      setOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                </DrawerClose>
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={createAccountLoading}
                >
                  {createAccountLoading ? (
                    <>
                      <Loader2 className="mr-2 h4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

