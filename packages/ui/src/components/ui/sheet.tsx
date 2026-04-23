import { Drawer } from "@heroui/react"

/* ══════════════════════════════════════════════════════════════
   HSDNM Sheet — HeroUI v3 Drawer Wrapper
   Replaces @radix-ui/react-dialog with HeroUI Drawer compound.
   Legacy exports preserved for backward compatibility.
══════════════════════════════════════════════════════════════ */

const Sheet = Drawer
const SheetTrigger = Drawer // use <Drawer> with <Button> trigger pattern
const SheetContent = Drawer.Content
const SheetHeader = Drawer.Header
const SheetFooter = Drawer.Footer
const SheetTitle = Drawer.Heading
const SheetClose = Drawer.CloseTrigger

export {
  Sheet,
  Drawer,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetClose,
}
