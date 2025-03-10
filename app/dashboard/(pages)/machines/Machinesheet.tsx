import CreateMachines from "@/app/api/POST/machines/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MachineType } from "@prisma/client"

export function MachineSheet() {
  // Get all MachineType enum values from Prisma client
  const machineTypes = Object.values(MachineType);
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add Machine</Button>
      </SheetTrigger>
      <SheetContent className='z-[9999]'>
        <ScrollArea className="h-full w-fit rounded-md border p-4">
          <SheetHeader>
            <SheetTitle>Add New Machine</SheetTitle>
            <SheetDescription>
              Add a new coffee machine to your inventory. Fill in all required details and click save.
            </SheetDescription>
          </SheetHeader>
          <form action={CreateMachines}>
            <div className="grid gap-4 py-4">
              {/* Product Info Section */}
              <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" name='name' placeholder="Espresso Machine X5000" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input 
                  id="description" 
                  name="description" 
                  placeholder="Professional-grade espresso machine with dual boilers" 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" name='price' type="number" placeholder="1299.99" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input id="stock" name='stock' type="number" placeholder="10" required />
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="image">Product Image</Label>
               <Input id="images" name="images" type="file" accept="image/*" multiple required />

              </div>
              
              {/* Machine Details Section */}
              <div className="grid gap-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" name="brand" placeholder="BrewMaster" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="model">Model</Label>
                <Input id="model" name="model" placeholder="X5000" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="machineType">Machine Type</Label>
                <Select name="machineType" required>
                  <SelectTrigger id="machineType">
                    <SelectValue placeholder="Select machine type" />
                  </SelectTrigger>
                  <SelectContent className="z-[9999]">
                    {machineTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.replace('_', ' ').toLowerCase()
                          .split(' ')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="warrantyMonths">Warranty (Months)</Label>
                <Input id="warrantyMonths" name="warrantyMonths" type="number" placeholder="24" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input id="dimensions" name="dimensions" placeholder="30x40x25 cm" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input id="weight" name="weight" type="number" step="0.01" placeholder="9.5" required />
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="voltage">Voltage</Label>
                <Input id="voltage" name="voltage" placeholder="220-240V" required />
              </div>
            </div>
            
            <SheetFooter className="mt-4">
              <SheetClose asChild>
                <Button type="submit">Save Machine</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}