import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import DashboardLayoutBase from '@/components/server/dashboard/DashboardLayoutBase';

const DashboardLayout = async () => {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
        redirect('/auth/signin');
    }

    return <DashboardLayoutBase>Dashboard Layout</DashboardLayoutBase>;
};

export default DashboardLayout;
