'use client';
import { Switch } from "@/components/ui/switch"


interface prop {
  setHideIpAddress: (value: boolean) => void,
  HideIpAddress: boolean
}

export default function SwitchDemo({ setHideIpAddress, HideIpAddress }: prop) {

  return (
    <div className="flex items-center space-x-2 ">
      <Switch
        id="airplane-mode"
        onClick={() => setHideIpAddress(!HideIpAddress)} />
    </div>
  )
}
