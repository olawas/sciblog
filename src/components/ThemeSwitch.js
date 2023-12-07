import { MoonIcon } from "@/assets/MoonIcon";
import { SunIcon } from "@/assets/SunIcon";
import {Switch} from "@nextui-org/react";

export default function ThemeSwitch() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      Dark mode
    </Switch>
  );
}
