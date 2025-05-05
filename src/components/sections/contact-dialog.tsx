import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { OrbButton } from "@/components/ui/custom/orb-button";

interface ContactDialogProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

export function ContactDialog({ trigger, defaultOpen = false }: ContactDialogProps) {
  return (
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger asChild>
        {trigger || <OrbButton variant="primary">Contact sales</OrbButton>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <img
            src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg"
            alt="Close"
            className="h-4 w-4"
          />
          <span className="sr-only">Close</span>
        </DialogClose>

        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-medium text-center">
            Contact sales
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Work email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-xs text-gray-500 mt-1">Please enter a valid work email</div>
            </div>

            <div>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option value="" disabled selected>Company type</option>
                <option value="startup">Startup</option>
                <option value="smb">SMB</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option value="" disabled selected>Number of employees</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
              <div className="text-xs text-gray-500 mt-1">Please select a range of employees</div>
            </div>

            <div>
              <textarea
                placeholder="How can we help? (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>

            <div className="text-xs text-gray-500">
              By submitting this form, I agree to Orb's <a href="https://www.withorb.com/website-terms-of-use" className="text-orbBlue hover:underline">Website Terms of Use</a> and <a href="https://www.withorb.com/privacy-policy" className="text-orbBlue hover:underline">Privacy Policy</a>. I understand that Orb may use my information to send me product news and marketing communications. I can unsubscribe at any time through the unsubscribe link in any message or by contacting Orb directly.
            </div>

            <div>
              <OrbButton variant="primary" className="w-full py-3">
                Submit
              </OrbButton>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
