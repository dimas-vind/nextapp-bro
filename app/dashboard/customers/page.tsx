import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { fetchCustomers } from '@/app/lib/data'
import { FormattedCustomersTable } from '@/app/lib/definitions';

export const metadata: Metadata = {
    title: 'Customers'
}

export default async function Page() {

    const customer: Array<FormattedCustomersTable> = await fetchCustomers()

    console.log(customer)

    return (
        <div className="w-full">
            <Suspense fallback={<TableRowSkeleton />}>
                <Table customers={customer} />
            </Suspense>
        </div>
    );
}