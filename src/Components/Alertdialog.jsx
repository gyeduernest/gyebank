"use client";
import React from "react";
import { Button, Dialog, DialogPanel, Title } from "@tremor/react";

export  function Alertdialog(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="text-center px-16 py-10">
        <Button onClick={() => setIsOpen(true)} className="flex px-10"  >
          {props.CTA}
        </Button>
      </div>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <Title className="mb-3">{props.title}</Title>
          <div>
            {props.message}
          </div>
          <div className="mt-3 flex justify-center ">
            <Button className="text-red-500 border bg-white mr-5 hover:text-white " onClick={() => setIsOpen(false)}>
              cancel
            </Button>
            <Button className="" onClick={() => setIsOpen(false)}>
              Start Process
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}