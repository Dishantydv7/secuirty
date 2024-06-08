
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Lost and Found</h1>
      </header>
      <main className="flex-1 p-8 space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Upload Lost Item</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="image">Upload Image</Label>
              <Input type="file" id="image" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" id="phone" />
            </div>
            <div className="col-span-2 flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Lost Items</h2>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <img
                      src="/placeholder.svg"
                      width="64"
                      height="64"
                      alt="Lost Item"
                      className="aspect-square rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">Blue Backpack</div>
                    <p className="text-gray-500 text-sm">Lost at the park on May 15th.</p>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">John Doe</div>
                    <p className="text-gray-500 text-sm">johndoe@example.com | 555-1234</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Claim
                      </Button>
                      <Button variant="outline" size="sm">
                        Found
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <img
                      src="/placeholder.svg"
                      width="64"
                      height="64"
                      alt="Lost Item"
                      className="aspect-square rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">Red Umbrella</div>
                    <p className="text-gray-500 text-sm">Lost at the bus stop on June 1st.</p>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">Jane Smith</div>
                    <p className="text-gray-500 text-sm">janesmith@example.com | 555-5678</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Claim
                      </Button>
                      <Button variant="outline" size="sm">
                        Found
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <img
                      src="/placeholder.svg"
                      width="64"
                      height="64"
                      alt="Lost Item"
                      className="aspect-square rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">Black Sunglasses</div>
                    <p className="text-gray-500 text-sm">Lost at the mall on July 10th.</p>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">Michael Johnson</div>
                    <p className="text-gray-500 text-sm">mjohnson@example.com | 555-9012</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Claim
                      </Button>
                      <Button variant="outline" size="sm">
                        Found
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  )
}