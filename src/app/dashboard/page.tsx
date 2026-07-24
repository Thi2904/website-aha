"use client";

import DashboardSection from "./section/FirstSection";

const mockData = {
    username: "Dinh Thi",
    totalSubmissions: 9,
    daysLeft: 12,
    completedSubmissions: 7,
    completionPercent: 77,
    entriesCompletedLabel: "7/9 entries completed",
    projects: [
        { name: "Project 1", percent: 20 },
        { name: "Project 2", percent: 55 },
        { name: "Project 3", percent: 90 },
        { name: "Project 4", percent: 15 },
        { name: "Project 5", percent: 95 },
    ],
    account: {
        name: "Dinh Thi",
        organization: "Vietnam Design & Build Center",
        email: "thi2904@gmail.com",
        address: "108 Nguyen Thang Binh",
    },
    supportEmail: "thi2904@gmail.com",
    supportPhone: "+84 946 87 1653",
};

export default function DashboardPage() {
    return (
        <DashboardSection
            {...mockData}
            onCompleteSubmission={() => console.log("complete submission")}
            onViewDetails={() => console.log("view details")}
            onAddMoreNominations={() => console.log("add more nominations")}
            onChangeInformation={() => console.log("change information")}
        />
    );
}
