import CreateBeans from "@/app/api/POST/beans/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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
import { RoastLevel } from "@prisma/client"
import { useState } from "react"

export function BeanSheet({ refreshBeans }: { refreshBeans: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    const response = await CreateBeans(formData); // Call the server action
    if (response?.success) {
      refreshBeans(); // Refresh table data after success
    }

    setIsSubmitting(false);
  }; // Get all RoastLevel enum values from Prisma client
  const roastLevels = Object.values(RoastLevel);
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add Coffee Beans</Button>
      </SheetTrigger>
      <SheetContent className='z-[9999]'>
        <ScrollArea className="h-full w-fit rounded-md border p-4">
          <SheetHeader>
            <SheetTitle>Add New Coffee Beans</SheetTitle>
            <SheetDescription>
              Add a new coffee bean product to your inventory. Fill in all required details and click save.
            </SheetDescription>
          </SheetHeader>
          
          <form action={handleSubmit}>
            <div className="grid gap-4 py-4">
              {/* Product Info Section */}
              <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" name="name" placeholder="Ethiopian Yirgacheffe" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  placeholder="A bright, citrusy coffee with floral notes and a clean finish." 
                  required 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" name="price" type="number" step="0.01" placeholder="14.99" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input id="stock" name="stock" type="number" placeholder="50" required />
                </div>
              </div>
              <div className="grid gap-2">
  <Label htmlFor="images">Product Images</Label>
  <Input id="images" name="images" type="file" accept="image/*" multiple required />

</div>

              
              {/* Coffee Bean Details Section */}
              <div className="grid gap-2">
                <Label htmlFor="origin">Origin</Label>
                <Input id="origin" name="origin" placeholder="Ethiopia, Yirgacheffe Region" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="roastLevel">Roast Level</Label>
                <Select name="roastLevel" required>
                  <SelectTrigger id="roastLevel">
                    <SelectValue placeholder="Select roast level" />
                  </SelectTrigger>
                  <SelectContent className="z-[9999]">
                    {roastLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level.replace('_', ' ')
                          .split('_')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                          .join(' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="flavorNotes">Flavor Notes</Label>
                <Input 
                  id="flavorNotes" 
                  name="flavorNotes" 
                  placeholder="Citrus, Floral, Honey (comma-separated)" 
                  required 
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="processMethod">Process Method</Label>
                <Input id="processMethod" name="processMethod" placeholder="Washed" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="weightGrams">Weight (grams)</Label>
                <Input id="weightGrams" name="weightGrams" type="number" placeholder="250" required />
              </div>
            </div>
            
            <SheetFooter className="mt-4">
              <SheetClose asChild>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Machine"}
              </Button>              </SheetClose>
            </SheetFooter>
          </form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}