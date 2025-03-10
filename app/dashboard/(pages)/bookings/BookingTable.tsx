"use client"
import { useState } from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Calendar } from "lucide-react"
import { ServiceStatus } from "@prisma/client"

// Define the booking data type
interface ServiceBooking {
  id: string
  serviceDate: Date
  userId: string
  userName: string
  machineId: string
  machineName: string
  serviceType: string
  status: ServiceStatus
  technicianName?: string
}

// Format date without external libraries
const formatDate = (date: Date): string => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

// Column definitions as a function (not exported at module level)
function getColumns(): ColumnDef<ServiceBooking>[] {
  return [
    {
      accessorKey: "serviceDate",
      header: "Date & Time",
      cell: ({ row }) => {
        const date = row.getValue("serviceDate") as Date
        return (
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-gray-500" />
            {formatDate(date)}
          </div>
        )
      },
    },
    {
      accessorKey: "userName",
      header: "Customer",
    },
    {
      accessorKey: "machineName",
      header: "Machine",
    },
    {
      accessorKey: "serviceType",
      header: "Service Type",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as ServiceStatus
        
        return (
          <Badge
            variant={
              status === "COMPLETED" ? "outline" :
              status === "IN_PROGRESS" ? "destructive" :
              status === "SCHEDULED" ? "default" :
              "destructive"
            }
          >
            {status.replace("_", " ")}
          </Badge>
        )
      },
    },
    {
      accessorKey: "technicianName",
      header: "Technician",
      cell: ({ row }) => {
        const technician = row.getValue("technicianName") as string | undefined
        return technician || "Unassigned"
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
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(booking.id)}>
                Copy booking ID
              </DropdownMenuItem>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Assign technician</DropdownMenuItem>
              <DropdownMenuItem>Update status</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Cancel booking</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
}

export default function ServiceBookingsTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  
  // Sample data for service bookings
  const data: ServiceBooking[] = [
    {
      id: "booking-001",
      serviceDate: new Date(2025, 2, 4, 10, 0),
      userId: "user-001",
      userName: "Emma Thompson",
      machineId: "machine-001",
      machineName: "BrewMaster X5000",
      serviceType: "Annual Maintenance",
      status: "SCHEDULED",
      technicianName: "John Smith"
    },
    {
      id: "booking-002",
      serviceDate: new Date(2025, 2, 5, 14, 30),
      userId: "user-002",
      userName: "Michael Johnson",
      machineId: "machine-002",
      machineName: "Espresso Pro 2000",
      serviceType: "Descaling",
      status: "COMPLETED",
      technicianName: "Sarah Lee"
    },
    {
      id: "booking-003",
      serviceDate: new Date(2025, 2, 3, 9, 0),
      userId: "user-003",
      userName: "Alex Rodriguez",
      machineId: "machine-003",
      machineName: "CafeMaker Supreme",
      serviceType: "Repair",
      status: "IN_PROGRESS",
      technicianName: "David Kim"
    },
    {
      id: "booking-004",
      serviceDate: new Date(2025, 2, 2, 13, 0),
      userId: "user-004",
      userName: "Lisa Chen",
      machineId: "machine-004",
      machineName: "GrindMaster 3000",
      serviceType: "Blade Replacement",
      status: "COMPLETED",
      technicianName: "Maria Garcia"
    },
    {
      id: "booking-005",
      serviceDate: new Date(2025, 2, 6, 11, 15),
      userId: "user-005",
      userName: "James Wilson",
      machineId: "machine-005",
      machineName: "BrewMaster X3000",
      serviceType: "Initial Setup",
      status: "SCHEDULED",
    },
  ]

  const columns = getColumns();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Service Bookings</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
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
  )
}