"use client";

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const visitorsData = [
    { date: "Sep 06", visitors: 320, pageViews: 710 },
    { date: "Sep 07", visitors: 410, pageViews: 890 },
    { date: "Sep 08", visitors: 380, pageViews: 820 },
    { date: "Sep 09", visitors: 520, pageViews: 1120 },
    { date: "Sep 10", visitors: 470, pageViews: 980 },
    { date: "Sep 11", visitors: 610, pageViews: 1340 },
    { date: "Sep 12", visitors: 720, pageViews: 1580 },
];

const topPages = [
    { page: "Home", views: 1580, visitors: 1120, duration: "1m 42s" },
    { page: "Our Services", views: 1124, visitors: 834, duration: "2m 18s" },
    { page: "Past Events", views: 892, visitors: 641, duration: "1m 54s" },
    { page: "Our Story", views: 641, visitors: 482, duration: "1m 21s" },
    { page: "Contact Us", views: 438, visitors: 327, duration: "1m 08s" },
];

const topServices = [
    { name: "Event Management", views: 431 },
    { name: "Public Relations", views: 328 },
    { name: "Corporate Events", views: 281 },
    { name: "Digital Marketing", views: 192 },
    { name: "Media Production", views: 147 },
];

const trafficSources = [
    { name: "Direct", value: 34 },
    { name: "Google", value: 29 },
    { name: "Instagram", value: 18 },
    { name: "LinkedIn", value: 11 },
    { name: "Facebook", value: 8 },
];

const devices = [
    { name: "Mobile", value: 68 },
    { name: "Desktop", value: 29 },
    { name: "Tablet", value: 3 },
];

const countries = [
    { country: "Egypt", visitors: 1842 },
    { country: "Saudi Arabia", visitors: 321 },
    { country: "UAE", visitors: 214 },
    { country: "USA", visitors: 112 },
    { country: "UK", visitors: 87 },
];

const recentActivity = [
    {
        action: "Page Visit",
        page: "/services",
        time: "2 minutes ago",
    },
    {
        action: "Blog View",
        page: "/blog/event-management",
        time: "5 minutes ago",
    },
    {
        action: "Contact Submitted",
        page: "/contact",
        time: "11 minutes ago",
    },
    {
        action: "WhatsApp Click",
        page: "/services",
        time: "18 minutes ago",
    },
    {
        action: "Event View",
        page: "/events/event-name",
        time: "24 minutes ago",
    },
];

const statCards = [
    {
        title: "Visitors",
        value: "2,841",
        change: "+18.4%",
        positive: true,
        icon: "👥",
    },
    {
        title: "Sessions",
        value: "1,934",
        change: "+11.2%",
        positive: true,
        icon: "◉",
    },
    {
        title: "Page Views",
        value: "6,721",
        change: "+24.8%",
        positive: true,
        icon: "◫",
    },
    {
        title: "Avg. Duration",
        value: "2m 14s",
        change: "+8.7%",
        positive: true,
        icon: "◷",
    },
    {
        title: "Bounce Rate",
        value: "31.4%",
        change: "-5.2%",
        positive: true,
        icon: "↗",
    },
    {
        title: "Conversions",
        value: "127",
        change: "+14.3%",
        positive: true,
        icon: "✓",
    },
];
function Card({ children, className = "" }) {
    return (
        <div
            className={ `rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${className}` }
        >
            { children }
        </div>
    );
}

function CardTitle({ title, subtitle }) {
    return (
        <div className="mb-5">
            <h2 className="text-lg font-semibold text-[#042a37]">
                { title }
            </h2>

            { subtitle && (
                <p className="mt-1 text-sm text-gray-500">
                    { subtitle }
                </p>
            ) }
        </div>
    );
}

function ProgressBar({ value }) {
    return (
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div
                className="h-full rounded-full bg-[#042a37]"
                style={ { width: `${value}%` } }
            />
        </div>
    );
}

export default function AdminDashboard() {
    return (
        <section>
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="mt-2 text-secondary">
                Welcome to Paradigm admin dashboard.
            </p>

            <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">

                {/* Header */ }
                <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-[#042a37] md:text-3xl">
                            Statistics
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Monitor your website visitors, content performance,
                            and user activity.
                        </p>
                    </div>

                    <select
                        defaultValue="7"
                        className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-[#042a37] outline-none focus:border-[#60daef]"
                    >
                        <option value="1">Today</option>
                        <option value="7">Last 7 days</option>
                        <option value="30">Last 30 days</option>
                        <option value="90">Last 90 days</option>
                        <option value="365">This year</option>
                    </select>
                </div>

                {/* Stat Cards */ }
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    { statCards.map((stat) => (
                        <Card key={ stat.title }>
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        { stat.title }
                                    </p>

                                    <p className="mt-2 text-2xl font-bold text-[#042a37]">
                                        { stat.value }
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#042a37]/5 text-lg">
                                    { stat.icon }
                                </div>
                            </div>

                            <p
                                className={ `mt-3 text-xs font-semibold ${stat.positive
                                        ? "text-green-600"
                                        : "text-red-500"
                                    }` }
                            >
                                { stat.change }{ " " }
                                <span className="font-normal text-gray-400">
                                    vs previous period
                                </span>
                            </p>
                        </Card>
                    )) }
                </div>

                {/* Visitors Chart */ }
                <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

                    <Card className="xl:col-span-2">
                        <CardTitle
                            title="Visitors & Page Views"
                            subtitle="Website traffic over the selected period"
                        />

                        <div className="h-[320px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={ visitorsData }>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={ false }
                                    />

                                    <XAxis
                                        dataKey="date"
                                        axisLine={ false }
                                        tickLine={ false }
                                    />

                                    <YAxis
                                        axisLine={ false }
                                        tickLine={ false }
                                    />

                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="visitors"
                                        stroke="#042a37"
                                        fill="#042a37"
                                        fillOpacity={ 0.12 }
                                        strokeWidth={ 2 }
                                    />

                                    <Area
                                        type="monotone"
                                        dataKey="pageViews"
                                        stroke="#60daef"
                                        fill="#60daef"
                                        fillOpacity={ 0.12 }
                                        strokeWidth={ 2 }
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-4 flex gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#042a37]" />
                                Visitors
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#60daef]" />
                                Page Views
                            </div>
                        </div>
                    </Card>

                    {/* Traffic Sources */ }
                    <Card>
                        <CardTitle
                            title="Traffic Sources"
                            subtitle="Where your visitors come from"
                        />

                        <div className="h-[220px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={ trafficSources }
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={ 55 }
                                        outerRadius={ 85 }
                                        paddingAngle={ 3 }
                                    >
                                        { trafficSources.map((entry, index) => (
                                            <Cell
                                                key={ entry.name }
                                                fill={
                                                    [
                                                        "#042a37",
                                                        "#60daef",
                                                        "#315c68",
                                                        "#7199a3",
                                                        "#a8c2c8",
                                                    ][index]
                                                }
                                            />
                                        )) }
                                    </Pie>

                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="space-y-3">
                            { trafficSources.map((source) => (
                                <div
                                    key={ source.name }
                                    className="flex items-center justify-between text-sm"
                                >
                                    <span className="text-gray-600">
                                        { source.name }
                                    </span>

                                    <span className="font-semibold text-[#042a37]">
                                        { source.value }%
                                    </span>
                                </div>
                            )) }
                        </div>
                    </Card>
                </div>

                {/* Top Pages + Services */ }
                <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

                    <Card className="xl:col-span-2">
                        <CardTitle
                            title="Top Pages"
                            subtitle="Most visited pages on your website"
                        />

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-gray-100 text-xs uppercase text-gray-400">
                                        <th className="pb-3 font-medium">
                                            Page
                                        </th>

                                        <th className="pb-3 font-medium">
                                            Views
                                        </th>

                                        <th className="pb-3 font-medium">
                                            Visitors
                                        </th>

                                        <th className="pb-3 font-medium">
                                            Avg. Duration
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { topPages.map((page) => (
                                        <tr
                                            key={ page.page }
                                            className="border-b border-gray-50 last:border-0"
                                        >
                                            <td className="py-4 font-medium text-[#042a37]">
                                                { page.page }
                                            </td>

                                            <td className="py-4 text-gray-600">
                                                { page.views.toLocaleString() }
                                            </td>

                                            <td className="py-4 text-gray-600">
                                                { page.visitors.toLocaleString() }
                                            </td>

                                            <td className="py-4 text-gray-600">
                                                { page.duration }
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    <Card>
                        <CardTitle
                            title="Top Services"
                            subtitle="Services receiving the most views"
                        />

                        <div className="space-y-5">
                            { topServices.map((service, index) => (
                                <div key={ service.name }>
                                    <div className="mb-2 flex justify-between gap-4">
                                        <span className="text-sm font-medium text-[#042a37]">
                                            { index + 1 }. { service.name }
                                        </span>

                                        <span className="text-sm text-gray-500">
                                            { service.views }
                                        </span>
                                    </div>

                                    <ProgressBar
                                        value={
                                            (service.views /
                                                topServices[0].views) *
                                            100
                                        }
                                    />
                                </div>
                            )) }
                        </div>
                    </Card>
                </div>

                {/* Devices + Countries */ }
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

                    {/* Devices */ }
                    <Card>
                        <CardTitle
                            title="Devices"
                            subtitle="Devices used by your visitors"
                        />

                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={ devices }
                                    layout="vertical"
                                    margin={ {
                                        left: 20,
                                        right: 20,
                                    } }
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        horizontal={ false }
                                    />

                                    <XAxis
                                        type="number"
                                        domain={ [0, 100] }
                                        unit="%"
                                    />

                                    <YAxis
                                        type="category"
                                        dataKey="name"
                                        width={ 70 }
                                    />

                                    <Tooltip />

                                    <Bar
                                        dataKey="value"
                                        fill="#042a37"
                                        radius={ [0, 6, 6, 0] }
                                        barSize={ 24 }
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Countries */ }
                    <Card>
                        <CardTitle
                            title="Visitors by Country"
                            subtitle="Top countries by visitor count"
                        />

                        <div className="space-y-5">
                            { countries.map((country, index) => (
                                <div key={ country.country }>
                                    <div className="mb-2 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 text-xs font-semibold text-gray-500">
                                                { index + 1 }
                                            </span>

                                            <span className="text-sm font-medium text-[#042a37]">
                                                { country.country }
                                            </span>
                                        </div>

                                        <span className="text-sm font-semibold text-gray-600">
                                            { country.visitors.toLocaleString() }
                                        </span>
                                    </div>

                                    <ProgressBar
                                        value={
                                            (country.visitors /
                                                countries[0].visitors) *
                                            100
                                        }
                                    />
                                </div>
                            )) }
                        </div>
                    </Card>
                </div>

                {/* Recent Activity */ }
                <Card className="mt-6">
                    <CardTitle
                        title="Recent Activity"
                        subtitle="Latest visitor interactions"
                    />

                    <div className="divide-y divide-gray-100">
                        { recentActivity.map((activity, index) => (
                            <div
                                key={ index }
                                className="flex items-center justify-between gap-4 py-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#042a37]/5 text-sm">
                                        { activity.action ===
                                            "Contact Submitted"
                                            ? "✉"
                                            : activity.action ===
                                                "WhatsApp Click"
                                                ? "◉"
                                                : "↗" }
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-[#042a37]">
                                            { activity.action }
                                        </p>

                                        <p className="mt-0.5 text-xs text-gray-500">
                                            { activity.page }
                                        </p>
                                    </div>
                                </div>

                                <span className="whitespace-nowrap text-xs text-gray-400">
                                    { activity.time }
                                </span>
                            </div>
                        )) }
                    </div>
                </Card>

            </div>
        </section>
    );
}