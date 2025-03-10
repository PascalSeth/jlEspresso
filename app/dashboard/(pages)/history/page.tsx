"use client"

import * as React from "react"
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
import { 
  ArrowUpDown, 
  ChevronDown, 
  Calendar,
  Coffee, 
  Package, 
  Settings, 
  MoreHorizontal 
} from "lucide-react"

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

// Define the Transaction type based on the Order schema
export type OrderTransaction = {
  id: string
  orderDate: Date
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "CANCELLED"
  totalAmount: number
  paymentMethod: "CREDIT_CARD" | "CASH" | "BANK_TRANSFER" | "MOBILE_PAYMENT" | null
  notes: string | null
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
  }
  orderItems: {
    id: string
    quantity: number
    unitPrice: number
    product: {
      id: string
      name: string
      category: "COFFEE_BEAN" | "MACHINE" | "ACCESSORY"
    }
  }[]
}

// Format date without external libraries
const formatDate = (date: Date): string => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

// Define the status badge color mapping
const statusColorMap: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  PROCESSING: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  COMPLETED: "bg-green-100 text-green-800 hover:bg-green-100/80",
  CANCELLED: "bg-red-100 text-red-800 hover:bg-red-100/80"
}

// Define category icon mapping
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "COFFEE_BEAN":
      return <Coffee className="h-4 w-4" />;
    case "MACHINE":
      return <Settings className="h-4 w-4" />;
    case "ACCESSORY":
      return <Package className="h-4 w-4" />;
    default:
      return null;
  }
}

// Helper to get primary product category
const getPrimaryCategory = (items: OrderTransaction["orderItems"]) => {
  const categoryCounts = items.reduce((acc, item) => {
    const category = item.product.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])[0][0];
}

export const columns: ColumnDef<OrderTransaction>[] = [
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
    accessorKey: "orderDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = row.getValue("orderDate") as Date
      return (
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4 text-gray-500" />
          {formatDate(date)}
        </div>
      )
    },
    sortingFn: "datetime",
  },
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => {
      return <code className="rounded bg-gray-100 px-2 py-1 text-xs font-mono">
        {(row.getValue("id") as string).substring(0, 8)}
      </code>
    },
  },
  {
    id: "customer",
    header: "Customer",
    cell: ({ row }) => {
      const user = row.original.user;
      return (
        <div>
          <div className="font-medium">{user.firstName} {user.lastName}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      )
    },
  },
  {
    id: "items",
    header: "Items",
    cell: ({ row }) => {
      const items = row.original.orderItems;
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
      const primaryCategory = getPrimaryCategory(items);
      
      return (
        <div className="flex items-center">
          {getCategoryIcon(primaryCategory)}
          <span className="ml-2">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      
      // Format the amount as a currency
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment",
    cell: ({ row }) => {
      const paymentMethod = row.getValue("paymentMethod") as string | null;
      
      if (!paymentMethod) return <span className="text-gray-500">—</span>;
      
      // Format the payment method (replace underscores with spaces and capitalize)
      const formatted = paymentMethod
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, c => c.toUpperCase());
      
      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      
      return (
        <Badge 
          className={statusColorMap[status]}
          variant="outline"
        >
          {status.charAt(0) + status.slice(1).toLowerCase()}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const transaction = row.original;
 
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
              onClick={() => navigator.clipboard.writeText(transaction.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View order details</DropdownMenuItem>
            <DropdownMenuItem>Update status</DropdownMenuItem>
            {transaction.status !== "CANCELLED" && transaction.status !== "COMPLETED" && (
              <DropdownMenuItem className="text-red-600">
                Cancel order
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

// Sample transaction data based on the schema
const transactions: OrderTransaction[] = [
  {
    id: "728ed52f-1123-4834-b322-31cb5af7a1c0",
    orderDate: new Date("2025-03-01"),
    status: "COMPLETED",
    totalAmount: 149.97,
    paymentMethod: "CREDIT_CARD",
    notes: null,
    user: {
      id: "user-1",
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@example.com"
    },
    orderItems: [
      {
        id: "item-1",
        quantity: 3,
        unitPrice: 49.99,
        product: {
          id: "prod-1",
          name: "Colombia Single Origin",
          category: "COFFEE_BEAN"
        }
      }
    ]
  },
  {
    id: "489e1d42-5a51-42e4-92cc-f252d38fcac3",
    orderDate: new Date("2025-02-28"),
    status: "PROCESSING",
    totalAmount: 899.99,
    paymentMethod: "BANK_TRANSFER",
    notes: "Gift for company office",
    user: {
      id: "user-2",
      firstName: "Michael",
      lastName: "Chen",
      email: "m.chen@corpexample.com"
    },
    orderItems: [
      {
        id: "item-2",
        quantity: 1,
        unitPrice: 899.99,
        product: {
          id: "prod-2",
          name: "Professional Espresso Machine",
          category: "MACHINE"
        }
      }
    ]
  },
  {
    id: "12a3b456-7c89-40d1-a234-56e7f8g9h0i1",
    orderDate: new Date("2025-02-27"),
    status: "PENDING",
    totalAmount: 154.97,
    paymentMethod: "MOBILE_PAYMENT",
    notes: null,
    user: {
      id: "user-3",
      firstName: "David",
      lastName: "Wilson",
      email: "davidw@example.com"
    },
    orderItems: [
      {
        id: "item-3",
        quantity: 2,
        unitPrice: 49.99,
        product: {
          id: "prod-3",
          name: "Ethiopian Yirgacheffe",
          category: "COFFEE_BEAN"
        }
      },
      {
        id: "item-4",
        quantity: 1,
        unitPrice: 54.99,
        product: {
          id: "prod-4",
          name: "Premium Coffee Filter Set",
          category: "ACCESSORY"
        }
      }
    ]
  },
  {
    id: "7890c123-4d56-47e8-9f01-2g34h5i6j7k8",
    orderDate: new Date("2025-02-25"),
    status: "CANCELLED",
    totalAmount: 1299.98,
    paymentMethod: "CREDIT_CARD",
    notes: "Customer changed their mind",
    user: {
      id: "user-4",
      firstName: "Emma",
      lastName: "Taylor",
      email: "emma.t@example.com"
    },
    orderItems: [
      {
        id: "item-5",
        quantity: 1,
        unitPrice: 999.99,
        product: {
          id: "prod-5",
          name: "Commercial Espresso Machine",
          category: "MACHINE"
        }
      },
      {
        id: "item-6",
        quantity: 1,
        unitPrice: 299.99,
        product: {
          id: "prod-6",
          name: "Professional Coffee Grinder",
          category: "MACHINE"
        }
      }
    ]
  },
  {
    id: "def45678-9g01-42h3-i456-j7k8l9m0n1o2",
    orderDate: new Date("2025-02-20"),
    status: "COMPLETED",
    totalAmount: 273.96,
    paymentMethod: "CASH",
    notes: "Picked up in-store",
    user: {
      id: "user-5",
      firstName: "James",
      lastName: "Brown",
      email: "james.b@example.com"
    },
    orderItems: [
      {
        id: "item-7",
        quantity: 4,
        unitPrice: 24.99,
        product: {
          id: "prod-7",
          name: "Coffee Mug Set",
          category: "ACCESSORY"
        }
      },
      {
        id: "item-8",
        quantity: 2,
        unitPrice: 29.99,
        product: {
          id: "prod-8",
          name: "French Press",
          category: "ACCESSORY"
        }
      },
      {
        id: "item-9",
        quantity: 2,
        unitPrice: 69.99,
        product: {
          id: "prod-9",
          name: "Costa Rica Premium Blend",
          category: "COFFEE_BEAN"
        }
      }
    ]
  },
]

export function OrderTransactionHistory() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: transactions,
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
      <div className="flex items-center justify-between py-4">
        <h2 className="text-2xl font-bold">Order Transactions</h2>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Filter by customer..."
            value={(table.getColumn("customer")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("customer")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Status <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue(undefined)}>
                All
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("PENDING")}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("PROCESSING")}>
                Processing
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("COMPLETED")}>
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("CANCELLED")}>
                Cancelled
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
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
                  No orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} order(s) selected.
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

// Example page component that uses the OrderTransactionHistory
export default function OrderTransactionsPage() {
  return (
    <div className="container mx-auto py-10">
      <OrderTransactionHistory />
    </div>
  )
}