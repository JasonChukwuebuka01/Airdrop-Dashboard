interface NetworkData {
    Time: string;
    DownloadSpeed: number;
    UploadSpeed: number;
    IPAddress: string;
    Bytes: number;
}

export const tableData: NetworkData[] = [
    {
        Time: "2025-02-04 11:26",
        DownloadSpeed: 125.45,
        UploadSpeed: 45.32,
        IPAddress: "192.168.1.105",
        Bytes: 100
    },
    {
        Time: "2025-02-04 12:45",
        DownloadSpeed: 95.78,
        UploadSpeed: 38.91,
        IPAddress: "192.168.1.107",
        Bytes: 50
    },
    {
        Time: "2025-02-04 13:15",
        DownloadSpeed: 150.23,
        UploadSpeed: 52.67,
        IPAddress: "192.168.1.113",
        Bytes: 100
    },
    {
        Time: "2025-02-04 14:30",
        DownloadSpeed: 88.92,
        UploadSpeed: 41.45,
        IPAddress: "192.168.1.118",
        Bytes: 100
    },
    {
        Time: "2025-02-04 15:45",
        DownloadSpeed: 142.67,
        UploadSpeed: 48.89,
        IPAddress: "192.168.1.122",
        Bytes: 100
    },
    {
        Time: "2025-02-04 16:30",
        DownloadSpeed: 133.89,
        UploadSpeed: 46.75,
        IPAddress: "192.168.1.125",
        Bytes: 100
    },
    {
        Time: "2025-02-04 17:15",
        DownloadSpeed: 115.34,
        UploadSpeed: 43.21,
        IPAddress: "192.168.1.128",
        Bytes: 100
    },
    {
        Time: "2025-02-04 18:00",
        DownloadSpeed: 128.56,
        UploadSpeed: 49.90,
        IPAddress: "192.168.1.130",
        Bytes: 100
    },
    {
        Time: "2025-02-04 19:20",
        DownloadSpeed: 138.90,
        UploadSpeed: 51.23,
        IPAddress: "192.168.1.133",
        Bytes: 100
    },
    {
        Time: "2025-02-04 20:10",
        DownloadSpeed: 145.67,
        UploadSpeed: 47.88,
        IPAddress: "192.168.1.135",
        Bytes: 100
    },
    {
        Time: "2025-02-04 21:00",
        DownloadSpeed: 120.45,
        UploadSpeed: 44.67,
        IPAddress: "192.168.1.138",
        Bytes: 100
    }
];



interface TransactionHistory {
    TransactionId: string;
    TransactionType: string;
    Time: string;
    BytesEarned: number;
    Details: string;
    cycle: string;
}

export const transactionHistory: TransactionHistory[] = [
    {
        TransactionId: "TRANS-1740751112799-464349",
        TransactionType: "Daily Claim Quest",
        Time: "04/03/2025",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 1",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112800-467821",
        TransactionType: "Speedtest Earning",
        Time: "04/05/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112801-469234",
        TransactionType: "Speedtest Earning",
        Time: "04/07/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112802-471567",
        TransactionType: "Daily Claim Quest",
        Time: "04/09/2025",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 2",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112803-473890",
        TransactionType: "Speedtest Earning",
        Time: "04/11/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112804-476123",
        TransactionType: "Speedtest Earning",
        Time: "04/13/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112805-478456",
        TransactionType: "Speedtest Earning",
        Time: "04/15/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112806-480789",
        TransactionType: "Daily Claim Quest",
        Time: "04/17/2025",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 3",
        cycle: "kilo cycle"
    },
    {
        TransactionId: "TRANS-1740751112807-483012",
        TransactionType: "Daily Claim Quest",
        Time: "04/19/2025",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 1",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112808-485345",
        TransactionType: "Daily Claim Quest",
        Time: "04/21/2025",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 2",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112809-487678",
        TransactionType: "Daily Claim Quest",
        Time: "04/23/2025",
        BytesEarned: 100,
        Details: "Earned Bytes for daily streak 3",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112810-489901",
        TransactionType: "Speedtest Earning",
        Time: "04/25/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112811-492234",
        TransactionType: "Speedtest Earning",
        Time: "04/27/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112812-494567",
        TransactionType: "Speedtest Earning",
        Time: "04/29/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    },
    {
        TransactionId: "TRANS-1740751112813-496890",
        TransactionType: "Speedtest Earning",
        Time: "04/30/2025",
        BytesEarned: 200,
        Details: "Earned Bytes From Speedtest",
        cycle: "mega cycle"
    }
];




interface CycleData {
    Cycle: string;
    StartDate: string
    EndDate: string
    StartTime: string
    EndTime: string
    ReferralReward: number;
    SpeedtestEarning: number;
    ReferralCommission: number;
    QuestEarning: number | string;
    Total: string | number;
}

export const cycleData: CycleData[] = [
    {
        Cycle: "Kilo Cycle",
        StartDate: "01/01/2025",
        EndDate: "28/02/2025",
        StartTime: "12:00",
        EndTime: "11:59",
        ReferralReward: 0,
        SpeedtestEarning: 0,
        ReferralCommission: 0,
        QuestEarning: 0,
        Total: "0"
    },
    {
        Cycle: "Mega Cycle",
        StartDate: "01/03/2025",
        EndDate: "--/--/2025",
        StartTime: "12:00",
        EndTime: "11:59",
        ReferralReward: 0,
        SpeedtestEarning: 0,
        ReferralCommission: 0,
        QuestEarning: 0,
        Total: 0
    }
];