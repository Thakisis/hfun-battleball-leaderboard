import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function DialogItem() {
  return (
    <Dialog open={true} isRouterBack>
      <DialogContent className="sm:max-w-[425px]" autofocus={false}>
        <DialogHeader className="space-y-1 text-center">
          <DialogTitle className="text-2xl">Titulo</DialogTitle>
          <DialogDescription>descripcion</DialogDescription>
        </DialogHeader>
        <div>contenido</div>
        <DialogFooter>footer</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
