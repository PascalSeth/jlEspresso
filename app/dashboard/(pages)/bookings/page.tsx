"use client"

import * as React from "react"
import { useState, useEffect } from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Calendar, Clock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Define the booking data type based on Prisma schema
export type ServiceBooking = {
  id: string
  scheduledDate: Date
  recurrence: "NONE" | "MONTHLY" | "QUARTERLY" | "SEMI_ANNUALLY" | "ANNUALLY" | null
  notes: string | null
  customerId: string
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string | null
  }
  machineId: string
  machine: {
    serialNumber: string
    purchaseDate: Date
    machineDetails: {
      brand: string
      model: string
      type: string
    }
  }
  serviceId: string
  service: {
    name: string
    price: number
    durationMinutes: number
  }
}

export const columns: ColumnDef<ServiceBooking>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "scheduledDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("scheduledDate"))
      return (
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
          {date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
          <Clock className="ml-4 mr-2 h-4 w-4 text-muted-foreground" />
          {date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      )
    },
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      const customer = row.original.customer
      return (
        <div>
          <div className="font-medium">{customer.firstName} {customer.lastName}</div>
          <div className="text-sm text-muted-foreground">{customer.email}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "machine.machineDetails",
    header: "Machine",
    cell: ({ row }) => {
      const machine = row.original.machine.machineDetails
      return (
        <div>
          <div>{machine.brand} {machine.model}</div>
          <div className="text-xs text-muted-foreground capitalize">{machine.type.toLowerCase().replace('_', ' ')}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "machine.serialNumber",
    header: "Serial Number",
    cell: ({ row }) => <div className="font-mono text-xs">{row.original.machine.serialNumber}</div>,
  },
  {
    accessorKey: "service.name",
    header: "Service Type",
    cell: ({ row }) => <div>{row.original.service.name}</div>,
  },
  {
    accessorKey: "service.durationMinutes",
    header: "Duration",
    cell: ({ row }) => {
      const minutes = row.original.service.durationMinutes
      const hours = Math.floor(minutes / 60)
      const remainingMinutes = minutes % 60
      
      return (
        <div>
          {hours > 0 ? `${hours}h ` : ''}
          {remainingMinutes > 0 ? `${remainingMinutes}m` : hours > 0 ? '' : '0m'}
        </div>
      )
    },
  },
  {
    accessorKey: "recurrence",
    header: "Recurrence",
    cell: ({ row }) => {
      const recurrence = row.getValue("recurrence") as string | null
      if (!recurrence || recurrence === "NONE") {
        return <div className="text-muted-foreground">One-time</div>
      }
      
      return (
        <Badge variant="outline">
          {recurrence.charAt(0).toUpperCase() + recurrence.slice(1).toLowerCase().replace('_', ' ')}
        </Badge>
      )
    },
  },
  {
    accessorKey: "service.price",
    header: "Price",
    cell: ({ row }) => {
      const price = parseFloat(row.original.service.price.toString())
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(booking.id)}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Reschedule</DropdownMenuItem>
            <DropdownMenuItem>Cancel booking</DropdownMenuItem>
            <DropdownMenuItem>Send reminder</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function ServiceBookingsDataTable({ data }: { data: ServiceBooking[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "scheduledDate", desc: false }
  ])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by customer name..."
          value={(table.getColumn("customer")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("customer")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No service bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

// Example page component that uses the ServiceBookingsDataTable
export default function ServiceBookingsPage() {
  const [serviceBookings, setServiceBookings] = useState<ServiceBooking[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/GET/getBookings")

        if (!response.ok) {
          throw new Error("Failed to fetch service bookings.")
        }

        const data = await response.json()
        setServiceBookings(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])



  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="container mx-auto p-4">
            <div className="flex items-center justify-between">
         <h1 className="text-2xl font-bold">Service Bookings</h1>
           
            </div>
        {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      )}
      {serviceBookings.length > 0 ? (
        <ServiceBookingsDataTable data={serviceBookings} />
      ) : (
        <div className="text-center text-muted-foreground">
          No service bookings found.
        </div>
      )}
    </div>
  )
}